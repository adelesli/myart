<template>
  <div >
    <ArtPiece :name="name"></ArtPiece>
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
      name: 'Happy'
    }
  }
}
</script>
