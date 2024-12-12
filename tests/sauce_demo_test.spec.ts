import {test, expect} from '@playwright/test';
import {SaucedemoHomePage} from "../pages/SaucedemoHomePage";
import {PASSWORD, USERNAME} from "../resources/credentials";

test('Log in test', async ({page}) => {
    const hp = new SaucedemoHomePage(page);
    await hp.open();
    await hp.fillUserNameAndPassword(USERNAME, PASSWORD);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
