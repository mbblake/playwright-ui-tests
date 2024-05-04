import { type Page, type Locator } from '@playwright/test';
import { BasePage } from '../base/base.page';
import { PageHeader } from '../components/page-header.component';

export class InventoryPage extends BasePage {
    protected readonly path: string = '/inventory.html';
    public readonly allProductDetails = (): Locator =>
        this.page.locator('.inventory_item_description');
    public readonly allProductNames = (): Locator =>
        this.page.locator('.inventory_item_name');
    public readonly detailsForProduct = (productName: string): Locator =>
        this.allProductDetails().filter({
            hasText: productName,
        });
    public readonly descriptionForProduct = (productName: string): Locator =>
        this.detailsForProduct(productName).locator('.inventory_item_desc');
    public readonly priceForProduct = (productName: string): Locator =>
        this.detailsForProduct(productName).locator('.inventory_item_price');
    public readonly addToCartButtonForProduct = (
        productName: string
    ): Locator =>
        this.detailsForProduct(productName).locator(
            'button.btn_primary.btn_inventory'
        );

    constructor(page: Page) {
        super(page);
    }

    public pageHeader(): PageHeader {
        return new PageHeader(this.page);
    }

    public async clickAddToCartForProduct(productName: string): Promise<void> {
        await this.addToCartButtonForProduct(productName).click();
    }

    public async clickAddToCartForProducts(
        productNames: string[]
    ): Promise<void> {
        for (const productName of productNames) {
            await this.clickAddToCartForProduct(productName);
        }
    }
}
