import {expect, test} from '@playwright/test';
import {AmazonHomePage} from "../pages/AmazonHomePage";
import {AMAZON_SEARCH_QUERY, AMAZON_SEARCH_RESULT} from "../resources/test-data";

test('Amazon search and filter test', async ({page}) => {
    const amazonHomePage = new AmazonHomePage(page)
    await amazonHomePage.open();
    await amazonHomePage.search(AMAZON_SEARCH_QUERY);
    await amazonHomePage.openFirstSearchResult();
    await expect(page.getByText(AMAZON_SEARCH_RESULT)).toHaveCount(1);
});
