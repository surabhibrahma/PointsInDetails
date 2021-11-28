import { Controller, Get, Param } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { DBQueryService } from './dbquery.service';

@Controller('dbquery')
export class DBQueryController {
  constructor(private dbqueryService: DBQueryService) {}

  

  @Get()
  getAll() {
    return this.dbqueryService.getAllFromDB().pipe(
      map(res =>{
        return res.data;
      })
    );
  }

  @Get(':id')
  getByID(@Param() param){
    return this.dbqueryService.getFromDBByID(param.id).pipe(
      map(res =>{
      return res.data;
    })
    );
  }
}
