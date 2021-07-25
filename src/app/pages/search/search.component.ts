import { ProductosService } from './../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, public productosService : ProductosService) {

   }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.productosService.getProductosFiltered(params['termino']);
    })
  }



}
