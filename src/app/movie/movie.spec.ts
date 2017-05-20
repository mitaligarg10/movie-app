import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Movie} from '../movie/movie';
// describe('Movie', () => {
//   let component: Movie;
//   let fixture: ComponentFixture<Movie>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ Movie ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(Movie);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
describe('Movie', () => {
    it('has title', () => {
      // tslint:disable-next-line:max-line-length
       const movie = new Movie('tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
    expect(movie.Title).toBe('Titanic');
  });
  it('has imdb Id', () => {
    // tslint:disable-next-line:max-line-length
    const movie = new Movie('tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
    expect(movie.imdbID).toBe('tt0120338');
  });
  it('has poster', () => {
    // tslint:disable-next-line:max-line-length
    const movie = new Movie('tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
    // tslint:disable-next-line:max-line-length
    expect(movie.Poster).toBe('https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
  });
  it('has year', () => {
    // tslint:disable-next-line:max-line-length
    const movie = new Movie('tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
    expect(movie.Year).toBe('1997');
  });
   it('can clone itself', () => {
     // tslint:disable-next-line:max-line-length
     const movie = new Movie('tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
     const clone = movie.clone();
     expect(movie).toEqual(clone);
   });
});

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
