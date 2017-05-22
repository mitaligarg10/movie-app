// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { MovielistComponent } from './movielist.component';

// describe('MovielistComponent', () => {
//   let component: MovielistComponent;
//   let fixture: ComponentFixture<MovielistComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ MovielistComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MovielistComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import { MovielistComponent } from './movielist.component';
import { MovieListService } from './movielist.service';
import {ActivatedRoute,Params } from '@angular/router';
import 'rxjs/add/observable/of';
import {
 Http,
 Response,
 ResponseOptions,
 BaseRequestOptions,
 ConnectionBackend
} from '@angular/http';
describe('Component: MovieComponent', () => {
 let fixture;
 let component;
 let movieService;
 let spy;
 let testList;
 beforeEach(() => {
  TestBed.configureTestingModule({
   providers: [
    MockBackend,
    BaseRequestOptions,
    {
    
     provide: Http,
     useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
      return new Http(backend, defaultOptions);
     },
    
     deps: [MockBackend, BaseRequestOptions]
    },    
   MovieListService, {
    provide: ActivatedRoute,
    useValue: {
    params: Observable.of({id: 123})
    }
    },
   ],
   declarations: [MovielistComponent],
    schemas: [ NO_ERRORS_SCHEMA ]
  });
  fixture = TestBed.createComponent(MovielistComponent);
  component = fixture.debugElement.componentInstance;
  movieService = fixture.debugElement.injector.get(MovieListService);
  let observable: Observable<Response> = Observable.create(observer => {
   let responseOptions = new ResponseOptions({
    body: '[{ "movieName": "titanic" }]'
   });
   observer.next(new Response(responseOptions));
  });
  spy = spyOn(movieService, 'getMovies')
   .and.returnValue(observable);
 });
 it('should create an instance', () => {
  expect(component).toBeTruthy();
 });
});
