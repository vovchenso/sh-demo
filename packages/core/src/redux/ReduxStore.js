import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

const isProductionOrTest = (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test');

const newStore = (reducers, initialState) => {
  const middlewares = [];

  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware.apply(this, middlewares),
      window.devToolsExtension && !isProductionOrTest
        ? window.devToolsExtension()
        : f => f
    )
  );
};

export default {
  newStore
};
