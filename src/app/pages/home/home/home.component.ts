import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpotifySearchService } from 'src/app/services/spotify-search.service';
import { CookieService } from 'ngx-cookie-service';
import { Track } from 'src/app/models/track.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  tokenSubscription: Subscription | undefined;
  tracksSubscription: Subscription | undefined;
  token : string | undefined;
  tracks : Array<any> | undefined;

  constructor(private spotifySearchService: SpotifySearchService, private cookieService: CookieService ) { }
  
  ngOnDestroy(): void {
    if (this.tokenSubscription) {
      this.tokenSubscription.unsubscribe();
    };

    if (this.tracksSubscription) {
      this.tracksSubscription.unsubscribe();
    };
  }

  ngOnInit(): void {
    this.getToken();
    this.getTracks('ziółas rządzi');
  }

  getTracks(queryString: string) {
    //TODO! if no token in cookies then get token
    if (!(this.token = this.cookieService.get('token'))){
      this.getToken();
    } //TODO! if token expires then get token
    this.tracksSubscription = this.spotifySearchService.getTrackByQueryString(queryString, this.token)
     .subscribe((response) => {
      this.tracks = response.tracks.items;
    });
  }

  getToken() {
    this.tokenSubscription = this.spotifySearchService.getToken()
     .subscribe((response) => {
      this.cookieService.set( 'token', response.access_token );
      this.token = this.cookieService.get('token');
    });
  }

  onAddToQueue(track: any) {
    console.log(track);
  }

  onSearchQuerryEnterred(queryString: string){
    this.getTracks(queryString);
  }

}
