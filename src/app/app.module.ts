import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FocusDirective } from './directives/focus.directive';
@NgModule({
  declarations: [AppComponent, ProductComponent, GlobalErrorComponent,
     FilterProductsPipe,ModalComponent,CreateProductComponent,
    FocusDirective],
  imports: [BrowserModule, CommonModule, FormsModule, HttpClientModule,ReactiveFormsModule,],
  bootstrap: [AppComponent],
})
export class AppModule {}
