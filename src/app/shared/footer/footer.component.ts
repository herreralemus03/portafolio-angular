import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year:number = new Date().getFullYear();
  constructor(public infoPaginaService:InfoPaginaService) {
    
   }

  ngOnInit(): void {
  }

}
