import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScheduleAdminComponent} from './schedule-admin/schedule-admin.component';
import {AuthGuard} from '../authentication/auth.guard';
import {ScheduleUserComponent} from "./schedule-user/schedule-user.component";

const routes: Routes = [
  { path: '', component: ScheduleAdminComponent, canActivate: [AuthGuard], data: { shouldBeAdmin: true } },
  { path: 'user', component: ScheduleUserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
