import { SceneComponent } from '@/renderer/canvas/scene/components/SceneComponent';
import { AttackPlayerSprite } from '@/renderer/canvas/sprite/player/AttackPlayerSprite';
import { HitPlayerSprite } from '@/renderer/canvas/sprite/player/HitPlayerSprite';
import { IdlePlayerSprite } from '@/renderer/canvas/sprite/player/IdlePlayerSprite';
import { SpriteResource } from '@/renderer/canvas/sprite/SpriteResource';

export class PlayerComponent extends SceneComponent<SpriteResource> {

  public constructor() {
    super([
      new IdlePlayerSprite(),
      new AttackPlayerSprite(),
      new HitPlayerSprite(),
    ], 0, 0);
  }

}
