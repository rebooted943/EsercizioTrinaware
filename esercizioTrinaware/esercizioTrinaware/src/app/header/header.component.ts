import { Component, OnInit } from '@angular/core';
import { Sede } from '../models/sede.model';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  sedi: {}[] ;

  constructor(private db: DbService){
    this.sedi = [];
  }

  ngOnInit(): void {

    
  }


}
