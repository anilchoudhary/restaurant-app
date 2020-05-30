import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  URL = 'http://localhost:3000/dishes/';
  constructor(private _http: HttpClient) {}
  getMenu() {
    return this._http.get(this.URL);
  }
}
