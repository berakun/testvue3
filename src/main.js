import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";

const app = createApp(App);

app.config.globalProperties.$gorilla = axios.create({
    baseURL: 'http://localhost:8000/api/post/books',
    timeout: 5000
    // headers: {
    //   Authorization: `Bearer FeUOw1LkQVnbXrZ8LozPtwVlumXI8ABfANNZfJaVBWg3_tPdzw`
    // }
});

app.use(router);

app.mount('#app');