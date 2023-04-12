import { MockBackend, RequestParams } from './mock-backend';
import { STATUS } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Rx';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

const payload = require('./data/booking-system-mock-response.json');

export class TrainBookingMockService extends MockBackend {
public static PATH: RegExp = /(.*)/;

public get(params: RequestParams): Observable<HttpResponse<any>>{
return Observable.of(new HttpResponse<any>({
body: payload,
status: STATUS.OK,
headers: new HttpHeaders(),
}))
}


}
