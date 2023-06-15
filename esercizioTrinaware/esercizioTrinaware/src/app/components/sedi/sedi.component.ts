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

  sedi: Sede[] = [];

  constructor(private http: HttpClient, private sediS: SediService){    
    this.sedi = this.sediS.sedi;    
  }

  ngOnInit(): void {    
    this.sediS.stampaSedi(); 
  }
}
