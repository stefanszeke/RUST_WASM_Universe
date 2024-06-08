import { Universe } from "wasm-game-of-life";
// wasm.greet("Stefan");

console.log("index.js loaded");

const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

const renderLoop = () => {
  pre.textContent = universe.render();
  universe.tick();

  requestAnimationFrame(renderLoop);
};

renderLoop();