<template>
  <div >
    <Family :family="family"></Family>
  </div>
</template>

<script>
import Family from '../components/Family'

export default {
  name: 'All',

  components: {
    Family
  },
  data () {
    return {
      family: '*'
    }
  }
}
</script>
