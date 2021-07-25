import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from 'src/app/interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPage= {}
  cargada = false;

  constructor(private http: HttpClient) { 
    this.http
      .get('assets/data/data-page.json')
      .subscribe((resp:InfoPage)=>{
        this.cargada = true;
        this.info = resp;
      });
  }

}
