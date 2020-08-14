<template>
  <div >
    <Family :family="family"></Family>
  </div>
</template>

<script>
import Family from '../components/Family'

export default {
  name: 'Jackson',

  components: {
    Family
  },
  data () {
    return {
      family: 'Jackson'
    }
  }
}
</script>
