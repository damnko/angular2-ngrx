import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AllUserData } from '../../shared/transfer-objects/all-user-data';

@Injectable()
export class ThreadsService {

  constructor(private http: Http) { }

  loadUserThreads(): Observable<AllUserData> {
    return this.http.get('/api/getall')
      .map(res => res.json());
  }
}
