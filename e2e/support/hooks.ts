import {Before} from 'cucumber';
import {browser, promise} from 'protractor';

Before(function (): promise.Promise<void> {
  return browser.manage().deleteAllCookies();
});
