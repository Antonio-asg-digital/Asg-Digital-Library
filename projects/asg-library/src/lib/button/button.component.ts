import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `<button class="bg-red-500 text-white p-2 rounded-md" (click)="handleClick()">{{ label }}</button>`,
  standalone: true,
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() onClick: () => void = () => {};

  handleClick() {
    this.onClick();
  }
}
