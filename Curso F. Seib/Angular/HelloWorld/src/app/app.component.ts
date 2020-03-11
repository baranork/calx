import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulo = {
    codigo: null,
    descripcion: null,
    precio: null
  }

  articulos = [
    {
      codigo: 1,
      descripcion: 'yerba',
      precio: 120
    },
    {
      codigo: 2,
      descripcion: 'azucar',
      precio: 50
    },
    {
      codigo: 3,
      descripcion: 'cafe',
      precio: 150
    }
  ]

  hayRegistros() {
    return this.articulos.length > 0;
  }

  borrar(articulo) {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulo.codigo === this.articulos[i].codigo) {
        this.articulos.splice(i, 1);
        return;
      }
    }
  }

  agregar() {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulo.codigo == this.articulos[i].codigo) {
        alert("Ya hay un articulo con ese código.");
        return;
      }
      
        this.articulos.push({
          codigo: this.articulo.codigo,
          descripcion: this.articulo.descripcion,
          precio: this.articulo.precio
        });
        
        this.articulo.codigo = null;
        this.articulo.descripcion = null;
        this.articulo.precio = null;
        
    }
  }

  seleccionar(articulo){
    this.articulo.codigo = articulo.codigo;
    this.articulo.descripcion = articulo.descripcion;
    this.articulo.precio = articulo.precio;
  }

  modificar(){
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulo.codigo === this.articulos[i].codigo) {
        this.articulos[i].descripcion = this.articulo.descripcion;
        this.articulos[i].codigo = this.articulo.codigo;
        this.articulos[i].precio = this.articulo.precio;
      }
      else{
        alert("No existe un articulo con ese codigo");
      }
    }
  }
}
