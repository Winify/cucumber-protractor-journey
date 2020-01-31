import {element, by, $$} from 'protractor';

export const googleScreen = {
  searchBtn: $$('[name="btnK"]').last(),
  searchBar: element(by.name('q')),
  firstResult: $$('div.result').first(),
};
