import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  posts: Post[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => this.posts = data as Post[]);
  }
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
