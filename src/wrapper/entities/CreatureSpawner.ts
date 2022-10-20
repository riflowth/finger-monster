import { Ground } from '@/renderer/canvas/object/Ground';
import { BlueSlimeAnimation } from '@/renderer/canvas/sprite/entities/BlueSlimeAnimation';
import { CollisionRegistry } from '@/renderer/collision/CollisionRegistry';
import { ImageRegistry } from '@/renderer/ImageRegistry';
import { Scene } from '@/scene/Scene';
import { Creature } from '@/wrapper/entities/Creature';
import { BlueSlime } from '@/wrapper/entities/living/BlueSlime';

export class CreatureSpawner {
  
  private readonly imageRegistry: ImageRegistry;
  private readonly collisionRegistry: CollisionRegistry;

  private sceneHeight: number = 0;
  private offsetX: number = 0;
  private creatures: Creature[] = [];

  public constructor(imageRegistry: ImageRegistry, collisionRegistry: CollisionRegistry) {
    this.imageRegistry = imageRegistry;
    this.collisionRegistry = collisionRegistry;
  }

  public setScene(scene: Scene): CreatureSpawner {
    this.offsetX = scene.getWidth();
    this.sceneHeight = scene.getHeight();
    return this;
  }

  public spawn(ground: Ground, scale: number): void {
    const creature = new BlueSlime();
    creature.setScale(scale);
    creature.setAnimation(new BlueSlimeAnimation(this.imageRegistry, this.collisionRegistry));
    creature.setX(this.offsetX);
    creature.setYOnGround(ground);

    this.creatures.push(creature);
  }

  public getSpawnedCreatures(): Creature[] {
    return this.creatures;
  }

}
