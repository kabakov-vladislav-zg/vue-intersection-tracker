import { Tracker } from './tracker'
import { merge } from "lodash"
import { defaultSettings } from "./default-settings"
import { Event } from "./event"

export class IntersectionTracker {
  defaultSettings = defaultSettings

  constructor({ scene, handler, settings }) {
    this._scene = scene
    this._handler = handler
    this._settings = settings ? merge(this.defaultSettings, settings) : this.defaultSettings

    if (this._settings.tracker) {
      this._tracker = new Tracker({
        scene,
        handler,
        settings: this._settings
      })
    } else {
      this._tracker = null
    }

    let options = {
      rootMargin: this._settings.rootMargin
    }
    this._observer = new IntersectionObserver(this._callback.bind(this), options)
    this._observer.observe(scene)
  }

  _callback(entries) {
    if(entries[0].isIntersecting) {
      this._handler(new Event({
        scene: this._scene,
        intersecting: true,
        settings: this._settings
      }))
      this._tracker?.on()
    } else {
      this._handler(new Event({
        scene: this._scene,
        intersecting: false,
        settings: this._settings
      }))
      this._tracker?.off()
    }
  }

  disconnect() {
    if(this._observer) {
      this._observer.disconnect()
      this._observer = null
    }
    if(this._tracker) {
      this._tracker.off()
      this._tracker = null
    }
  }
}