import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//angular material
import { MaterialModule } from '@angular/material';
import 'hammerjs';

//Services
import { HeroService } from './hero.service';
import { ExpenseService } from './expense.service';

//Routings
import { RoutingModule } from './routing/routing.module';

//Components
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';




@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RoutingModule
  ],
  providers: [HeroService, ExpenseService],
  bootstrap: [AppComponent]
})

export class AppModule { }
