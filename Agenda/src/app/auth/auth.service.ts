import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { PhpData } from '../php-data';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedIn : boolean = false;
  redirectUrl : string = "";
  
  constructor( private http : HttpClient ) {  }

  
  sendAuthentication( username : string, password : string )  : Observable<PhpData> {
    
    /*var formData = new FormData();
    
    formData.append("username", username);
    formData.append("password", password);*/

    let data = {
      'username' : username,
      'password' : password
    }    

    //console.log(formData);
    
    // var request = new XMLHttpRequest();
    // request.open("POST", "http://forum/angular/checkLogin.php");
    // request.send(formData);
    
    return this.http.post<PhpData>( 'http://node-agenda-cloud-computing.cloudapps.luminy.univ-amu.fr/checkLogin', data , { withCredentials: true } );

  }

    
  finalizeAuthentication(reponse : PhpData){

    if ( reponse.status == 'ok' ){
      this.isLoggedIn = true;
    }
    else{
      this.isLoggedIn = false;
    }

  }



}


