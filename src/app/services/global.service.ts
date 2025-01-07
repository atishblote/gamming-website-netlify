import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseUrl:string= 'https://gamming-website-api-wc8u.onrender.com'
  // baseUrl:string= 'http://localhost:3333'
  // baseUrl:string= 'https://api.cricfootbook.com'

  // globalToken:string = "c85705760a88c0e2e1e073783433be0e62cb4778fdc9cbebdbd5b53b3f1601bf9317a2cfb804feff2897680d8bbb793932ad3e1986bff72c3c4ed361f8cd705ae225ffd4038c07815c2aee0d60124771c8151408f6da5f9c281e26a08bb43b6cb2a6ccd76fac02a35562fe77e9069da58222cec9fae87ee10e416947b60c2a23"

  apiKey:any

  constructor(private http: HttpClient) { }

  private globalHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  getWithToken(endpoint:string){
    const url = `${this.baseUrl}/${endpoint}`
    const headers = this.globalHeader()
    return this.http.get(url, { headers })
  }


}
