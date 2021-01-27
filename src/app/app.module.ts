import { CommonModule             } from '@angular/common';
import { BrowserModule            } from '@angular/platform-browser';
import { NgModule                 } from '@angular/core';
import { AppComponent             } from './app.component';
import { AppRoutingModule         } from './app-routing.module';
import { ReactiveFormsModule      } from '@angular/forms';
import { FormsModule              } from '@angular/forms';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { ComponentsModule         } from './components/components.module';
import { HomeModule               } from './pages/home/home.module';
import { FullpageModule           } from './pages/fullpage/fullpage.module';

const modules = [
  BrowserModule,
  ComponentsModule,
  AppRoutingModule,
  ReactiveFormsModule,
  FormsModule,
  BrowserAnimationsModule,
  CommonModule,
  HomeModule,
  FullpageModule
]

@NgModule({
  declarations:  [ AppComponent ] ,
  imports:  modules ,
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
