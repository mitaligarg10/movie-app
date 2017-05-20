export class Movie {
 Title: string;
 Year:  string;
 Poster: string;
 imdbID: string;

constructor(imdbID: string, Title: string, Year: string, Poster: string) {
 this.imdbID = imdbID;
 this.Title = Title;
 this.Year = Year;
 this.Poster = Poster;
}
clone() {
return new Movie(
 this.imdbID,
 this.Title,
 this.Year,
 this.Poster);
}
}
