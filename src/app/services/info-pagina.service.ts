import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from 'src/app/interfaces/info-page.interface';
import { Person } from 'src/app/interfaces/person.interface';
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  team:any[]=[];
  info:InfoPage= {}
  cargada = false;

  constructor(private http: HttpClient) { 
    this.cargarInfo();
    this.cargarTeam();
  }
  private cargarInfo():void{
    this.http
      .get('assets/data/data-page.json')
      .subscribe((resp:InfoPage)=>{
        this.cargada = true;
        this.info = resp;
      });
  }
  private cargarTeam():void{
    this.http
      .get('https://angular-portafolio-html-6cc2c-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp:any)=>{
        this.team = resp;
      });
  }
}
