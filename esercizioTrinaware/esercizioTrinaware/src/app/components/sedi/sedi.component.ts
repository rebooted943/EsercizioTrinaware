import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sede } from 'src/app/models/sede.model';
import { SediService } from 'src/app/services/sedi.service';

@Component({
  selector: 'app-sedi',
  templateUrl: './sedi.component.html',
  styleUrls: ['./sedi.component.scss']
})
export class SediComponent implements OnInit{

  sedi: Sede[] = this.sediS.sedi;

  constructor(private http: HttpClient, private sediS: SediService){        
  }

  ngOnInit(): void {    
    this.sediS.stampaSedi(); 
  }
}
