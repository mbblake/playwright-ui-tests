import { test as base } from '@playwright/test';
import { LoginPage } from '../page-objects/pages/login.page';
import { InventoryPage } from '../page-objects/pages/inventory.page';
import { ShoppingCartPage } from '../page-objects/pages/shopping-cart.page';

export type TPageFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    shoppingCartPage: ShoppingCartPage;
};

export const test = base.extend<TPageFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
    shoppingCartPage: async ({ page }, use) => {
        await use(new ShoppingCartPage(page));
    },
});

export { expect } from '@playwright/test';
