import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { CSSComponent } from './css/css.component';
import { javascriptComponent } from './javascript/javascript.component';

const routes: Routes = [
  {path:"", redirectTo:'Welcome',pathMatch:'full'},
  {path:"Welcome", component:WelcomeComponent},
  {path:"Questions", component:QuestionsComponent},
  {path:"main",component:MainComponent},
  {path:"CSS",component:CSSComponent},
  {path:"javascript",component:javascriptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
