import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { PartialModule } from "../partials/partial.module";
import { HomeComponent } from "./home/home.component";



@NgModule({
    imports: [BrowserModule,FormsModule,PartialModule],
    declarations:[
    
        HomeComponent,
    ],
    exports:[
        HomeComponent,
    ]
})

export class PagesModule {}
