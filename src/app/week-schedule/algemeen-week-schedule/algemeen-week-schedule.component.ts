import { Component, OnInit, Input } from "@angular/core";
import { Workday } from "src/app/domain/workday.model";
import { MatDialogRef, MatDialog } from "@angular/material";
import { EditWeekScheduleComponent } from "src/app/edit-week-schedule/edit-week-schedule.component";
import { User } from "src/app/user/user.model";
import { UserDataService } from "src/app/user/user.data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-algemeen-week-schedule",
  templateUrl: "./algemeen-week-schedule.component.html",
  styleUrls: ["./algemeen-week-schedule.component.css"]
})
export class AlgemeenWeekScheduleComponent implements OnInit {
  private _fetchUsers$: Observable<User[]> = this._userDataService.users$;
  private _users: User[];
  private userAbsents = User[10];
  private help: User;
  @Input() public workday: Workday;
  @Input() public planningDate: Date;
  editWeekSchedule: MatDialogRef<EditWeekScheduleComponent>;

  constructor(
    private dialog: MatDialog,
    private _userDataService: UserDataService
  ) {
    this._fetchUsers$.subscribe(users => (this._users = users));
  }

  ngOnInit() {}
  openEditWeekSchedule() {
    this.editWeekSchedule = this.dialog.open(EditWeekScheduleComponent, {
      data: {
        workday: this.workday,
        changeType: "Algemeen",
        planningDate: this.planningDate
      }
    });
  }

  get users$(): User[] {
    return this._users;
  }
  get userAbsents$(): User[] {
    this.users$.forEach(user => {
      if (user.absentDates.length != 0) {
        user.absentDates.forEach(absentDate => {
          if (absentDate === this.planningDate) {
            this.userAbsents.add(this.help);
          }
        });
      }
    });
    return this.userAbsents;
  }
}
