import { type Page, type Locator } from '@playwright/test';
import { BasePage } from '../base/base.page';

export class ShoppingCartPage extends BasePage {
    protected readonly path: string = '/cart.html';
    public readonly itemsInCart = (): Locator =>
        this.page.locator('.cart_item');
    private readonly removeButtons = (): Locator =>
        this.page.getByRole('button').filter({ hasText: 'Remove' });
    private readonly firstRemoveButton = (): Locator =>
        this.removeButtons().first();

    constructor(page: Page) {
        super(page);
    }

    public async removeAllItemsInCart(): Promise<void> {
        const removeButtonCount: number = await this.removeButtons().count();

        for (let i = 0; i < removeButtonCount; i++) {
            await this.firstRemoveButton().click();
        }
    }
}
