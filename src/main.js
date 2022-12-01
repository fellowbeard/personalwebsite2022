import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCg8iALBMwNSrXg0RnG8nCyKVq0_vrk2ok",
  authDomain: "personalwebsite2022-75125.firebaseapp.com",
  projectId: "personalwebsite2022-75125",
  storageBucket: "personalwebsite2022-75125.appspot.com",
  messagingSenderId: "617059198354",
  appId: "1:617059198354:web:b8b0df07375dabc3298d4b",
  measurementId: "G-Z4JLX1Z9BF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

createApp(App).use(router).mount("#app");
