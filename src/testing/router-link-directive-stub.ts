import { Directive, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[routerLink]'
})
export class RouterLinkDirectiveStub {
    @Input('routerLink') linkParams: any;
    navigateTo: any;

    @HostListener('click')
    onClick() {
        this.navigateTo = this.linkParams;
    }
}