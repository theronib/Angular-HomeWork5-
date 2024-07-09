import { Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {
  public isCarVisible = false;
  public isPlaneVisible = false;
  public isShipVisible = false;

  public OpenPage(num: number): void {
    this.resetVisibility();
    switch (num) {
      case 1:
        this.isCarVisible = !this.isCarVisible;
        break;
      case 2:
        this.isPlaneVisible = !this.isPlaneVisible;
        break;
      case 3:
        this.isShipVisible = !this.isShipVisible;
        break;
    }
  }

  private resetVisibility(): void {
    this.isCarVisible = false;
    this.isPlaneVisible = false;
    this.isShipVisible = false;
  }
}
