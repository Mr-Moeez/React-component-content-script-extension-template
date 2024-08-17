(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/main.jsx-b859429b.js")
    );
  })().catch(console.error);

})();
