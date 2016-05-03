import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { YouTube } from './video';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class YouTubeService {
  constructor (private http: Http) {}
  private dataURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=tutsplus&type=video&key=AIzaSyC3Y6aE7ZEAQHgyEu8qqVPxEPl6pgd2XSE'
  getVideos() {
    return this.http.get(this.dataURL)
      .map(res => <YouTube[]> res.json().items)
      .do(data => console.log(data))
      .catch(this.errorHandler);
  }
  private errorHandler (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
