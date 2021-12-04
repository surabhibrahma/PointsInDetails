import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export class Question {
    ID: number;
    Statement: string;
    Category: string;
    Answer: string;

}

@Injectable()
export class DBQueryService {
    idtoken: string;
    constructor(private httpService: HttpService, private authService: AuthService){
        this.authService.getAuth().subscribe(
            res =>{
                this.idtoken = res.data['idToken'];
            }
        );
    }

    //add database URL
    private databaseURL:string = '';

    getAllFromDB(): Observable<AxiosResponse<Question[]>>{
        return this.httpService.get(this.databaseURL+'.json?auth='+this.idtoken).pipe(res => {
            return res;
        });
    }

    getFromDBByID(id:number): Observable<AxiosResponse<Question[]>>{
        return this.httpService.get(this.databaseURL+'/'+id+'.json?auth='+this.idtoken);
    }
}
