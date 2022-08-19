import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from './model/model.module';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { PagesModule } from './pages/page.module';
import { PartialModule } from './partials/partial.module';

export function tokenGetter() {
  return localStorage.getItem("id_token");
}




@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartialModule,
    PagesModule,
    ModelModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
