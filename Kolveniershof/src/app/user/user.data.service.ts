import { Injectable } from "@angular/core";
import { Observable, Subject, of } from "rxjs";
import { map, share, catchError, delay } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";

@Injectable({
  providedIn: "root"
})
export class UserDataService {
  public loadingError$ = new Subject<string>();
  constructor(private http: HttpClient) {}

  get users$(): Observable<User[]> {
    return this.http.get(`${environment.apiUrl}/User/`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
      map((list: any[]): User[] => list.map(User.fromJSON))
    );
  }
}
