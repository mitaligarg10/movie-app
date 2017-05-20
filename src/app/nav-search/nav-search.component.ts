import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovielistComponent } from '../movielist/movielist.component';


@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styles: []
})
export class NavSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  // search movie method started
searchMovie(movieName: String) {
    console.log(movieName);
    this.router.navigate(['movie', movieName] );
  }
}
