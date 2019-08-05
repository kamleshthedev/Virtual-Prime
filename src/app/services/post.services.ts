import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../models/Post'


@Injectable({
  providedIn: 'root'
})
export class PostService {
  // postsUrl: string = 'https://api.themoviedb.org/3/movie/332?api_key=6573d2afb3766167f9ab4d48c3853fce'
  // mvImgUrl: string = 'https://image.tmdb.org/t/p/w185'
  list;

  constructor(private http: HttpClient) { }

  // getPosts() : Observable<Post[]> {
  //   return this.http.get<Post[]>(this.postsUrl);

  // }
}
