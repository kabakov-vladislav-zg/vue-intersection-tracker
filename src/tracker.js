import { Event } from './event'

export class Tracker {
  constructor(scene, notify, margin) {
    this._state = false
    this._scene = scene
    this._notify = notify
    this._margin = margin
  }

  handleEvent() {
    this._notify(new Event(this._scene, this._state, this._margin))
  }

  on() {
    if(!this._state) {
      this._state = true
      this.handleEvent()
      window.addEventListener('scroll', this)
    }
  }

  off() {
    if(this._state) {
      this._state = false
      this.handleEvent()
      window.removeEventListener('scroll', this)
    }
  }
}