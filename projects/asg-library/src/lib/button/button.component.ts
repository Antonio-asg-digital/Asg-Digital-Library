import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./button.component.css', '../../styles.scss'],
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() onClick: () => void = () => {};
  handleClick() {
    this.onClick();
  }
}