import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  producto:any={};
  productoId:string="";
  cargando = true;
  constructor(private route: ActivatedRoute, public productosService:ProductosService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((parametros=>{
    this.productoId=parametros['productId'];
    console.log(parametros)
      this.productosService.getProducto(parametros['productId']).subscribe(resp=>{
        this.producto = resp;
        console.log(this.producto);
        this.cargando = false;
      });
    }))
  }

}
