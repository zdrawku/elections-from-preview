import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public currentlyChosenYear: BehaviorSubject<number> = new BehaviorSubject<number>(2024);
}
