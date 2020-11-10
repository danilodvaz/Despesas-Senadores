import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSenadorComponent } from './lista-senador/lista-senador.component';
import { DepesaSenadorComponent } from './depesa-senador/depesa-senador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TipoDespesaPipe } from './tipo-despesa.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaSenadorComponent,
    DepesaSenadorComponent,
    TipoDespesaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
