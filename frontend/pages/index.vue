<template lang="pug">
  div
    main
      h1 Home
        div(v-for="i in items.data" :key="i.id")
          ItemCard(:item="i")
        //- form(@submit.prevent="saveItem")
        //-   input(type="text" v-model="form.item.title")
        //-   textarea(v-model="form.item.body")
        //-   button(type="submit") Send
</template>

<script>
import ItemCard from '../components/ItemCard.vue'

export default {
  components: {
    ItemCard
  },
  async asyncData ({ $axios, paramas }) {
    try {
      const items = await $axios.get('/api/item/')
      console.log(items)
      return { items }
    } catch (error) {
      return { items: [] }
    }
  },
  data () {
    return {
      form: {
        item: {
          title: '',
          body: '',
          createdAt: ''
        }
      },
      items: []
    }
  }
  // mounted () {
  //   this.getItems()
  // },
  // methods: {
  //   async getItems () {
  //     await this.$axios.get('/api/item/')
  //       .then((res) => {
  //         this.items = res.data
  //         console.log(this.items)
  //       })
  //   },
  //   saveItem () {
  //     api({
  //       method: 'post',
  //       url: '/item/',
  //       data: {
  //         // eslint-disable-next-line
  //         'title': this.form.title,
  //         // eslint-disable-next-line
  //         'body': this.form.body
  //       }
  //     }).then((res) => {
  //       this.$store.dispatch('message/setInfoMessage', { message: '登録しました' })
  //       this.form.item = res.data
  //     })
  //   }
  // }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

</style>
