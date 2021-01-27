import { NgModule             } from '@angular/core';
import { CommonModule         } from '@angular/common';
import { FormsModule          } from '@angular/forms';
import { MatSliderModule      } from '@angular/material/slider';
import { Ng2SearchPipeModule  } from 'ng2-search-filter';
import { HomeRoutingModule    } from './home-routing.module';
import { HomeComponent        } from './home.component';
import { ComponentsModule     } from '../../components/components.module';

const modules = [
    ComponentsModule,
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatSliderModule,
    Ng2SearchPipeModule
];

@NgModule({
  declarations: [ HomeComponent ],
  imports: modules,
  exports: modules
})
export class HomeModule {}