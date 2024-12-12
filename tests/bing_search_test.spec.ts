import {expect, test} from '@playwright/test';
import {BingHomePage} from "../pages/BingHomePage";
import {SEARCH_RESULTS} from "../locators/bing-home-page";

test('Log in test', async ({page}) => {
    const bp = new BingHomePage(page);
    await bp.open();
    await bp.search("Apple");
    await expect(page.locator(SEARCH_RESULTS)).toBeVisible();
});
