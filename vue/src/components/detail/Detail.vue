<template>
    <div class="detail">
        Detail
        <Stars/>
    </div>
</template>

<script>
import Stars from '../stars/Stars.vue'

export default {
  name: 'Detail',
  components: {
    Stars,
  },
}
</script>

<style>
    .detail {
        background-color: #ffff00;
        margin: auto;
        width: 400px;
    }
</style>