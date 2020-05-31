import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PayComponent } from './pay/pay.component';
import { HttpClientModule } from '@angular/common/http';
import { DishitemComponent } from './menu/dishitem/dishitem.component';
import { CommonService } from './services/common.service';
import { InteractionService } from './services/interaction.service';
import { MessengerService } from './services/messenger.service';

@NgModule({
  declarations: [AppComponent, MenuComponent, PayComponent, DishitemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CommonService, InteractionService, MessengerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
