import { test, expect } from '@playwright/test';
import { homepage } from "../pages/homepage";

test('Home page url test', async ({ page }) => {
  const hp = new homepage(page);
  await hp.open();
  await hp.fillUserNameAndPassword("standard_user", "secret_sauce");
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await page.waitForTimeout(5000);
});
