<template>
  <div >
    <ArtPiece :name="family"></ArtPiece>
  </div>
</template>

<script>
import ArtPiece from '../components/ArtPiece'

export default {
  name: 'Castellan',

  components: {
    ArtPiece
  },
  data () {
    return {
      family: 'Castellan'
    }
  }
}
</script>
