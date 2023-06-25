import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.css']
})
export class ModalAlertComponent {
  @Output() confirm = new EventEmitter<void>();

  onConfirmClick() {
    this.confirm.emit();
  }

  onCancelClick() {
  }
}
