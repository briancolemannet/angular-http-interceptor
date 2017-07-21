import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppComponent} from './app.component';
import {MyInterceptor} from './http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
