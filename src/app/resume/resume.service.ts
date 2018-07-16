import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  serviceURL =
    'https://cdn.contentful.com/spaces/hgjyi5lurih3/environments/master/entries/1nDLOS0AkEuUUyy4CE6SsO' +
    '?access_token=b3b3b518c7649017f733b6eaf64952902296ac159f37fc1a30223666fe1c9412';
  constructor(private http: HttpClient) {}
  getResume(): Observable<any> {
    return this.http.get<string>(this.serviceURL).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        console.log(error);
        return error;
      })
    );
  }
}
