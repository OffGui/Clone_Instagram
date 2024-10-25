import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../../components/post/post.component';
import { Post } from '../../types/post';
import { FeedComponent } from '../../components/feed/feed.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  posts: Post[] = [];

  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
      this.fetchData();
  }
  fetchData() {
    this.HttpClient.get<{ posts: Post[]} >('http://localhost:3000/friends').subscribe((data: {posts: Post[]}) => {
     this.posts = data.posts;
    });
  }
}

