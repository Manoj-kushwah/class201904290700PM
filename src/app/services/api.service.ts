import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {
  public static URL_USERS:string = '';
  public static URL_LOGIN:string = 'https://jsistudentportal.000webhostapp.com/login.php';
  constructor(private http: HttpClient) { }
  public login(loginUser: any): Promise<Response> {
    return this.http.post(ApiService.URL_LOGIN, loginUser, {headers: {'Content-Type': 'application/json'}})
      .toPromise()
      .then(value => value)
      .catch(reason => reason);
  }
}
