import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidepeppohappyComponent } from './widepeppohappy/widepeppohappy.component';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ServicesComponent } from './services/services.component';
import { PriceComponent } from './price/price.component';
import { WorksComponent } from './works/works.component';
import { MastersComponent } from './masters/masters.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RegistComponent } from './regist/regist.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WidepeppohappyComponent,
    ProjectComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    StatisticsComponent,
    ServicesComponent,
    PriceComponent,
    WorksComponent,
    MastersComponent,
    ReviewsComponent,
    RegistComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, WidepeppohappyComponent]
})
export class AppModule { }
