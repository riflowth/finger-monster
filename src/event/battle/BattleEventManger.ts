import { PlayerBattleEvent } from '@/event/battle/PlayerBattleEvent';
import { EventManager } from '@/event/EventManager';
import { BattleUIManager } from '@/renderer/ui/battleui/BattleUIManager';
import { Player } from '@/wrapper/entities/living/Player';

export class BattleEventManager extends EventManager {
  protected uiManager: BattleUIManager;
  private playerEvent: PlayerBattleEvent;

  public constructor(uiManager: BattleUIManager) {
    super();
    this.uiManager = uiManager;
    this.playerEvent = new PlayerBattleEvent(this.uiManager);
  }

  public onPlayerDie(player: Player): void {
    this.playerEvent.onDie(player);
  }

  public onPlayerHurt(player: Player): void {
    player.setHealth(player.getHealth() - 10);
    this.playerEvent.onHurt(player.getHealth());
    if (player.getHealth() <= 0) {
      this.onPlayerDie(player);
    }
  }
}