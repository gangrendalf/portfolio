import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _langs = [
    'pl',
    'en'
  ];
  private _texts$ = new ReplaySubject<any>(1);
  private _subscription: Subscription;


  constructor(private httpClient: HttpClient) {
    if(!this.language)
      this.language = 'pl';
      
    this.loadLangFile();
  }

  private loadLangFile() {
    if(this._subscription)
      this._subscription.unsubscribe();

    this._subscription = this.httpClient
      .get<any>(`/assets/languages/${this.language}/lang.json`, {responseType: 'json'})
      .subscribe(response => this._texts$.next(response) );
  }

  get languages () {
    return this._langs;
  }

  get language () { 
    return <'pl' | 'en'>localStorage.getItem('lang');
  }

  set language (value: 'pl' | 'en') {
    localStorage.setItem('lang', value);
    this.loadLangFile();
  }

  get textsJson$ () {
    return this._texts$.asObservable();
  }
}
