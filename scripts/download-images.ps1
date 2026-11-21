$ErrorActionPreference = 'Continue'
$root    = (Get-Location).Path
$doc     = Join-Path $root 'docs\IMAGES-NEEDED.md'
$out     = Join-Path $root 'public\assets\images'
$credits = Join-Path $root 'docs\IMAGE-CREDITS.md'
$ua = @{ 'User-Agent' = 'DestiGO-student-project/1.0 (SUPCOM academic project; github.com/ons-sup/DestiGO)' }

function Find-Image($q) {
  $url = "https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=15&gsrsearch=$([uri]::EscapeDataString($q + ' filetype:bitmap'))&prop=imageinfo&iiprop=url|size|mime|extmetadata&iiurlwidth=1000"
  $r = $null
  for ($i = 0; $i -lt 3 -and -not $r; $i++) {
    try { $r = Invoke-RestMethod -Uri $url -Headers $ua } catch { Start-Sleep 5 }
  }
  if (-not $r -or -not $r.query) { return $null }
  foreach ($p in ($r.query.pages.PSObject.Properties.Value | Sort-Object index)) {
    $ii = $p.imageinfo[0]
    if ($ii.mime -ne 'image/jpeg') { continue }
    if ($ii.width -lt 1000 -or $ii.width -le $ii.height) { continue }
    if ($p.title -match 'map|logo|flag|coat|plan|diagram|drawing') { continue }
    $lic = $ii.extmetadata.LicenseShortName.Value
    if ($lic -notmatch 'Public domain|CC0|CC BY|PD') { continue }
    $thumb = if ($ii.thumburl) { $ii.thumburl } else { $ii.url }
    return [pscustomobject]@{
      Title   = $p.title
      Thumb   = $thumb
      Page    = $ii.descriptionurl
      License = $lic
      Author  = (($ii.extmetadata.Artist.Value) -replace '<[^>]+>', '').Trim()
    }
  }
  return $null
}

$text  = Get-Content $doc -Raw
$paths = [regex]::Matches($text, '[A-Za-z0-9_\-/\\\.]+\.(?:jpg|jpeg|png|webp|jfif)', 'IgnoreCase') |
  ForEach-Object { $_.Value -replace '\\', '/' } |
  ForEach-Object { if ($_ -match 'assets/images/(.+)$') { $Matches[1] } else { $_ } } |
  Sort-Object -Unique
Write-Host "Found $($paths.Count) filenames in IMAGES-NEEDED.md"

if (-not (Test-Path $credits)) {
  "# Image credits (Wikimedia Commons)`n`n| File | Title | Author | License | Source |`n|---|---|---|---|---|" | Set-Content $credits -Encoding UTF8
}

$ok = @(); $missing = @()
foreach ($rel in $paths) {
  $dest = Join-Path $out ($rel -replace '/', '\')
  if (Test-Path $dest) { continue }
  $query = (($rel -replace '\.[^.]+$', '') -replace '[-_/]+', ' ' -replace '\d+$', '').Trim()
  if ($query -notmatch 'Italy|Rome|Venice|Florence|Milan|Amalfi|Cinque') { $query += ' Italy' }
  Write-Host "-> $rel  [$query]"
  $img = Find-Image $query
  Start-Sleep -Milliseconds 1500
  if (-not $img) { Write-Host '   not found (placeholder will be used)'; $missing += $rel; continue }
  New-Item -ItemType Directory -Force -Path (Split-Path $dest) | Out-Null
  try {
    Invoke-WebRequest -Uri $img.Thumb -Headers $ua -OutFile $dest
    "| $rel | $($img.Title) | $($img.Author) | $($img.License) | $($img.Page) |" | Add-Content $credits -Encoding UTF8
    $ok += $rel
    Write-Host "   OK: $($img.Title) ($($img.License))"
  } catch { Write-Host '   download failed'; $missing += $rel }
  Start-Sleep -Milliseconds 1500
}
Write-Host "`nDownloaded: $($ok.Count)   Missing: $($missing.Count)"
$missing | ForEach-Object { Write-Host "  missing: $_" }