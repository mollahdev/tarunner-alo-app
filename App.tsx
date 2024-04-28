/**
 * External dependencies 
 */ 
import { Provider } from 'react-redux'
/**
 * Internal dependencies 
 */ 
import { store } from '@src/services/data';
import RouterProvider from '@src/router';
import { Body } from '@src/components';

export default function App() {
  return (
    <Provider store={store}>
      <Body>
        <RouterProvider/>
      </Body>
    </Provider>
  );
}
