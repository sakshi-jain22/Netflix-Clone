import React, { useRef } from 'react';
import { Provider } from 'react-redux';

import { AppStore, makeStore } from './redux/store.ts';

interface IStoreProvider {
  children: React.ReactNode;
}

const StoreProvider: React.FC<IStoreProvider> = (props) => {
  const { children } = props;
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
