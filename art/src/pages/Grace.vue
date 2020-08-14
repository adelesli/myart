<template>
  <div >
    <Family :family="family"></Family>
  </div>
</template>

<script>
import Family from '../components/Family'

export default {
  name: 'Grace',

  components: {
    Family
  },
  data () {
    return {
      family: 'Grace'
    }
  }
}
</script>
