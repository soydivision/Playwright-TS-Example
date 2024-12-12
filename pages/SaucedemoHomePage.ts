import {Page} from '@playwright/test';
import {PASSWORD_INPUT, USERNAME_INPUT} from "../locators/saucedemo-home-page";

export class SaucedemoHomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async fillUserNameAndPassword(name: string, pass: string) {
        await this.page.locator(USERNAME_INPUT).fill(name)
        await this.page.locator(PASSWORD_INPUT).fill(pass)
        await this.page.keyboard.press('Enter');
    }
}

