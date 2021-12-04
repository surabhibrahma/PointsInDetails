import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

export class Question {
    ID: number;
    Statement: string;
    Category: string;
    Answer: string;

}

@Injectable()
export class DBQueryService {
    constructor(private httpService: HttpService){}

    //add database URL
    private databaseURL:string = 'https://points-in-details-db-default-rtdb.asia-southeast1.firebasedatabase.app/main';

    getAllFromDB(): Observable<AxiosResponse<Question[]>>{
        return this.httpService.get(this.databaseURL+'.json').pipe(res => {
            return res;
        });
    }

    getFromDBByID(id:number): Observable<AxiosResponse<Question[]>>{
        return this.httpService.get(this.databaseURL+'/'+id+'.json');
    }
}
