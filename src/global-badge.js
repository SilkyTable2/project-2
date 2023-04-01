import { ReactiveController } from 'lit';

class GlobalBadgeCtor extends ReactiveController {
  constructor(host) {
    super(host);
    this.badges = [];
  }
}
