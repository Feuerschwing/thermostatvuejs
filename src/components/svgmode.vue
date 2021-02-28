<template>
  <div>
    <img  v-if="this.$store.state.mode === 'Mode Confort'" src="@/assets/insideSvg.svg"  alt="inside svg"/>
    <img  v-if="this.$store.state.mode === 'Mode Nuit'" src="@/assets/night.svg"  alt="night svg"/>
    <img  v-if="this.$store.state.mode === 'Mode Travail'" src="@/assets/outside.svg"  alt="outside svg"/>
  </div>
</template>

<script>
export default {
name: "svgmode"
}
</script>

<style scoped>

</style>