import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TodoContextProvider } from './context/providers/TodoContext.tsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { store, persistor } from './store/store.ts';
import router from './router.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoContextProvider>
          <RouterProvider router={router} />
        </TodoContextProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
