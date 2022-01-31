import { IntersectionTracker } from "./intersection-tracker"
import { merge } from "lodash"
import { defaultSettings } from "./default-settings"

export default {
  install: (app, settings = null) => {
    if(settings) {
      IntersectionTracker.prototype.defaultSettings = merge(defaultSettings, settings)
    }

    let getTracker = (el, value, arg) => {
      return new IntersectionTracker({
        scene: el,
        handler: value,
        settings: arg ? JSON.parse(arg) : null
      })
    }

    app.directive('tracker', {
      mounted(el, { value, arg }) {
        el.vueIntersectionTracker = {
          arg,
          tracker: getTracker(el, value, arg)
        }
      },
      updated(el, { value, arg }) {
        if(el.vueIntersectionTracker.arg !== arg) {
          el.vueIntersectionTracker.tracker.disconnect()

          el.vueIntersectionTracker = {
            arg,
            tracker: getTracker(el, value, arg)
          }
        }
      },
      unmounted(el) {
        el.vueIntersectionTracker.tracker.disconnect()
      }
    })
  }
}