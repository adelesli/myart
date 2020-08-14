<template>
  <div >
    <Family :family="family"></Family>
  </div>
</template>

<script>
import Family from '../components/Family'

export default {
  name: 'Atkins',

  components: {
    Family
  },
  data () {
    return {
      family: 'Atkins'
    }
  }
}
</script>
