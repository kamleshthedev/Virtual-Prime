import { PostService } from './../../services/post.services';
import { Component, OnInit } from '@angular/core';
import { Post } from './../../models/Post';
import { HttpClient } from '@angular/common/http';

const url:string = 'https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  list;
  constructor(private http: HttpClient){}

  ngOnInit(){

    this.http.get(url).subscribe( (data:any)=>{
      console.log(data)
      this.list = data.results;
    })
  }
}
