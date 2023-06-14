import { Component, OnInit } from '@angular/core';
import { Sede } from '../models/sede.model';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  nomeSede1 = 'Sede roma';
  nomeSede2 = 'Sede napoli';
  nomeSede3 = 'Sede africa';


  // constructor(private db: DbService){
    
  // }

  ngOnInit(): void {

    
  }


}
