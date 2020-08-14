<template>
<div class="q-pa-md">
  <div class="row justify-center q-gutter-sm">
    <q-intersection
        v-for="art in arts"
        :key="art.index"
        transition="scale"
        class="character-item"
      >

      <q-card class="q-ma-sm">
        <img :src='art.source' style="width: 18 em; height: 20em; object-fit: cover;" ratio="3/4">

        <q-card-section>
          <div class="text-body1">{{art.name}} <q-spinner-hearts v-if="art.heart" :color="art.color" size="2em" /></div>
          <q-btn outline rounded  color="primary" label="Read more ..." @click="setActive(art)"></q-btn>
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
                <q-item-label>Desc: {{activeImage.description}}</q-item-label>
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
import Arts from '../data/arts.json'
import mixinShowcase from '../mixins/mixin-showcase'

export default {
  props: ['name'],
  mixins: [mixinShowcase],
  name: 'name',

  components: {
    // ShowCase
  },
  data () {
    return {
      activeImage: {},
      arts: (this.name === '*') ? Arts.arts : Arts.arts.filter(e => e.name.includes(this.name))
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
