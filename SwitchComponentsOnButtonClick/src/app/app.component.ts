import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SwitchComponentsOnButtonClick';
  firstComponentEnable: boolean = true;
  secondComponentEnable: boolean = false;

  toggleComponents()
  {
    this.firstComponentEnable = !this.firstComponentEnable;
    this.secondComponentEnable = !this.secondComponentEnable;
  }
}
