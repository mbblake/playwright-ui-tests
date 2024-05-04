import { test, expect } from '../playwright-fixtures/pages.fixture';

test.describe('Cart Test Suite', async () => {
    test.beforeEach(async ({ inventoryPage }) => {
        await inventoryPage.goto();
    });

    test(
        'Should remove one item from the shopping cart',
        { tag: '@smoke' },
        async ({ inventoryPage, shoppingCartPage }) => {
            await inventoryPage.clickAddToCartForProduct('Sauce Labs Onesie');
            await inventoryPage.pageHeader().openShoppingCart();
            await shoppingCartPage.removeAllItemsInCart();
            await expect(shoppingCartPage.itemsInCart()).toHaveCount(0);
        }
    );

    test('Should remove multiple items from the shopping cart', async ({
        inventoryPage,
        shoppingCartPage,
    }) => {
        await inventoryPage.clickAddToCartForProducts([
            'Sauce Labs Onesie',
            'Sauce Labs Bike Light',
        ]);
        await inventoryPage.pageHeader().openShoppingCart();
        await shoppingCartPage.removeAllItemsInCart();
        await expect(shoppingCartPage.itemsInCart()).toHaveCount(0);
    });
});
