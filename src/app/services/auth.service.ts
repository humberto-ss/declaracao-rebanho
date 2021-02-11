import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isUserLogin: boolean = false;
  constructor() { }

  get isUserLogin(){
    return this._isUserLogin;
  }

  login(){
    this._isUserLogin = true;
  }
}
