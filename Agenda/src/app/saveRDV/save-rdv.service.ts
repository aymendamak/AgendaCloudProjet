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

    return this.http.post<PhpData>( 'http://node-agenda-cloud-computing.cloudapps.luminy.univ-amu.fr/saveRDV', data, { withCredentials: true } );

  }

}
