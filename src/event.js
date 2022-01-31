import { Box } from "./box"

export class Event {
  constructor({ scene, intersecting, settings }) {
    this._box = new Box(scene, settings.rootMargin)
    this._intersecting = intersecting
  }

  _correct(progress) {
    return progress < 0 ? 0 : progress > 1 ? 1 : progress
  }

  get up1() {
    return this._correct(1 - this._box.top / document.documentElement.clientHeight)
  }
  get up2() {
    return this._correct(1 - this._box.bottom / this._box.height)
  }

  get down1() {
    return this._correct(1 - (this._box.bottom -  document.documentElement.clientHeight) / this._box.height)
  }
  get down2() {
    return this._correct(1 - this._box.bottom / document.documentElement.clientHeight)
  }

  get through() {
    return this._correct(1 - this._box.bottom / (document.documentElement.clientHeight + this._box.height))
  }
  get isIntersecting() {
    return this._intersecting
  }
}