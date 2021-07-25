import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos:Producto[] = [];
  productosFiltered:Producto[] =[];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(){
    return new Promise((resolve,reject)=>{
      this.http.get('https://angular-portafolio-html-6cc2c-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp:any)=>{
        this.productos=resp;
        this.cargando = false;
        resolve(resp);
      });
    });
    
  }

  getProducto(id:string){
    return this.http.get(`https://angular-portafolio-html-6cc2c-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  getProductosFiltered(termino:string){
    if(this.productos.length===0){
      this.cargando = true;
      this.cargarProductos().then(()=>{
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string){
    this.productosFiltered = 
        this.productos
            .filter((producto)=>
                producto.titulo?.trim()
                        .toLowerCase()
                        .startsWith(termino.toLowerCase()) || 
                producto.categoria?.trim()
                        .toLowerCase()
                        .startsWith(termino.toLowerCase())
            );
    this.cargando = false;
  }
}
