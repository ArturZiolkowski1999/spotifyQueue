import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifySearchService {

  constructor(private httpClient: HttpClient ) { }

  getTrackByQueryString(queryString: string, access_token: string): Observable<any> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + access_token,
      }),
    };

    return this.httpClient.get<any>(`${environment.SEARCH_BASE_URL}${queryString}`, httpOptions);
  }
  
  getToken(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa((environment.CLIENT_ID + ':' + environment.CLIENT_SECRET)),
      }),
    };

    var body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    
    return this.httpClient.post<any>(environment.TOKEN_BASE_URL, body, httpOptions);
  }
}
