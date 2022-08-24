import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMatPaginatorIntl } from './paginator-es';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SortbyPipe } from './pipes/sortby.pipe';
import { PeticionesHttpComponent } from './peticiones-http/peticiones-http.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginatePipe,
    PipeComponentComponent,
    UppercasePipe,
    SortPipe,
    SortbyPipe,
    PeticionesHttpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: MatPaginatorIntl, 
    useClass: CustomMatPaginatorIntl
    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
