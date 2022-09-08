import { SpriteResource } from "@/renderer/canvas/sprite/SpriteResource";

export interface Entity {

  load(): Promise<void>;
  
  getX(): number;

  setX(x: number): void;

  getY(): number;

  setY(y: number): void;

  getHealth(): number;

  setHealth(health: number): void;

  getCurrentState(): EntityState;

  setCurrentState(state: EntityState): void;

  getCurrentSprite(): SpriteResource;

  attack(target: Entity): void

}

export enum EntityState {
  IDLE,
  ATTACK,
  HURT,
  DIE,
};