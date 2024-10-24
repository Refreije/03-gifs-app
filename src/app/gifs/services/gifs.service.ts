import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';
//const GIPHY_API_KEY = 'BJbmoon9VNxS9MHrMzpC6wYPD4lO0Rgl';
@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = []
  private _tagsHistory: string[] = [];
  private apiKey : string = 'BJbmoon9VNxS9MHrMzpC6wYPD4lO0Rgl'
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  constructor(private http: HttpClient) {

    this.loadLocalStorage();

  }

  //devuelve una copia de _tagsHistory asi no lo modifcan externamente tienen que llamar a este get si o si
  get tagsHistory() :  string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory (tag: string): void {
    tag = tag.toLocaleLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();

  }

  private saveLocalStorage() : void {

    localStorage.setItem('history', JSON.stringify( this._tagsHistory))
  }
  private loadLocalStorage(): void{
    if(!localStorage.getItem('history')){
      return;
    }
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if(this._tagsHistory.length ===0){return};
    this.searchTag(this._tagsHistory[0])
  }

   searchTag(tag : string): void
  {
    if(tag.length === 0){
      return;
    }
    this.organizeHistory(tag);
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search?`,{params})
    .subscribe(resp => {
      this.gifList = resp.data;
      console.log({gifs: this.gifList});

    })
  //   this.organizeHistory(tag)
  //   fetch('https://api.giphy.com/v1/gifs/search?api_key=BJbmoon9VNxS9MHrMzpC6wYPD4lO0Rgl&q=valorant&limit=10')
  //   .then( resp => resp.json())
  //   .then(data => console.log(data))
  // }
  }


}
