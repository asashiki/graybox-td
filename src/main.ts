import { Application, Container, Graphics, Text } from 'pixi.js';

const app = new Application();
await app.init({ resizeTo: window, background: '#8b3f2f' });
document.body.appendChild(app.canvas);

const scene = new Container();
app.stage.addChild(scene);

const title = new Text({ text: 'Redsand Loop\nMars Defense Demo', style: { fill: '#ffffff', fontSize: 36 } });
title.position.set(60, 60);
scene.addChild(title);

const grid = new Graphics();
for (let y = 0; y < 12; y++) {
  for (let x = 0; x < 20; x++) {
    grid.rect(20 + x * 32, 180 + y * 32, 30, 30).fill({ color: 0x55352d });
  }
}
scene.addChild(grid);
