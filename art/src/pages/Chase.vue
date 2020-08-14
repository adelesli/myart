<template>
  <div >
    <Family :family="family"></Family>
  </div>
</template>

<script>
import Family from '../components/Family'

export default {
  name: 'Chase',

  components: {
    Family
  },
  data () {
    return {
      family: 'Chase'
    }
  }
}
</script>
