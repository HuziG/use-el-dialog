import { createApp } from 'vue';
import App from './App.vue';

import UseElDialog from '../package/index';
import 'element-plus/dist/index.css';
import { ElDialog, ElButton } from 'element-plus';

const app = createApp(App);

app.use(UseElDialog);
app.use(ElDialog);
app.use(ElButton);

app.mount('#app');
