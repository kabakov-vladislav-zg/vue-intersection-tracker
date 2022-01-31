import { Event } from './event'

export class Tracker {
  constructor({ scene, handler, settings }) {
    this._scene = scene
    this._handler = handler
    this._settings = settings

    this._state = false
  }

  handleEvent() {
    let e = new Event({
      scene: this._scene,
      intersecting: this._state,
      settings: this._settings
    })

    this._handler(e)
  }

  on() {
    if(!this._state) {
      this._state = true
      window.addEventListener('scroll', this)
    }
  }

  off() {
    if(this._state) {
      this._state = false
      window.removeEventListener('scroll', this)
    }
  }
}