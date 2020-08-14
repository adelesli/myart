<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          ASL Art Gallery
        </q-toolbar-title>

        <div>
          <q-btn round @click="goDark" color="blue-grey-4" icon="brightness_medium"></q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      :width="168"
    >
      <q-list style="max-width: 12em">
        <q-item-label
          header
          class="text-grey-8 bg-grey-4"
          style="max-width: 12em"
        >
          <img src='icons/favicon-128x128.png' style="max-width: 10em; object-fit: cover;" />
          <div class='q-pt-sm'>ASL Art Collection</div>
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    caption: 'Home',
    icon: 'house',
    link: 'index'
  },
  {
    title: 'Happy',
    caption: 'Happy',
    icon: 'anchor',
    link: 'happy'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },

  methods: {
    goDark () {
      this.$q.dark.toggle()
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  border-radius: 50%;
  -webkit-transition: -webkit-transform .8s ease-in-out;
  transition: transform .8s ease-in-out
}

img:hover {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg)
}
</style>
