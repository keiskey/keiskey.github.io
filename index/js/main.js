"use strict";

console.debug(performance.now());

window.addEventListener("DOMContentLoaded", function (event) {
  console.log(event.type, performance.now());
});