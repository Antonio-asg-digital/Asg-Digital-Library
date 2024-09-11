import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-textbox',
  template: `
    <input 
      [type]="type" 
      [value]="value" 
      (input)="onInput($event)" 
      [placeholder]="placeholder"
    />
  `,
  styles: [`input { font-size: 16px; padding: 8px; border-radius: 4px; border: 1px solid #ccc; }`],
  standalone: true,
  imports: [CommonModule]
})
export class TextBoxComponent {
  @Input() type: string = 'text';  // The type of input field
  @Input() value: string = '';     // The value of the input field
  @Input() placeholder: string = ''; // Placeholder text
  @Output() valueChange = new EventEmitter<string>(); // Emit value changes

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.value);
  }
}
