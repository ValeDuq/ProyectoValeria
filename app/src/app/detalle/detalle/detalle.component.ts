import { Component, Input, OnInit } from '@angular/core';
import { LibrosDetalle } from 'src/app/clases/libros-detalle';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
@Input() libro:LibrosDetalle = new LibrosDetalle();

  constructor() { }

  ngOnInit(): void {
  }

}
