'use strict';

import Signal from 'signals';

import RouterActions from './RouterActions';

export default class RouterStore {

  constructor() {

    this.route = {};

    this.changed = new Signal();

    RouterActions.update.add(this._update.bind(this));
  }

  /**
   * _update
   */
  _update(route) {

    this.route = route;

    this.changed.dispatch();
  }

}
