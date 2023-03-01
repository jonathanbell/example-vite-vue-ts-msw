import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// TODO: wrap this in an `if()` - only do this in a development environment.
import { worker } from "./mocks/browser";
worker.start({
  serviceWorker: {
    /**
     * Use a custom Service Worker script URL to resolve
     * the mock worker served by Codesandbox.
     * @note You DO NOT need this in your production application.
     * @see https://mswjs.io/docs/api/setup-worker/start#serviceworker
     */
    url: "/mockServiceWorker.js",
  },
});

createApp(App).mount("#app");
