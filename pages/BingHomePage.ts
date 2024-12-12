import {Page} from "@playwright/test";
import {QUERY, QUERY_INPUT} from "../locators/bing-home-page";

export class BingHomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto("https://www.bing.com/");
    }

    async search(query: string) {
        await this.page.locator(QUERY_INPUT).fill(QUERY)
        await this.page.keyboard.press("Enter")
    }
}