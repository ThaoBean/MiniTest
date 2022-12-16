import { ThemeConfig } from 'antd/es/config-provider/context';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: 'red',
  },
  components: {
    Button: {
      colorBorder: 'red',
      colorText: 'green',
    },
  },
};
