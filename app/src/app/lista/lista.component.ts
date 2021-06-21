import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  libros = [
    {
    imagenUrl:"https://www.bookshop.com.uy/media/catalog/product/cache/1/thumbnail/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9788417430641.jpg",
    nombre:"Persuasión",
    código:"AB23",
    autor:"Jane Austen",
    reseña:"Aparecida de manera póstuma en 1818, es un perfecto compendio de las preocupaciones de la autora británica. En ella Austen nos ofrece una auténtica obra de madurez y una brillante reflexión sobre el paso del tiempo.",
    precio:"1000",
    stock:"15",
  },

  {
    imagenUrl:"https://www.bookshop.com.uy/media/catalog/product/cache/1/thumbnail/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9788491053996.jpg",
    nombre:"Cumbres borrascosas",
    código:"AD87",
    autor:"Emily Brontë",
    reseña:"Situada en los sombríos páramos de Yorkshire, esta novela constituye una visión metafísica del destino, la obsesión, la pasión y la venganza.",
    precio:"400",
    stock:"10",
  },
  {
    imagenUrl:"https://www.bookshop.com.uy/media/catalog/product/cache/1/thumbnail/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9788417430641.jpg",
    nombre:"Persuasión",
    código:"AB23",
    autor:"Jane Austen",
    reseña:"Aparecida de manera póstuma en 1818, es un perfecto compendio de las preocupaciones de la autora británica. En ella Austen nos ofrece una auténtica obra de madurez y una brillante reflexión sobre el paso del tiempo.",
    precio:"1000",
    stock:"15",
  },

  {
    imagenUrl:"https://www.bookshop.com.uy/media/catalog/product/cache/1/thumbnail/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9788491053996.jpg",
    nombre:"Cumbres borrascosas",
    código:"AD87",
    autor:"Emily Brontë",
    reseña:"Situada en los sombríos páramos de Yorkshire, esta novela constituye una visión metafísica del destino, la obsesión, la pasión y la venganza.",
    precio:"400",
    stock:"10",
  },
  {
    imagenUrl:"https://www.bookshop.com.uy/media/catalog/product/cache/1/thumbnail/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9788417430641.jpg",
    nombre:"Persuasión",
    código:"AB23",
    autor:"Jane Austen",
    reseña:"Aparecida de manera póstuma en 1818, es un perfecto compendio de las preocupaciones de la autora británica. En ella Austen nos ofrece una auténtica obra de madurez y una brillante reflexión sobre el paso del tiempo.",
    precio:"1000",
    stock:"15",
  },

  {
    imagenUrl:"https://www.bookshop.com.uy/media/catalog/product/cache/1/thumbnail/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9788491053996.jpg",
    nombre:"Cumbres borrascosas",
    código:"AD87",
    autor:"Emily Brontë",
    reseña:"Situada en los sombríos páramos de Yorkshire, esta novela constituye una visión metafísica del destino, la obsesión, la pasión y la venganza.",
    precio:"400",
    stock:"10",
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
