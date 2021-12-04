import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class AuthService {
    
    constructor(private httpService: HttpService){}

    //user email ID
    email:string = '';

    //password
    password: string = '';

    //API Key
    apikey: string = '';

    //Authentication end point
    authURL: string = ''+this.apikey;

    getAuth(): Observable<AxiosResponse<any>>{
        return this.httpService.post<any>(this.authURL,{"email":this.email, "password": this.password, "returnSecureToken":true})
    }

}