console.debug(performance.now());

window.addEventListener("DOMContentLoaded", event => {
  console.log(event.type, performance.now());
});
