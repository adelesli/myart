<template>
  <div >
    <Family :family="family"></Family>
  </div>
</template>

<script>
import Family from '../components/Family'

export default {
  name: 'Solace',

  components: {
    Family
  },
  data () {
    return {
      family: 'Solace'
    }
  }
}
</script>
