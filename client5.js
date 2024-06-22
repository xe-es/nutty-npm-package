"use strict";
(() => {
  // src/code/modules/client.ts
  var Client = class {
    constructor() {
      console.log("Client created");
    }
  };

  // src/code/main.ts
  var koko = new Client();
})();
