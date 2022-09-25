import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { InicioComponent } from './components/inicio/inicio.component'
import { ArticulosFamiliasComponent } from './components/articulos-familias/articulos-familias.component'

@NgModule({
  declarations: [AppComponent, InicioComponent, ArticulosFamiliasComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
