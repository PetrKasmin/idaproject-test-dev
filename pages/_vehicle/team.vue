<template>
    <p v-if="vehicle" class="info-text">{{ vehicle.term_text }}</p>
</template>

<script>
export default {
  props: ['vehicle']
}
</script>
