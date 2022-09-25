import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { articulosFamilia } from '../models/articulo-familia'
@Injectable({
  providedIn: 'root',
})
export class MockArticulosFamiliasService {
  constructor() {}

  get() {
    return of(articulosFamilia)
  }
}
