import 'antd/dist/reset.css';

// import Button from 'antd/es/button';
import ConfigProvider from 'antd/es/config-provider';
import { Provider } from 'react-redux';
// import Space from 'antd/es/space';
import { BrowserRouter } from 'react-router-dom';

import { theme } from './libs/theme';
import { PublicRouters } from './navigates';
import { store } from './redux/store';

function App() {
  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <PublicRouters />
        </Provider>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
