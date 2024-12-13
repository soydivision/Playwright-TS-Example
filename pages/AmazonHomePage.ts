import {Page} from "@playwright/test";
import {FIRST_SEARCH_RESULT, QUERY_INPUT} from "../locators/amazon-home-page";

export class AmazonHomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto("https://www.amazon.com/");
    }

    async search(query: string) {
        await this.page.locator(QUERY_INPUT).fill(query)
        await this.page.keyboard.press("Enter")
    }

    async openFirstSearchResult() {
        await this.page.locator(FIRST_SEARCH_RESULT).first().click()
    }
}