import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
  static ValidatePhone(
    control: AbstractControl
  ): { [key: string]: any } | null {
    if (control.value && control.value.length != 10) {
      return { phoneNumberInvalid: true };
    }
    return null;
  }
}
