import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Automobile } from 'src/app/models/automobile.model';
import { AutomobiliService } from 'src/app/services/automobili.service';

@Component({
  selector: 'app-automobili',
  templateUrl: './automobili.component.html',
  styleUrls: ['./automobili.component.scss']
})
export class AutomobiliComponent implements OnInit{

  automobili: Automobile[] = [];

  constructor(private http: HttpClient, private automobiliS: AutomobiliService){  
    this.automobili = this.automobiliS.automobili;      
  }

  ngOnInit(): void {    
    this.automobiliS.stampaVeicoli(); 
  }
}
