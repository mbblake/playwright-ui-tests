import { type Page } from '@playwright/test';
import { BaseComponent } from '../base/base.component';

export class BurgerMenu extends BaseComponent {
    constructor(page: Page) {
        super(page);
    }
}
