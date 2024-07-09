import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Component2Component } from '../component2/component2.component';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {
  @ViewChild(Component2Component, { static: false }) component2!: Component2Component;

  public callOpenPage(num: number) {
    this.component2.OpenPage(num);
  }
}
