import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from 'src/testing/router-link-directive-stub';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let title: string
  let links: string[]
  let linkDes: any[]
  let routerLinks: any[]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, RouterLinkDirectiveStub],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    title = 'CheapShark';
    links = ['deals', 'games', 'stores']
    fixture.detectChanges();

    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'CheapShark'`, () => {
    expect(component.title).toEqual(title);
  });

  it(`should render title 'CheapShark'`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain(title);
  });

  it('should have three routeNames', () => {
    expect(routerLinks.length).toEqual(3)
  })

  it("should have 'Deals', 'Games' and 'Stores' links ", () => {
    links.forEach((name, index) => {
      expect(routerLinks[index].linkParams).toBe(`/${name}`)
    })
  })

  it(`can click links in template`, () => {
    const linkDe = linkDes[1]
    const link = routerLinks[1]

    expect(link.navigateTo).toBeUndefined()
    linkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(link.navigateTo).toBe('/' + links[1])
  })
});
