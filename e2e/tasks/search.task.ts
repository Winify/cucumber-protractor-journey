import {googleScreen} from '../screens/google.screen';
import {type} from '../actions/type.action';
import {click} from '../actions/click.action';

export const search = {
  for: async (query: string) => {
    await type.text(googleScreen.searchBar, query);
    await click.on(googleScreen.searchBtn);
  },
};

