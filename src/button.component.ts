import { Input, Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `<button (click)="onClick()">{{label}}</button>`,
  styles: [`
    button {
      padding: 8px 10px;
      font-size: 20px;
    }
  `],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ButtonComponent {
  @Input() label = 'default label';
  @Output() clickAction = new EventEmitter<number>();
  private clicksCt = 0;

  onClick() {
    this.clicksCt++;
    this.clickAction.emit(this.clicksCt);
  }
}
