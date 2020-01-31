import {browser, ElementFinder, ExpectedConditions} from 'protractor';

export const click = {
  on: async (e: ElementFinder) => {
    await browser.wait(ExpectedConditions.elementToBeClickable(e), 10_000,
      `Element (locator: ${e.locator()}) is not clickable after 10 seconds.`);
    await e.click();
  },
};

