export class Event {
  constructor(scene, intersecting, margin) {
    this._box = scene.getBoundingClientRect()
    this._intersecting = intersecting
    this._margin = Number(margin) || 0
  }

  _correct(progress) {
    return progress < 0 ? 0 : progress > 1 ? 1 : progress
  }

  get up1() {
    return this._correct(1 - (this._box.top + this._margin) / document.documentElement.clientHeight)
  }
  get up2() {
    return this._correct(1 - (this._box.bottom - this._margin) / (this._box.height - 2 * this._margin))
  }

  get down1() {
    return this._correct(1 - (this._box.bottom - this._margin -  document.documentElement.clientHeight) / (this._box.height - 2 * this._margin))
  }
  get down2() {
    return this._correct(1 - (this._box.bottom - this._margin) / document.documentElement.clientHeight)
  }

  get through() {
    return this._correct(1 - (this._box.bottom - this._margin) / (document.documentElement.clientHeight + this._box.height - 2 * this._margin))
  }
  get isIntersecting() {
    return this._intersecting
  }
}