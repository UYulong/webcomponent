<template>
  <wc-hello-world />

  <wc-say-hello :username="username" />

  <wc-user-card :info="JSON.stringify(info)" @myevent="handleReceiveEvent" />
</template>

<script setup>
import { ref } from 'vue'
import WcHelloWorld from './webcomponents/HelloWorld'
import WcSayHello from './webcomponents/SayHello'
import WcUserCard from './webcomponents/UserCard'

const username = ref('cai xu kun')

setTimeout(() => {
  username.value = 'kun xu cai'
}, 3000)

const info = ref({
  name: '张三丰',
  age: 1001
})

setTimeout(() => {
  info.value.name = '火龙真人'
  info.value.age = 2000
}, 3000);

const handleReceiveEvent = ({detail}) => {
  console.log(detail.message);
}
</script>