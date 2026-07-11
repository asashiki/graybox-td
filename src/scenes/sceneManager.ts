export interface Scene {
  enter(): void;
  exit(): void;
  update(dt: number): void;
}

export class SceneManager {
  private current?: Scene;

  change(scene: Scene) {
    this.current?.exit();
    this.current = scene;
    this.current.enter();
  }

  update(dt: number) {
    this.current?.update(dt);
  }
}
