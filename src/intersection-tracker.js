import { Tracker } from './tracker'

export class IntersectionTracker {
  constructor(scene, notify, margin) {
    this._tracker = new Tracker(scene, notify, margin)

    this._observer = new IntersectionObserver(this._callback.bind(this), {rootMargin: `${margin || 0}px 0px`})
    this._observer.observe(scene)
  }

  _callback(entries) {
    entries[0].isIntersecting ? this._tracker.on() : this._tracker.off()
  }

  disconnect() {
    this._observer.disconnect()
    this._tracker.off()
  }
}