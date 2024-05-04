import { test, expect } from '../playwright-fixtures/pages.fixture';
import { USER_DATA } from '../data/users.data';

const { standardUser, lockedOutUser } = USER_DATA;
// Reset storage state for this spec file
test.use({ storageState: { cookies: [], origins: [] } });
test.describe('Login Test Suite', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test(
        'Should log in successfully as standard user',
        { tag: '@smoke' },
        async ({ page, loginPage }) => {
            await loginPage.logInWithCredentials(
                standardUser.username,
                standardUser.password
            );

            await expect(page.url()).toContain('/inventory.html');
        }
    );

    test('Should not log in a locked out user', async ({ loginPage }) => {
        await loginPage.logInWithCredentials(
            lockedOutUser.username,
            lockedOutUser.password
        );

        await expect(loginPage.errorMessage()).toContainText(
            'Epic sadface: Sorry, this user has been locked out.'
        );
    });
});
