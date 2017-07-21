import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
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

  constructor(private http: Http) {
  }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map((response: Response) => response.json() as Post[])
      .subscribe((posts: Post[]) => this.posts = posts);
  }
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
