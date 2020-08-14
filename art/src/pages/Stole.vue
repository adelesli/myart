<template>
  <div >
    <Family :family="family"></Family>
  </div>
</template>

<script>
import Family from '../components/Family'

export default {
  name: 'Stole',

  components: {
    Family
  },
  data () {
    return {
      family: 'Stole'
    }
  }
}
</script>
