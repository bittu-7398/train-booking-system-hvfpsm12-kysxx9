import { MockBackend } from './mock-backend';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { HttpResponse, HttpRequest } from '@angular/common/http';
import { TrainBookingMockService } from './train-booking-mock.service';



@Injectable()
export class InMemoryBackend extends InMemoryDbService {
public static FAKE_DELAY_MS: number = 500;

private mockBackends: { path: RegExp, mock: MockBackend } [] = [];

constructor(){ super(); }

public createDb():{ } {
    this.mockBackends.push({ path: TrainBookingMockService.PATH, mock: new TrainBookingMockService() });
    return {};
  }

public get(reqInfo: RequestInfo): Observable < HttpResponse < any >> {

    const backend = this.getBackend(reqInfo.utils.getConfig().host, reqInfo.url, (reqInfo.req as any).urlWithParams);

    if(backend) {
      return backend.get({ req: reqInfo }).delay(InMemoryBackend.FAKE_DELAY_MS);

    }

return null;
  }


public put(reqInfo: RequestInfo): Observable < HttpResponse < any >> {

    const backend = this.getBackend(reqInfo.utils.getConfig().host, reqInfo.url, reqInfo.url);

    if(backend) {
      return backend.put({ req: reqInfo }).delay(InMemoryBackend.FAKE_DELAY_MS);

    }

return null;
  }

public post(reqInfo: RequestInfo): Observable < HttpResponse < any >> {

    const backend = this.getBackend(reqInfo.utils.getConfig().host, reqInfo.url, reqInfo.url);

    if(backend) {
      return backend.post({ req: reqInfo }).delay(InMemoryBackend.FAKE_DELAY_MS);

    }

return null;
  }


public delete (reqInfo: RequestInfo): Observable < HttpResponse < any >> {

    const backend = this.getBackend(reqInfo.utils.getConfig().host, reqInfo.url, reqInfo.url);

    if(backend) {
      return backend.delete({ req: reqInfo }).delay(InMemoryBackend.FAKE_DELAY_MS);

    }

return null;
  }


private getBackend(host: string, resourceUrl: string, url: string): MockBackend | undefined {

    if (resourceUrl.startsWith(host)) {
      const backend = this.mockBackends.find(o => o.path.test(url));
      return backend ? backend.mock : undefined;


    }

  }
}
