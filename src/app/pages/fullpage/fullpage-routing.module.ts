// Modules
import { NgModule                 } from '@angular/core';
import { Routes, RouterModule     } from '@angular/router';

import { FullpageComponent        } from './fullpage.component';

import { TestComponent            } from 'src/app/components/test/test.component';

import { BranchAddComponent       } from 'src/app/components/manager-branchs/branch-add/branch-add.component';
import { BranchEditComponent      } from 'src/app/components/manager-branchs/branch-edit/branch-edit.component';
import { InterAddComponent        } from 'src/app/components/manager-branchs/inter-add/inter-add.component';
import { InterEditComponent       } from 'src/app/components/manager-branchs/inter-edit/inter-edit.component';

const routes: Routes = [
    {
      path: '',
      component: FullpageComponent,
      children: [
        { path: 'test',        component: TestComponent       },
        { path: 'branch-add',  component: BranchAddComponent  },
        { path: 'branch-edit', component: BranchEditComponent },
        { path: 'inter-add',   component: InterAddComponent   },
        { path: 'inter-edit',  component: InterEditComponent  }
      ],
    },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class FullpageRoutingModule {}