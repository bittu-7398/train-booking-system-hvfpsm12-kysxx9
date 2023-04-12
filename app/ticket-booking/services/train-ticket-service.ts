import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TrainTicketService {
constructor(private http: HttpClient){}

public get(): Observable<HttpResponse<any>> {
 return this.http.get<any>(
'/get/seats', {headers: null}
);

}
}
