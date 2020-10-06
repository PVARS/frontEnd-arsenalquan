import {Injectable} from '@angular/core';
import * as jQuery from 'jquery';
import {HttpClient, HttpRequest, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
  }

  getAll(url): Observable<any> {
    return this.http.get<any>(url + '/');
  }

}
