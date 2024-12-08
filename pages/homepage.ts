import { test, expect, Page } from '@playwright/test';
import { PASSWORD, USERNAME } from "../locators/locators";

export class homepage {
  readonly page: Page;


  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto("https://www.saucedemo.com/");
  }


  async fillUserNameAndPassword(name: string, pass: string) {
    await this.page.locator(USERNAME).fill(name)
    await this.page.locator(PASSWORD).fill(pass)
    await this.page.keyboard.press('Enter');
  }

}

