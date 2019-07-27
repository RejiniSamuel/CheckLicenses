import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent {
  licensees: Observable<any[]>;
  booksCollectionRef: any;

  constructor(db: AngularFirestore) {
    //this.booksCollectionRef = db.collection<Licenses>('books', ref => ref.orderBy('order field'));
    this.licensees = db
      .collection("licensees", ref => ref.orderBy("expdate"))
      .valueChanges();
  }
}
