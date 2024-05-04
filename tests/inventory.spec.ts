import { test, expect } from '../playwright-fixtures/pages.fixture';
import { PRODUCT_DETAILS } from '../data/product-details.data';
import { SortingUtility } from '../utilities/sorting.utility';

test.describe('Inventory Test Suite', async () => {
    test.beforeEach(async ({ inventoryPage }) => {
        await inventoryPage.goto();
    });

    test(
        'Should display all currently available products',
        { tag: '@smoke' },
        async ({ inventoryPage }) => {
            const productNames: string[] = await inventoryPage
                .allProductNames()
                .allInnerTexts();

            for (const productName of productNames) {
                await expect(
                    inventoryPage.descriptionForProduct(productName)
                ).toContainText(PRODUCT_DETAILS[productName].description);

                await expect(
                    inventoryPage.priceForProduct(productName)
                ).toContainText(PRODUCT_DETAILS[productName].price);
            }
        }
    );

    test('Should sort items by name from A to Z by default', async ({
        inventoryPage,
    }) => {
        const productNames: string[] = await inventoryPage
            .allProductNames()
            .allInnerTexts();

        expect(SortingUtility.isAscendingOrder(productNames)).toBeTruthy();
    });
});
