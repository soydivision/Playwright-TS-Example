import {expect, test} from '@playwright/test';
import {BingHomePage} from "../pages/BingHomePage";
import {SEARCH_RESULTS} from "../locators/bing-home-page";
import {BING_SEARCH_QUERY} from "../resources/test-data";

test('Log in test', async ({page}) => {
    const bp = new BingHomePage(page);
    await bp.open();
    await bp.search(BING_SEARCH_QUERY);
    await expect(page.locator(SEARCH_RESULTS)).toBeVisible();
});
