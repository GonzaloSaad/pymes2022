import { Component, OnInit } from '@angular/core'
import { ArticuloFamilia } from 'src/app/models/articulo-familia'
import { MockArticulosFamiliasService } from '../../services/mock-articulos-familias.service'

@Component({
  selector: 'app-articulos-familias',
  templateUrl: './articulos-familias.component.html',
  styleUrls: ['./articulos-familias.component.css'],
})
export class ArticulosFamiliasComponent implements OnInit {
  items: ArticuloFamilia[] = []
  titulo = 'Articulos Familia'

  constructor(private articulosFamiliasService: MockArticulosFamiliasService) {}

  ngOnInit() {
    this.getFamiliasArticulos()
  }

  getFamiliasArticulos() {
    this.articulosFamiliasService.get().subscribe((res: ArticuloFamilia[]) => {
      this.items = res
    })
  }
}
