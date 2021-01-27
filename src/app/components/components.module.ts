// Modules
import { NgModule                           } from '@angular/core';
import { CommonModule                       } from '@angular/common';
import { RouterModule                       } from '@angular/router';
import { ReactiveFormsModule, FormsModule   } from '@angular/forms';
import { FontAwesomeModule                  } from '@fortawesome/angular-fontawesome';
import { MatSliderModule                    } from '@angular/material/slider';
import { MatFormFieldModule                 } from '@angular/material/form-field';
import { MatInputModule                     } from '@angular/material/input';
import { MatIconModule                      } from '@angular/material/icon';
import { Ng2SearchPipeModule                } from 'ng2-search-filter';

// Layout components
import { HeaderComponent                    } from './header/header.component';
import { TopMenuComponent                   } from './top-menu/top-menu.component';
import { RightSidebarComponent              } from './right-sidebar/right-sidebar.component';
import { FooterComponent                    } from './footer/footer.component';
import { PaginationComponent                } from './pagination/pagination.component';

// Sidebar
import { LoginComponent                     } from './login/login.component';
import { IntroduceComponent                 } from './right-sidebar/introduce/introduce.component';
import { ManagerComponent                   } from './right-sidebar/manager/manager.component';
import { ActivitiesComponent                } from './right-sidebar/activities/activities.component';
import { InternalComponent                  } from './right-sidebar/internal/internal.component';
import { FacultyComponent                   } from './right-sidebar/faculty/faculty.component';
import { ReportComponent                    } from './right-sidebar/report/report.component';

// Pages
import { RegisterComponent                  } from './register/register.component';
import { RegisterSuccessComponent           } from './register/register-success/register-success.component';
import { FacultyContentComponent            } from './tourism-faculty/faculty-content/faculty-content.component';
import { TourismFacultyComponent            } from './tourism-faculty/tourism-faculty.component';
import { AccountComponent                   } from './account/account.component';
import { TestComponent                      } from './test/test.component';
import { DashboardComponent                 } from './dashboard/dashboard.component';
import { ContactComponent                   } from './contact/contact.component';
import { ForgotPasswordComponent            } from './forgot-password/forgot-password.component';

// Page - Dashboard
import { PostsCommonComponent               } from './home/posts-common/posts-common.component';
import { PostsNewsComponent                 } from './home/posts-news/posts-news.component';
import { PostsFacultyComponent              } from './home/posts-faculty/posts-faculty.component';

// Page - Manager Union members
import { ManagerMembersComponent            } from './manager-members/manager-members.component';
import { ManagerMembersMenuComponent        } from './manager-members/manager-members-menu/manager-members-menu.component';
import { ManagerMembersListComponent        } from './manager-members/manager-members-list/manager-members-list.component';
import { ManagerMembersNewComponent         } from './manager-members/manager-members-new/manager-members-new.component';
import { MembersComponent                   } from './manager-members/members/members.component';
import { MemberAddComponent                 } from './manager-members/member-add/member-add.component';
import { MemberEditComponent                } from './manager-members/member-edit/member-edit.component';
import { MemberDeleteComponent              } from './manager-members/member-delete/member-delete.component';

// Page - Branchs and Inter branchs
import { ManagerBranchsComponent            } from './manager-branchs/manager-branchs.component';
import { BranchsComponent                   } from './manager-branchs/branchs/branchs.component';
import { BranchAddComponent                 } from './manager-branchs/branch-add/branch-add.component';
import { BranchAddSuccessComponent          } from './manager-branchs/branch-add-success/branch-add-success.component';
import { BranchEditComponent                } from './manager-branchs/branch-edit/branch-edit.component';
import { BranchEditSuccessComponent         } from './manager-branchs/branch-edit-success/branch-edit-success.component';
import { BranchDeleteComponent              } from './manager-branchs/branch-delete/branch-delete.component';   
import { BranchDeleteSuccessComponent       } from './manager-branchs/branch-delete-success/branch-delete-success.component';

import { IntersComponent                    } from './manager-branchs/inters/inters.component';
import { InterAddComponent                  } from './manager-branchs/inter-add/inter-add.component';
import { InterAddSuccessComponent           } from './manager-branchs/inter-add-success/inter-add-success.component';
import { InterEditComponent                 } from './manager-branchs/inter-edit/inter-edit.component';
import { InterEditSuccessComponent          } from './manager-branchs/inter-edit-success/inter-edit-success.component';
import { InterDeleteComponent               } from './manager-branchs/inter-delete/inter-delete.component';   
import { InterDeleteSuccessComponent        } from './manager-branchs/inter-delete-success/inter-delete-success.component';

const modules = [
    FormsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    Ng2SearchPipeModule
];

const components = [
    HeaderComponent,
    TopMenuComponent,
    RightSidebarComponent,
    FooterComponent,
    PaginationComponent,
    
    PostsCommonComponent,
    PostsNewsComponent,
    PostsFacultyComponent,

    LoginComponent,
    IntroduceComponent,
    ManagerComponent,
    ActivitiesComponent,
    InternalComponent,
    FacultyComponent,
    ReportComponent,
    
    RegisterComponent,
    RegisterSuccessComponent,
    AccountComponent,
    TestComponent,
    ContactComponent,
    ForgotPasswordComponent,
    TourismFacultyComponent,
    FacultyContentComponent,
    DashboardComponent,

    ManagerMembersComponent,
    ManagerMembersMenuComponent,
    ManagerMembersListComponent,
    ManagerMembersNewComponent,

    MembersComponent,
    MemberAddComponent,
    MemberEditComponent,
    MemberDeleteComponent,

    ManagerBranchsComponent,
    BranchsComponent,
    BranchAddComponent,
    BranchAddSuccessComponent,
    BranchEditComponent,
    BranchEditSuccessComponent,
    BranchDeleteComponent,
    BranchDeleteSuccessComponent,
    IntersComponent,
    InterAddComponent,
    InterAddSuccessComponent,
    InterEditComponent,
    InterEditSuccessComponent,
    InterDeleteComponent,
    InterDeleteSuccessComponent
];

@NgModule({
    declarations: components,
    imports: modules,
    exports: components, 
})

export class ComponentsModule {}
