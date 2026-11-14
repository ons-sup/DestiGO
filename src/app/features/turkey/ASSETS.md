# Image Assets — Türkiye Portal

All images below are sourced from Wikimedia Commons and saved under `public/images/turkey/`.
No random Google Images or invented URLs were used. Each file lists its source, author,
license, and attribution requirements.

## turkey-hero.jpg
- **Used by:** Hero background (`hero.component.html`), intro figure (`intro.component.html`)
- **Description:** Aerial view of the historical peninsula and modern skyline of Istanbul, Türkiye
- **Source:** https://commons.wikimedia.org/wiki/File:Historical_peninsula_and_modern_skyline_of_Istanbul.jpg
- **Direct file:** https://upload.wikimedia.org/wikipedia/commons/c/cb/Historical_peninsula_and_modern_skyline_of_Istanbul.jpg
- **Author:** Hunanuk
- **License:** CC0 (Creative Commons Zero, Public Domain Dedication)
- **License URL:** http://creativecommons.org/publicdomain/zero/1.0/deed.en
- **Attribution required:** No
- **Alt text:** Türkiye landscape

## istanbul.jpg
- **Used by:** Istanbul destination card (`destination-card.component.html` via `turkey.data.ts`)
- **Description:** Istanbul skyline silhouette, Türkiye
- **Source:** https://commons.wikimedia.org/wiki/File:Istanbul_siluet.jpg
- **Direct file:** https://upload.wikimedia.org/wikipedia/commons/4/45/Istanbul_siluet.jpg
- **Author:** Sinoplu diyojen (via Turkish Wikipedia)
- **License:** Public domain
- **Attribution required:** No
- **Alt text:** Istanbul skyline

## cappadocia.jpg
- **Used by:** Cappadocia destination card (`destination-card.component.html` via `turkey.data.ts`), experiences figure (`turkey-home.component.html`)
- **Description:** Hot air balloons over Cappadocia, Göreme National Park, Türkiye
- **Source:** https://commons.wikimedia.org/wiki/File:Balloons_in_Cappadocia.jpg
- **Direct file:** https://upload.wikimedia.org/wikipedia/commons/d/d3/Balloons_in_Cappadocia.jpg
- **Author:** Emrahuygun
- **License:** CC BY-SA 4.0 (Creative Commons Attribution-Share Alike 4.0)
- **License URL:** https://creativecommons.org/licenses/by-sa/4.0
- **Attribution required:** Yes — credit "Emrahuygun, CC BY-SA 4.0"
- **Alt text:** Cappadocia balloons

## antalya.jpg
- **Used by:** Antalya destination card (`destination-card.component.html` via `turkey.data.ts`)
- **Description:** Kaleiçi old town street, Antalya, Türkiye
- **Source:** https://commons.wikimedia.org/wiki/File:Kalei%C3%A7i_Old_Town,_Antalya,_Turkey_26_Feb_2022.jpg
- **Direct file:** https://upload.wikimedia.org/wikipedia/commons/4/40/Kalei%C3%A7i_Old_Town%2C_Antalya%2C_Turkey_26_Feb_2022.jpg
- **Author:** Sharon Hahn Darlin
- **License:** CC BY 2.0 (Creative Commons Attribution 2.0)
- **License URL:** https://creativecommons.org/licenses/by/2.0
- **Attribution required:** Yes — credit "Sharon Hahn Darlin, CC BY 2.0"
- **Alt text:** Antalya Kaleiçi old town

## Notes
- All images are landscape-oriented photographs of the intended destination.
- Images were downloaded directly from Wikimedia Commons with `curl` using a descriptive User-Agent.
- No WebP optimization was applied because no image-conversion tooling (cwebp/imagemagick) is available in this environment; files are stored as native JPEG.
- `public/` images are copied to the build output by Angular's asset configuration (`angular.json` `assets: [{ glob: '**/*', input: 'public' }]`), so `/images/turkey/*.jpg` paths resolve at runtime.
