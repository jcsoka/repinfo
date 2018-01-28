// Modules //
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

// Components //
import { AppComponent } from './app.component';
import { AllreposComponent } from './allrepos/allrepos.component';
import { IssuesComponent } from './issues/issues.component';
import { NavbarComponent } from './navbar/navbar.component';

// Services //
import {HttpService} from "./services/http.service";
import { SearchpageComponent } from './searchpage/searchpage.component';

// Models //

const appRoutes: Routes = [
  {path: '', component:SearchpageComponent},
  {path: 'search/:reponame', component:AllreposComponent},
  {path: 'issues/:fullname', component:IssuesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AllreposComponent,
    IssuesComponent,
    NavbarComponent,
    SearchpageComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
