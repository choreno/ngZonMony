import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//angular material
import { MaterialModule } from '@angular/material';
import 'hammerjs';

//Services
import { ExpenseService } from './services/expense.service';
import { DttmService } from './services/dttm.service'; 

//Routings
import { RoutingModule } from './routing/routing.module';

//InMemory Web API
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ExpenseDb } from './db/expense.db';

//Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupingTestComponent } from './dashboard/groupingTest.component';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    GroupingTestComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RoutingModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 }),    // no delay
    InMemoryWebApiModule.forRoot(ExpenseDb, { delay: 0 }), // 1.5 second delay, 1500
    
  ],
  providers: [ExpenseService, DttmService],
  bootstrap: [AppComponent]
})

export class AppModule { }
