import { test as setup, expect } from '../playwright-fixtures/pages.fixture';
import { USER_DATA } from '../data/users.data';

const { standardUser } = USER_DATA;

setup.describe('Authorization Setup', async () => {
    setup.beforeEach(async ({ page }) => {
        page.goto('/');
    });

    setup(
        'Log in and save authentication data for standard user',
        async ({ page, loginPage }) => {
            await loginPage.logInWithCredentials(
                standardUser.username,
                standardUser.password
            );

            // Make sure the login is successful
            await expect(page.url()).toContain('/inventory.html');

            // Store the logged-in state data
            await page.context().storageState({
                path: './.auth/standard-user-storage-state.json',
            });
        }
    );
});
