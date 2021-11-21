import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DBQueryService, Question } from './dbquery.service';

@Controller('dbquery')
export class DBQueryController {
  constructor(private dbqueryService: DBQueryService) {}

  

  @Get()
  getAll() {
    return this.dbqueryService.getAllFromDB();
  }

  @Get(':id')
  getByID(@Param() param){
    return this.dbqueryService.getFromDBByID(param.id);
  }
}
