import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos:any[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-portafolio-html-6cc2c-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp:any)=>{
      this.productos=resp;
      console.log(this.productos);
      this.cargando = false;
    });
  }

}
