import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
	private searchUrl: string;
	private client_id ='09086332252047f2b13caea35ac26458';
    private client_secret = 'b59614c83293473eb557fcb905e099c4';
    private access_token:string;
    private encoded = btoa(this.client_id + ':' + this.client_secret);
    private base64 = 'OTk2MDgwOTM3ZWJiNDU5NGEwOTc5MTQ2YzljMGMxMjE6MGJkYTNjZmQyMTNjNDYyMmJjNmM1NjI1ODY1NjhlYzg=';


	constructor(private _http:Http){

	}

	getToken(){
       // let params : URLSearchParams = new URLSearchParams();
       // params.set('grant_type' , 'client_credentials');
       // let body = params.toString();
        let params = ('grant_type=client_credentials')

        let headers = new Headers();
        headers.append( 'Authorization', 'Basic ' + this.encoded);
       
        headers.append('Content-Type' , 'application/x-www-form-urlencoded');

        return this._http.post('https://accounts.spotify.com/api/token', params , {headers : headers} )
        .map(res=> res.json());
     }

	searchMusic(str:string, type='artist', token:string){
		this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
		let headers = new Headers();
       	headers.append('Authorization' , 'Bearer ' + token);

		return this._http.get(this.searchUrl, {headers : headers})
		.map(res => res.json());
	}
}