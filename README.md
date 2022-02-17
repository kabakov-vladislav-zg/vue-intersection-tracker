# vue-intersection-tracker
Директива для получения прогресса пересечения элемента с областью видимости документа

## Installation
~~~
# npm
npm i vue-intersection-tracker
# yarn
yarn add vue-intersection-tracker
~~~
You can import the library and use as a Vue plugin to enable the functionality globally on all components
~~~
import { createApp } from 'vue'
import App from './App.vue'
import intersectionTracker from 'vue-intersection-tracker'

createApp(App).use(intersectionTracker[, settings])
~~~
## Usage
~~~
<template>
  <section v-tracker:[settings]="callback"> // (1)
    ...
  </section>
</template>

<script>
export default {
  data() {
    return {
      settings: JSON.stringify({...}), // (2)
    }
  },

  methods: {
    callback(e) { // (3)
      ...
    }
  }
}
</script>
~~~
1. Вешаем на целевой элемент
1. (необязательно) Передаем объект настроек в формате JSON в качестве аргумента деректывы. Указанные настройки переопределят базовые. Настройки являются реактивными.
1. Передаем метод, который будет вызываться при прохождении целевого элемента через область видимости документа. Аргументом является обьект, содержащий информацию о прогрессе пересечения.
