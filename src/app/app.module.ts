import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';

// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap } from '@ngrx/store/src/models';
import { INITIAL_STATE, IAppState } from './models';
import { todoListsReducer } from './reducers/todo-lists.reducer';
import { todosReducer } from './reducers/todos.reducer';
import { currentListReducer } from './reducers/current-list.reducer';
import { ListEffects } from './effects/list.effects';

export const reducers: ActionReducerMap<IAppState> = {
  todoLists: todoListsReducer,
  currentTodoList: currentListReducer,
  todos: todosReducer
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot( reducers, { initialState: INITIAL_STATE}),
    EffectsModule.forRoot([ ListEffects ]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
