import { type Page, type Locator } from '@playwright/test';
import { BasePage } from '../base/base.page';

export class LoginPage extends BasePage {
    // The homepage IS the login page
    protected readonly path: string = '/';
    private readonly usernameField = (): Locator =>
        this.page.getByPlaceholder('Username');
    private readonly passwordField = (): Locator =>
        this.page.getByPlaceholder('Password');
    private readonly loginButton = (): Locator => this.page.getByRole('button');
    public readonly errorMessage = (): Locator =>
        this.page.locator('.error-message-container');

    constructor(page: Page) {
        super(page);
    }

    private async enterUsername(username: string): Promise<void> {
        await this.usernameField().fill(username);
    }

    private async enterPassword(password: string): Promise<void> {
        await this.passwordField().fill(password);
    }

    private async clickLoginButton(): Promise<void> {
        await this.loginButton().click();
    }

    public async logInWithCredentials(
        username: string,
        password: string
    ): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}
