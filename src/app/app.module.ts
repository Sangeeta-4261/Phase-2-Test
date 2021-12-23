import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { MainComponent } from './main/main.component';
import { CSSComponent } from './css/css.component';
import { javascriptComponent } from './javascript/javascript.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionsComponent,
    HeaderComponent,
    ChangeBgDirective,
    MainComponent,
    CSSComponent,
    javascriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
