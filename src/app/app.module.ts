import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageModule } from './login/login.module';
import { HomePageModule } from './home/home.module';
import { MonitorPageModule } from './monitor/monitor.module';
import { NotificationPageModule } from './notification/notification.module';
import { HttpProvider } from './http/http';
import { LoginRest } from './rest/loginRest';
import { ViewUtils } from './utils/viewUtils';
import { PopoverComponent } from './popover/popover.component';
import { CustomComponentsModule } from './utils/customComponents.module';
import { AgilitUtils } from './utils/agilitUtils';
import { RestOrder } from './rest/restorder';
import { AgilitActionUtils } from './utils/AgilitActionUtils';
import { RestNotification } from './rest/restnotification';

@NgModule({
  declarations: [
    AppComponent,
    PopoverComponent
  ],
  entryComponents: [PopoverComponent],
  imports: [
    BrowserModule,
    HttpModule,
    LoginPageModule,
    HomePageModule,
    MonitorPageModule,
    NotificationPageModule,
    CustomComponentsModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpProvider,
    ViewUtils,
    LoginRest,
    RestOrder,
    RestNotification,
    AgilitActionUtils,
    AgilitUtils,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
