import "./style.css";

import App from "./App.vue";
import { createApp } from "vue";
import { worker } from "./mocks/browser";

worker.start({
  // onUnhandledRequest: ({ method, url }) => {
  //   if (!url.pathname.startsWith("/api")) {
  //     throw new Error(`Unhandled ${method} request to ${url}`);
  //   }
  // },
  onUnhandledRequest: 'bypass', // https://stackoverflow.com/a/68024936/1171790
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
