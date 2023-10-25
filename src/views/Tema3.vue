<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Reporte de hallazgos de evidencias
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1 Características y tipos de contaminantes

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2 Técnicas de captura

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3 Diligenciamiento y procesamiento de datos

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
