import { RequestInfo, STATUS } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Rx';
import { HttpResponse } from '@angular/common/http';

export type RequestParams = {
req: RequestInfo,
}


export abstract class MockBackend {

public get(params: RequestParams): Observable<HttpResponse<any>>{
return Observable.of(new HttpResponse<any>(
{
 url: params.req.resourceUrl,
 status: STATUS.NOT_FOUND,
 statusText: `Cannot GET to "${params.req.resourceUrl}".`
}
)

);

}

public put(params: RequestParams): Observable<HttpResponse<any>>{
return Observable.of(new HttpResponse<any>(
{
 url: params.req.resourceUrl,
 status: STATUS.NOT_FOUND,
 statusText: `Cannot PUT to "${params.req.resourceUrl}".`
}
)

);

}

public post(params: RequestParams): Observable<HttpResponse<any>>{
return Observable.of(new HttpResponse<any>(
{
 url: params.req.resourceUrl,
 status: STATUS.NOT_FOUND,
 statusText: `Cannot POST to "${params.req.resourceUrl}".`
}
)

);

}

public delete(params: RequestParams): Observable<HttpResponse<any>>{
return Observable.of(new HttpResponse<any>(
{
 url: params.req.resourceUrl,
 status: STATUS.NOT_FOUND,
 statusText: `Cannot DELETE to "${params.req.resourceUrl}".`
}
)

);

}

protected parseUrl(url: string, regex: RegExp): RegExpExecArray {
  return regex.exec(url);
}


}
