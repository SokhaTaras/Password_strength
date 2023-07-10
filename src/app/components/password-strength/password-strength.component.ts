import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent implements OnChanges {
  @Input() password: string | null = '';
  @Input() isLengthError: boolean = false;
  private colors = ['grey', 'red', 'orange', 'green'];
  passwordStrength = 0;
  isInvalid = false;
  color: string = 'grey';

  ngOnChanges(changes: SimpleChanges) {
    this.calculateStrength(changes['password'].currentValue);
  }

  private calculateStrength(password: string) {
    this.passwordStrength = 0;

    if (password.length < 8) {
       return
    }

    const hasLetters = /[а-яА-Яa-zA-Z]+/.test(password);
    const hasSymbols = /[$-/:-?{-~!"^_@`\[\]]/.test(password);
    const hasDigits = /[0-9]+/.test(password);

    if (hasLetters) this.passwordStrength += 1;
    if (hasSymbols) this.passwordStrength += 1;
    if (hasDigits) this.passwordStrength += 1;

    this.color = this.colors[this.passwordStrength];

  }
}
