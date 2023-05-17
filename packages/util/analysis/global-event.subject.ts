import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalEventSubjectService {
  public clickEvents = new Subject<Event>();
}
