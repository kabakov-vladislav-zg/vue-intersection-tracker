import {IntersectionTracker} from "./intersection-tracker";

export default {
  install: (app) => {
    app.directive('tracker', {
      mounted(el, { value, arg }) {
        el.vueIntersectionTracker = new IntersectionTracker(el, value, arg)
      },
      unmounted(el) {
        el.vueIntersectionTracker.disconnect()
      }
    })
  }
}