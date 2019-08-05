import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiKey: string = 'c7765dea44f44f22b3c3904458f1ff23';
const nsUrl: string =  'https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=c7765dea44f44f22b3c3904458f1ff23';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
nsList;

  constructor(private http:  HttpClient) { }

  ngOnInit() {
    this.http.get(nsUrl).subscribe( (data:any)=>{
      console.log(data)
      this.nsList = data.articles;
    })
  }

}
