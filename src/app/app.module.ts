import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';

// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { INITIAL_STATE } from '../models/appState';
import { storeReducer } from '../reducers/store.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ storeReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
