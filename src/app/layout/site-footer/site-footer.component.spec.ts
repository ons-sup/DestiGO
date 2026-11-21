import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SiteFooterComponent } from './site-footer.component';

describe('SiteFooterComponent', () => {
  let component: SiteFooterComponent;
  let fixture: ComponentFixture<SiteFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteFooterComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the site footer component', () => {
    expect(component).toBeTruthy();
  });

  it('should render global navigation links by default', () => {
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('DestiGO');
    expect(text).toContain('Türkiye');
    expect(text).toContain('Italy');
    expect(text).toContain('Spain');
    expect(text).toContain('Coming Soon');
    expect(text).toContain('Home');
    expect(text).toContain('Destinations');
    expect(text).toContain('Experiences');
    expect(text).toContain('About');
  });

  it('should render turkey-specific navigation when variant is turkey', () => {
    fixture.componentRef.setInput('variant', 'turkey');
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent;
    const hrefs = Array.from(fixture.nativeElement.querySelectorAll('a')).map((a) =>
      (a as HTMLAnchorElement).getAttribute('href'),
    );
    expect(text).toContain('Home');
    expect(text).toContain('Destinations');
    expect(text).toContain('Experiences');
    expect(text).toContain('Plan Your Trip');
    expect(hrefs).toContain('/turkey/destinations');
    expect(hrefs).toContain('/turkey/experiences');
  });

  it('should not display bullet points on list items', () => {
    const lists = fixture.nativeElement.querySelectorAll('ul');
    expect(lists.length).toBeGreaterThan(0);
    lists.forEach((list: HTMLUListElement) => {
      expect(list.classList.contains('list-none')).toBe(true);
    });
  });
});
