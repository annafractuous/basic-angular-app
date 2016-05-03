import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { YouTube } from './video';
import { YouTubeService } from './youtube.service';

@Component({
  selector: 'my-tube',
  templateUrl: '../templates/tube.html',
  providers: [HTTP_PROVIDERS, YouTubeService]
})

export class TubeComponent implements OnInit{
  errorMessage: string;
  videos: YouTube[];
  selectedID: string;
  vidLink: string;
  display: string;

  constructor (private _youTubeService: YouTubeService) {}

  vidSelect(video: string) {
    this.selectedID = video;
    this.vidLink = 'https://www.youtube.com/embed/' + this.selectedID;
  }

  ngOnInit() { this.getVideos(); }

  getVideos() {
    this._youTubeService.getVideos()
      .subscribe(
        videos => this.videos = videos,
        error => this.errorMessage = <any>error
      );
  }

  goBack(){
    this.vidLink = null;
  }
}
