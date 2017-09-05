import EventBus from 'eventbusjs';
import Events from './EventDefinitions';

export default  {

  Events,

  // @type - string
  // @callback - function
  // @scope - the scope where the @callback is defined
  addEventListener: (...args) => {
    console.log('[EventBus]: add listener =>', args[0]);
    EventBus.addEventListener(...args);
  },

  // @type - string
  // @callback - function
  // @scope - the scope where the @callback is defined
  removeEventListener: (...args) => {
    console.log('[EventBus]: remove listener =>', args[0]);
    EventBus.removeEventListener(...args);
  },

  // @type - string
  // @target - the caller
  // @args - pass as many arguments as you want
  dispatch: (...args) => {
    console.log('[EventBus]: dispatch event =>', args);
    EventBus.dispatch(...args);
  }
};
