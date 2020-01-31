// tslint:disable: no-unused-expression
import {setDefaultTimeout, setWorldConstructor} from 'cucumber';

function CustomWorld() {
  setDefaultTimeout(90 * 1000);
}

setWorldConstructor(CustomWorld);
