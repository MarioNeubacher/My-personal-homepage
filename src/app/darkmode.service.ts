import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  @Input() darkModeToggle = true; //@Input() enables to toggle from other components

  constructor() { }
}
