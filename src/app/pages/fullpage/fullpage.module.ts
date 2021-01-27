import { NgModule              } from '@angular/core';
import { CommonModule          } from '@angular/common';
import { FormsModule           } from '@angular/forms';
import { MatSliderModule       } from '@angular/material/slider';
import { Ng2SearchPipeModule   } from 'ng2-search-filter';
import { FullpageRoutingModule } from './fullpage-routing.module';
import { FullpageComponent     } from './fullpage.component';
import { ComponentsModule      } from '../../components/components.module';

const modules = [
    ComponentsModule,
    CommonModule,
    FullpageRoutingModule,
    FormsModule,
    MatSliderModule,
    Ng2SearchPipeModule
];

@NgModule({
  declarations: [ FullpageComponent ],
  imports:  modules,
  exports:  modules 
})
export class FullpageModule {}