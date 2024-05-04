import { type Page, type Locator } from '@playwright/test';
import { BaseComponent } from '../base/base.component';

export class PageHeader extends BaseComponent {
    private readonly burgerMenuButton = (): Locator =>
        this.page.locator('#react-burger-menu-btn');
    private readonly shoppingCartButton = (): Locator =>
        this.page.locator('.shopping_cart_container');
    public readonly numberOfProductsInCart = (): Locator =>
        this.page.locator('.shopping_cart_badge');

    constructor(page: Page) {
        super(page);
    }

    public async openBurgerMenu(): Promise<void> {
        await this.burgerMenuButton().click();
    }

    public async openShoppingCart(): Promise<void> {
        await this.shoppingCartButton().click();
    }
}
