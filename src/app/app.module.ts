import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonViewComponent } from './person-view.component/person-view.component';
import { PersonAddComponent} from './person-add.component/person-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonViewComponent,
    PersonAddComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
