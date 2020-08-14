<template>
<div class="q-pa-md">
  <div class="row justify-center q-gutter-sm">
    <q-intersection
        v-for="img in images"
        :key="img.index"
        transition="scale"
        class="character-item"
      >

      <q-card class="q-ma-sm">
        <img :src='img.source' style="width: 18 em; height: 20em; object-fit: cover;" ratio="3/4">

        <q-card-section>
          <div class="text-body1">{{img.family}} <q-spinner-hearts v-if="img.heart" :color="img.color" size="2em" /></div>
          <q-btn outline rounded  color="primary" label="Read more ..." @click="setActive(img)"></q-btn>
        </q-card-section>
      </q-card>
    </q-intersection>
  </div>

  <q-dialog v-if="activeImage" ref="dialog" @hide="onDialogHide" dark>
    <q-card class="q-dialog-plugin bg-secondary text-white" style="width: 100%">
      <q-card-section horizontal>
        <q-avatar size="10em">
          <img class="" :src='activeImage.source' style="max-width: 10em; border-radius: 50%; object-fit: cover;" ratio="1" />
        </q-avatar>

        <div class="justify-center">
          <q-list separator>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                  <q-icon color="primary" name="fingerprint" />
                </q-item-section>
              <q-item-section><span class="text-bold">{{activeImage.family}}</span></q-item-section>
            </q-item>

            <q-item clickable v-ripple class="text-center">
              <q-item-section>
                <q-item-label>Height: {{activeImage.height}}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="text-center">
              <q-item-section>
                <q-item-label>{{activeImage.motto}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-card-section>
        <div class="q-pa-lg">
          <span>{{activeImage.story}}</span>
        </div>
      <q-card-section>

      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <!-- <q-btn color="primary" label="OK" @click="onOKClick" /> -->
        <q-btn color="primary" style="min-width: 15em" rounded label="Close" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</div>
</template>

<script>
import characters from '../data/characters.json'
import mixinShowcase from '../mixins/mixin-showcase'

export default {
  props: ['family'],
  mixins: [mixinShowcase],
  name: 'Family',

  components: {
    // ShowCase
  },
  data () {
    return {
      activeImage: {},
      images: (this.family === '*') ? characters.images : characters.images.filter(e => e.family.includes(this.family))
    }
  }
}
</script>

<style lang="scss" scoped>

.character-item {
  height: 400px;
  width: 250px
}

img {
  border-radius: 50%;
  -webkit-transition: -webkit-transform .8s ease-in-out;
  transition: transform .8s ease-in-out
}

img:hover {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg)
}
</style>
