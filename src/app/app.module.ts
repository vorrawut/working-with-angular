import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncomeComponent } from './components/income/income.component';
import { OutcomeComponent } from './components/outcome/outcome.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    OutcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
