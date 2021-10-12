import { convertToParamMap, ParamMap, Params } from '@angular/router';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

export class ActivatedRouteStub {

    private paramSubject = new BehaviorSubject<any>({});
    private queryParamSubject = new BehaviorSubject<any>({});

    constructor() {
        this.setParamMap({});
        this.setQueryParamMap({})
    }

    readonly params = this.paramSubject.asObservable();
    readonly queryParams = this.queryParamSubject.asObservable();

    readonly snapshot = {
        queryParams: this.queryParamSubject.value,
        params: this.paramSubject.value
    }

    setParamMap(params?: Params) {
        this.paramSubject.next(convertToParamMap(params));
    }

    setQueryParamMap(params?: Params) {
        this.queryParamSubject.next(convertToParamMap(params));
    }
}