import '@/css/style.css';
import { Game } from '@/Game';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <canvas id="scene" />
`;

const game = new Game();
game.start();