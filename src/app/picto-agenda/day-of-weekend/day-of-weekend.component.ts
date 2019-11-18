import { Component, OnInit, Input } from '@angular/core';
import { Workday } from 'src/app/shared/models/workday.model';
import { StaticMethodsPicto } from 'src/app/domain/staticMethods';


export class DayNameAndDate {
  constructor(private _date: Date, private _name: string) {}
  get date() {
    return this._date;
  }

  get name() {
    return this._name;
  }
}


@Component({
  selector: 'app-day-of-weekend',
  templateUrl: './day-of-weekend.component.html',
  styleUrls: ['./day-of-weekend.component.scss']
})
export class DayOfWeekendComponent implements OnInit {
  @Input() public weekDay: Workday;
  private _nameOfDay: DayNameAndDate;

  constructor() {}

  ngOnInit() {
    const date = StaticMethodsPicto.unFormattedDate(this.weekDay.date);
    this._nameOfDay = new DayNameAndDate(
      date,
      StaticMethodsPicto.getNameOfDay(date)
    );
  }

  get nameOfDay(): DayNameAndDate {
    return this._nameOfDay;
  }
}
