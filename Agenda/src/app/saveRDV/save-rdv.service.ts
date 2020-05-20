import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { PhpData } from '../php-data';

@Injectable({
  providedIn: 'root'
})
export class SaveRDVService {


  isLoggedIn : boolean = false;
  redirectUrl : string = "";
  

  constructor( private http : HttpClient ) {  }


  
  sendAuthentication( username : string, password : string )  : Observable<PhpData> {
    
    let data = {
      'username' : username,
      'password' : password
    }    

    return this.http.post<PhpData>( 'http://127.0.0.1:3000/saveRDV', data, { withCredentials: true } );

  }

}
