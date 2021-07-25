import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public infoPaginaService:InfoPaginaService) { }

  ngOnInit(): void {
  }

}
