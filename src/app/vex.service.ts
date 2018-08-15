import { Injectable } from '@angular/core';

declare let vex

@Injectable({
  providedIn: 'root'
})
export class VexService {
  instance

  constructor() {
    vex.defaultOptions.className = "vex-theme-os"
    this.instance = vex
  }


}
