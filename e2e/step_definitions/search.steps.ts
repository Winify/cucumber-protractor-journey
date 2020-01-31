import {Given, Then, When} from 'cucumber';
import {type} from '../actions/type.action';
import {googleScreen} from '../screens/google.screen';
import {click} from '../actions/click.action';
import {search} from '../tasks/search.task';
import {browser} from 'protractor';

Given(/^that I am on the Google page$/, async function () {
  return browser.get('https://www.google.com');
});

When(/^I add (.*) to the search box$/, async function (query: string) {
  return type.text(googleScreen.searchBar, query);
});

When(/^click the Search Button$/, async function () {
  return click.on(googleScreen.searchBtn);
});

When(/^I search for (.*)$/, async function (query: string) {
  return search.for(query);
});

Then(/^(.*) should be mentioned in the results$/, async function (result: string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
