import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from 'src/testing/router-link-directive-stub';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  let links: string[]
  let linkDes: any[]
  let routerLinks: any[]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent, RouterLinkDirectiveStub],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    links = ['deals', 'games', 'stores']
    fixture.detectChanges();

    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
