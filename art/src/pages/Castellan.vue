<template>
  <div >
    <Family :family="family"></Family>
  </div>
</template>

<script>
import Family from '../components/Family'

export default {
  name: 'Castellan',

  components: {
    Family
  },
  data () {
    return {
      family: 'Castellan'
    }
  }
}
</script>
