// Modules
import { NgModule                 } from '@angular/core';
import { Routes, RouterModule     } from '@angular/router';

import { HomeComponent            } from './home.component';

// Pages

import { DashboardComponent          } from 'src/app/components/dashboard/dashboard.component';
import { IntroduceComponent          } from 'src/app/components/introduce/introduce.component';
import { ActivitiesComponent         } from 'src/app/components/activities/activities.component';
import { InternalComponent           } from 'src/app/components/internal/internal.component';
import { ContactComponent            } from 'src/app/components/contact/contact.component';
import { RegisterComponent           } from 'src/app/components/register/register.component';
import { RegisterSuccessComponent    } from 'src/app/components/register/register-success/register-success.component';
import { AccountComponent            } from 'src/app/components/account/account.component';
import { ForgotPasswordComponent     } from 'src/app/components/forgot-password/forgot-password.component';
import { FacultyContentComponent     } from 'src/app/components/tourism-faculty/faculty-content/faculty-content.component';
import { TourismFacultyComponent     } from 'src/app/components/tourism-faculty/tourism-faculty.component';
import { ManagerMembersComponent     } from 'src/app/components/manager-members/manager-members.component';
import { ManagerMembersListComponent } from 'src/app/components/manager-members/manager-members-list/manager-members-list.component';
import { ManagerMembersNewComponent  } from 'src/app/components/manager-members/manager-members-new/manager-members-new.component';

import { ManagerBranchsComponent     } from 'src/app/components/manager-branchs/manager-branchs.component';
import { BranchsComponent            } from 'src/app/components/manager-branchs/branchs/branchs.component';
import { IntersComponent             } from 'src/app/components/manager-branchs/inters/inters.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'dashboard',               component: DashboardComponent, children: [] },
      { path: 'introduce',               component: IntroduceComponent               },
      { path: 'activities',              component: ActivitiesComponent              },
      { path: 'faculty',                 component: TourismFacultyComponent          },
      { path: 'faculty/faculty-content', component: FacultyContentComponent          },
      { path: 'internal',                component: InternalComponent                },
      { path: 'contact',                 component: ContactComponent                 },
      { path: 'register',                component: RegisterComponent                },
      { path: 'register-success',        component: RegisterSuccessComponent         },
      { path: 'forgot-password',         component: ForgotPasswordComponent          },
      { path: 'account',                 component: AccountComponent                 },
      { path: 'manager-members',         component: ManagerMembersComponent, 
          children: [
            { path: 'list', component: ManagerMembersListComponent    },
      ]},
      { path: 'manager-members/new',     component: ManagerMembersNewComponent       },
      { path: 'manager-branchs',         component: ManagerBranchsComponent          },
      { path: 'branchs',                 component: BranchsComponent                 },
      { path: 'inters',                  component: IntersComponent                  },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
