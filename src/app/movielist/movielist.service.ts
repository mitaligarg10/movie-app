import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MovieListService {
  constructor(private http: Http) { }
  // get movies method started which bring the data from omdb api
  getMovies(movieName: string) {
    return this.http.get ('http://www.omdbapi.com/?s=' + movieName)
    .map((response) => response.json().Search || []);
  }
}
