<template>
  <q-item
    clickable
    tag="a"
    :to="link"
    style="max-width: 12em"
    class="text-dark"
    active-class="bg-secondary text-white"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon color="positive" :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
