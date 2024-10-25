import { Component } from '@angular/core';
import { FeedComponent } from '../../components/feed/feed.component';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../types/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explore-page',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.scss'
})
export class ExplorePageComponent {
  posts: Post[] = [];
  country: string = "";

  constructor(private HttpClient: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.country = params.get('country') || "";
      if (this.country) {
        this.fetchData(this.country);
      }
    });
  }
  fetchData(countryId: string) {
    let countryIdFormatted = countryId.toLowerCase();
    this.HttpClient.get<{ posts: Post[]} >(`http://localhost:3000/explore_${countryId}`)
      .subscribe((data: {posts: Post[]}) => {
        this.posts = data.posts;
    });
  }
}