<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p A continuación, se describe el tema principal del componente formativo Obtención de evidencia de riesgos sanitarios en lo que se debe dar claridad al aprendiz de que cualquier tipo de empleador debe capacitar y entrenar a su personal de cualquier tipo de riesgo en el que se pueda incurrir por la manipulación sea de alimentos, animales, muestras infecciosas, toma de pruebas, y el empleado debe tener responsabilidad colectiva de cada uno de los protocolos necesarios para no afectar la vida de otros seres vivos, e incluso el ambiente, ellos deben usar de manera adecuada los equipos, herramientas, materiales, dispositivos de seguridad, que contribuyan al cumplimiento de las obligaciones sobre las normas de seguridad e higiene.
    p.mb-5 Es importante que se elabore un plan de seguridad, normas y estrategias correctas de manipulación, obtención y procesamiento de las muestras, con el fin de gestionar adecuadamente la recogida, almacenamiento, y envío de residuos que se originan en enfermos infecciosos.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se desarrollan los temas principales del componente formativo, entre ellos: Bioseguridad, recolección y reportes de evidencias.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
