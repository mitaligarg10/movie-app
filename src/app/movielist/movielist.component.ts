import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../movie/movie';
import { MovieListService } from './movielist.service';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
  })
export class MovielistComponent implements OnInit {
// to retreive a movie list into the variable
  movies: Movie[];
  constructor(private route: ActivatedRoute, private movieService: MovieListService) { }
  ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.movieService.getMovies(params['movieName']))
        .subscribe(movies => this.movies = movies);
console.log('inside movie.ts' + this.movies);
    }
}
