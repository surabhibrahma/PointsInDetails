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
    refreshToken: string;
    constructor(private httpService: HttpService, private authService: AuthService){
        this.authService.getAuth().subscribe(
            res =>{
                this.refreshToken = res.data['refreshToken'];
            }
        );
    }

    //add database URL
    private databaseURL:string = '';

    getAllFromDB(): Observable<AxiosResponse<Question[]>>{
        const reqHeaders = {
            'auth': this.refreshToken
        }
        return this.httpService.get(this.databaseURL+'.json').pipe(res => {
            return res;
        });
    }

    getFromDBByID(id:number): Observable<AxiosResponse<Question[]>>{
        return this.httpService.get(this.databaseURL+'/'+id+'.json');
    }
}
