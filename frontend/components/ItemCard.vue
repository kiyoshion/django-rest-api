<template lang="pug">
  div
    p {{ item.title }}
    p {{ item.body }}
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
}
</script>
