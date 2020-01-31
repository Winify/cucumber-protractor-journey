import {browser, ElementFinder, ExpectedConditions} from 'protractor';

export const type = {
  text: async (e: ElementFinder, text: string) => {
    await browser.wait(ExpectedConditions.visibilityOf(e), 10_000,
      `Element (locator: ${e.locator()}) is not visible after 10 seconds.`);
    await e.sendKeys(text);
  },
};
