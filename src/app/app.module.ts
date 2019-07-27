import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//import { HeaderComponent } from "./header/header.component";

// Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatGridListModule } from "@angular/material/grid-list";
//import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
//import { LicenseeListComponent } from "./licensees/licensee-list/licensee-list.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // LicenseeListComponent,
    //  HeaderComponent,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatGridListModule

    //    RecipeListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
