<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Recolección de muestras del riesgo sanitario
    p(data-aos="fade-left") La recolección de muestras en riesgo sanitario es indispensable ya que debe realizarse en el tiempo oportuno, con un correcto manejo y envío al laboratorio pertinente para así dar un diagnóstico preciso de las causas de enfermedades o muertes y con base en ello, tomar asertivamente las medidas de prevención y control que vaya de acuerdo con cada enfermedad.
    p.mb-5(data-aos="fade-left") Por lo anterior, para una adecuada recolección, conservación y envío de las muestras es fundamental atender las siguientes normas: 

    .row.justify-content-center 
      .row.justify-content-center.align-items-center
        .col-lg-8.col-12
          .tarjeta.mb-2.p-4(style="background-color: #E7FFD1")
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Las muestras deben provenir de animales vivos, en distintas etapas de la enfermedad. En cadáveres la necropsia deberá ser realizada por personal capacitado, preferentemente en un lapso máximo de tres (3) horas posteriores a la muerte.
              li 
                i.fas.fa-check
                | Para estudios bacteriológicos las muestras deben colectarse en animales que no hayan sido sometidos a tratamiento, o antes de la administración de fármacos, y deberá utilizarse material y recipientes estériles.
              li 
                i.fas.fa-check
                | Dependiendo del tipo de muestra, en ocasiones será necesario emplear medios de transporte como el de Stuart, con la finalidad de conservar la viabilidad de las bacterias. Para la recogida de cualquier otro tipo de muestra es recomendable utilizar material limpio y seco.
              li 
                i.fas.fa-check
                | Los recipientes en los que se depositan las muestras para su envío al laboratorio deben ser resistentes o irrompibles, de cierre hermético y de dimensiones adecuadas al tamaño o cantidad de la muestra.
              li 
                i.fas.fa-check
                | Dependiendo del tipo de muestra, se deben tomarlas precauciones necesarias para su envío: temperatura ambiente, medio de transporte y duración del viaje (Soto,2017).
        .col-lg-4.col-12
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/1.png')
    
    p.mt-5.mb-5(data-aos="fade-left") Y se deben tener en cuenta las siguientes precauciones a la hora de la recolección y envío de las muestras:

    .row.justify-content-center.mt-5
      .col-12
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-acento-botones.p-4.col-ipad(style="background-color: #D5FFF5")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/2.svg' alt='AvatarTop')
            p.text-center(style="color:#12263F") En primer lugar, la protección del personal de agentes patógenos.
          .tarjeta.color-acento-botones.p-4.col-ipad(style="background-color: #D5FFF5")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/3.svg' alt='AvatarTop')
            p.text-center(style="color:#12263F") Protección de las muestras de la contaminación por material biológico humano.
          .tarjeta.color-acento-botones.p-4.col-ipad(style="background-color: #D5FFF5")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/4.svg' alt='AvatarTop')
            p.text-center(style="color:#12263F") Aparición en el indicio biológico de un aporte de material biológico humano ajeno al propio, lo cual puede generar una mezcla de perfiles genéticos previos, paralelos y posteriores.
          .tarjeta.color-acento-botones.p-4.col-ipad(style="background-color: #D5FFF5")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/5.svg' alt='AvatarTop')
            p.text-center(style="color:#12263F") En cuanto al previo, es aquel en el que aparece material biológico en el lugar donde posteriormente también aparecerán otros indicios.
          .tarjeta.color-acento-botones.p-4.col-ipad(style="background-color: #D5FFF5")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/6.svg' alt='AvatarTop')
            p.text-center(style="color:#12263F") En la contaminación paralela, el material genético de un individuo se mezcla con ADN de otro tipo de origen.
          .tarjeta.color-acento-botones.p-4.col-ipad(style="background-color: #D5FFF5")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/7.svg' alt='AvatarTop')
            p.text-center(style="color:#12263F") La contaminación anterior, se debe al depósito de material genético de diversos orígenes, el cual debe tener estrictos protocolos de recolección, embalaje y envío de muestras.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/8.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El Ministerio de la Protección social, Ministerio de Ambiente, Vivienda y Desarrollo Territorial expidieron la resolución número 0811 de 2008:
          br
          br
          | “Por medio de la cual se definen los lineamientos a partir de los cuales la autoridad sanitaria y las personas prestadoras, concretamente definirán en su área de influencia los lugares y puntos de muestreo para el control y la vigilancia de la calidad del agua para consumo humano en la red de distribución”.

    p.mb-5(data-aos="fade-left") De acuerdo con la anterior resolución se debe definir los lugares y los puntos de recolección de muestras en red de distribución para este caso, primero; deberán determinarse los puntos de recolección de las muestras de agua para consumo humano teniendo en cuenta:

    .row.justify-content-center 
      .col-10
        .titulo-sexto.color-acento-contenido.mt-5
          h5 Tabla 2
          span #[em Puntos de recolección]
        .tabla-a.mb-5 
          table
            caption Nota.  Adaptada del Ministerio de Protección Social Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2008).
            thead(style="background-color: #FFAE7E")
              tr
                th Puntos
                th Descripción
            tbody
              tr
                td 1. Los puntos fijos de muestreo deben localizarse.
                td 
                  li Después del componente donde terminan las tuberías de conducción se inicia la red de distribución.
                  li En el extremo de la red de distribución también debe asegurarse la calidad en el recurso hídrico.
                  li En la salida de la infraestructura ubicada en la red de distribución, la cual puede llegar a ser un riesgo de contaminación en el agua para el consumo humano, como: los tanques de almacenamiento y los sistemas de bombeo con almacenamiento en la succión.
              tr
                td 2.  Los puntos de muestreo de interés general, se localizan teniendo en cuenta el funcionamiento hidráulico del sistema de distribución de agua y sus principales componentes.
                td 
                  li En las redes de distribución sectorizadas se debe determinar al menos un punto de muestreo por cada entrada de agua al sector correspondiente.
                  li En los sectores de mayor riesgo del sistema de distribución desde el punto de vista de posible contaminación del agua para consumo humano.
                  li Distribuidos de forma uniforme a lo largo y ancho del sistema de distribución de agua.
                  li En aquellos puntos después de la mezcla del agua proveniente de las diferentes fuentes de abastecimiento o tratamiento de agua que ingresan al sistema de distribución.
                  li En aquellos puntos de abastecimiento por otros mecanismos que tienen algunas redes de distribución, tales como pilas públicas y alimentadores de carro tanques.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Técnicas de obtención de evidencias
    p.mb-5(data-aos="fade-left") Para dar paso a las técnicas de obtención de evidencias, es importante mencionar que, la tecnología que se tiene actualmente ha permitido una gran variedad de muestras en cualquier organismo, en muchos casos lo normalmente requerido es una muestra de sangre, sin embargo, pueden también analizarse muestras a través de la orina, saliva, esputo, heces, flujos, semen, tejidos corporales, entre otros.
    
    .row.justify-content-center.align-items-center
      .col-lg-4.col-12.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/9.png')
      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") El proceso de obtención de muestras puede variar ampliamente según el tipo de análisis necesario y su propósito. Algunas muestras se obtienen de manera natural del cuerpo, mientras que otras requieren procedimientos más delicados y, en ocasiones, intervenciones quirúrgicas o anestesia. Además, en algunos casos, se pueden utilizar varios tipos de muestras para un solo análisis, dependiendo de su aplicación. Por ejemplo, la glucosa se puede medir tanto en muestras de sangre como de orina.
        p(data-aos="fade-left") El tipo de muestra que se recoja dependerá en última instancia del objetivo del análisis. Por ejemplo, las muestras de orina pueden utilizarse para diagnosticar diabetes, realizar uroanálisis o detectar infecciones del tracto urinario, así como trastornos renales. En algunos casos, las muestras internas pueden obtenerse a través de la piel mediante procedimientos específicos.

    p.mb-5(data-aos="fade-left") La obtención de muestras de sangre es un procedimiento común en el ámbito de la salud y se realiza mediante técnicas mínimamente invasivas por personal médico o de laboratorio capacitado. En contraste, la obtención de muestras de tejido es un proceso más complejo y delicado que, en algunos casos, puede requerir anestesia local o incluso anestesia general, dependiendo de la naturaleza del procedimiento y las necesidades del paciente.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/10.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es esencial que los profesionales de la salud estén debidamente capacitados y conozcan los protocolos adecuados para realizar estos procedimientos de manera segura y efectiva. Además, es fundamental informar adecuadamente a los pacientes sobre el procedimiento que se llevará a cabo, los riesgos asociados y cualquier precaución que deban tomar antes y después de la obtención de la muestra.
          br
          br
          | La seguridad y el bienestar del paciente son de suma importancia en cualquier procedimiento médico, y es responsabilidad de los profesionales de la salud garantizar que se realicen de acuerdo con los estándares de calidad y seguridad establecidos.
        
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Métodos de embalaje
    .row.justify-content-center.align-items-center 
      .col-lg-4.col-12.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/11.png')
      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") El embalaje cumple un papel fundamental en la preservación y protección de las muestras de carácter sanitario, ya que contribuye a su identificación, garantiza su autenticidad y evita cualquier acceso no autorizado durante su transporte y almacenamiento. Es esencial que el proceso de recogida de muestras se realice de manera adecuada para evitar la contaminación y asegurar la integridad de los microorganismos o agentes infecciosos que se están analizando.
        p(data-aos="fade-left") Un embalaje deficiente o inadecuado puede comprometer la viabilidad de los microorganismos presentes en las muestras, lo que a su vez puede llevar a resultados incorrectos en los análisis microbiológicos. Dado que muchos de estos análisis se basan en la capacidad de crecimiento de los microorganismos, es crucial que las condiciones de recogida y transporte garanticen su supervivencia.
    .row
      .col-lg-12
        .cajon.p-4.mb-4(style="background-color: #E7FFD1")
          p Los requisitos de embalaje, etiquetado y documentación de muestras infecciosas están regulados por el #[i United Nations Committee of Experts on the Transport of Dangerous Goods] (UNCETDG). Estas normativas son fundamentales para garantizar la seguridad en el transporte y manejo de sustancias peligrosas, incluyendo las muestras infecciosas, y para prevenir accidentes que puedan poner en riesgo a las personas, los bienes y el medio ambiente. El cumplimiento de estas normativas es fundamental en el ámbito de la bioseguridad y la gestión de riesgos sanitarios.

    p.mb-5(data-aos="fade-left") El transporte de sustancias peligrosas, como las muestras infecciosas, requiere un envasado triple que consta de tres capas de protección:

    .row.justify-content-center.align-items-center
      .col-lg-10.col-12
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-md-8.mb-4.mb-md-0
              h3 Recipiente primario
              p Este es el envase interno que contiene la muestra y debe ser a prueba de filtraciones para evitar derrames. En caso de rotura o fuga, se debe utilizar material absorbente capaz de absorber todo el fluido.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/12.png')
          .row.justify-content-center.align-items-center
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/13.png')
            .col-md-8.mb-4.mb-md-0
              h3 Recipiente secundario
              p Es otro envase resistente que envuelve y protege al recipiente primario. Puede contener varios recipientes primarios, pero debe estar diseñado para contener cualquier fuga o rotura de los envases internos. También se debe utilizar suficiente material absorbente en el recipiente secundario para absorber cualquier fluido que pueda escapar.
            
          .row.justify-content-center.align-items-center
            .col-md-8.mb-4.mb-md-0
              h3 Recipiente exterior
              p los recipientes secundarios se colocan en envases exteriores de transporte que cuentan con un material amortiguador adecuado para proteger el contenido de daños físicos durante el tránsito. Los recipientes exteriores deben tener dimensiones que no sean inferiores a 10x10 cm en ninguna de sus caras. Además, deben estar marcados y etiquetados correctamente y acompañados de los documentos de envío necesarios.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/14.png')
    
    p(data-aos="fade-left") Este envasado triple garantiza la seguridad en el transporte de sustancias peligrosas y cumple con las regulaciones para prevenir accidentes y proteger a las personas, los bienes y el medio ambiente.
    p(data-aos="fade-left") A continuación, se presentan algunos ejemplos de tipos de envases y embalajes que se utilizan para el transporte de muestras o elementos químicos, junto con los tiempos establecidos para el envío:
    
    .row.justify-content-center 
      .col-10
        .titulo-sexto.color-acento-contenido.mt-5
          h5 Tabla 2
          span #[em Puntos de recolección]
        .tabla-a.mb-5 
          table
            caption Nota. Adaptada de Corporación Colombiana de investigación agropecuaria. (2021).
            thead(style="background-color: #FFAE7E")
              tr
                th Tipo de análisis
                th Tipo de empaque
                th Tipo de embalaje
                th Tiempo de envío
            tbody
              tr
                td Químico para carne: perfil lipídico.
                td Las muestras deben estar empacadas en bolsas resellables y refrigeradas.
                td Las muestras deben estar en neveras de plástico o icopor, con hielo o pilas refrigerantes, desde el muestreo en campo hasta que llegue al laboratorio.
                td Se recomienda enviar las muestras en el menor tiempo posible, una vez realizado el muestreo. Si no es posible realizar el envío, congelar la muestra y mantenerla a temperatura inferior a -20 °C hasta el envío. Cuando se transporten muestras desde otros centros de investigación, estimar que no pasen más de tres (3) días en el recorrido (transporte terrestre o aéreo).
              tr
                td Bromatológico para carne y productos cárnicos: humedad, grasa cruda, ceniza total y proteína cruda.
                td Las muestras deben estar empacadas en bolsas resellables tipo Ziploc®, refrigeradas o congeladas. Para proteger la información de la muestra, cubrir la etiqueta con cinta transparente o reempacar la muestra en otra bolsa y ubicar la etiqueta en medio de ambas.
                td Las muestras deben transportarse en neveras de plástico o icopor, con hielo o pilas refrigerantes, desde el muestreo en campo hasta que llegue al laboratorio.
                td Se recomienda enviar las muestras en el menor tiempo posible, una vez realizado el muestreo. Si no es posible realizar el envío, congelar la muestra y mantenerla a temperatura inferior a -18 °C hasta el envío. El tiempo máximo de congelación entre la toma de muestra y el envío al laboratorio no debe ser superior a dos (2) meses. Cuando se transporten muestras desde otros centros de investigación, estimar que no pasen más de tres (3) días en el recorrido (transporte terrestre o aéreo).
              tr
                td Químico para cacao: cadmio y perfil lipídico.
                td Cada muestra debe ir empacada, preferiblemente en bolsa resellable. La muestra debe estar seca y a temperatura ambiente.
                td Las muestras pueden colocarse en cajas, lonas, bolsas plásticas, neveras de icopor o plástico.
                td Si las muestras están frescas, estas pueden llegar al laboratorio máximo cuatro (4) días después de ser tomadas en campo. Si son muestras secas, estas pueden llegar hasta ocho (8) días después de ser tomadas en campo.
              tr
                td Químico para papafenoles, ácido clorogénico, solanina y compuestos antioxidantes (FRAP, DPPH+, ORAC, ABTS).
                td Cada muestra debe ir empacada, preferiblemente en bolsa resellable. Si la papa viene entera puede llegar refrigerada o congelada, pero si ya está picada, debe llegar congelada. Se puede enviar con o sin cáscara, dependiendo del objetivo de la investigación.
                td Las muestras deben estar en neveras de plástico o icopor, con hielo o pilas refrigerantes, desde el muestreo en campo hasta que llegue al laboratorio.
                td Se recomienda enviar las muestras en el menor tiempo posible, una vez realizado el muestreo. Si no es posible realizar el envío, congelar la muestra y mantenerla a temperatura inferior a -20 °C hasta el envío. Cuando se transporten muestras desde otros centros de investigación, estimar que no pasen más de 3 días en el recorrido (transporte terrestre o aéreo).
              tr
                td Químico para panela: Análisis básico LQA.
                td Se recomienda enviar las muestras de Panela de forma inmediata posterior a su elaboración en bolsas de polipropileno biorientado, nuevas, sin olores o agentes extraños no programados, bien rotuladas y cerradas para evitar la ganancia de humedad.
                td Se recomienda el uso de cajas de cartón resistentes.
                td El tiempo de envío depende del objetivo de la investigación.
              tr
                td Químico para jugo de caña: caña panelera, análisis básico de jugos.
                td Se recomienda enviar las muestras en recipientes PET para alimentos con tapa rosca y capacidad de mínimo 300 ml, bien rotulados (asegurar una identificación resistente a su descongelación).
                td Las muestras deben estar en neveras de plástico o icopor, con hielo o pilas refrigerantes, desde la molienda hasta que llegue al laboratorio. Asegurando la temperatura de almacenamiento -20 ° C.
                td La muestra debe llegar lo más pronto posible posterior a su extracción, para así evitar la fermentación. Si no es posible realizar el envío, congelar la muestra y mantenerla a temperatura inferior a -20 °C hasta el envío.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3 Tipos de custodia de la muestra

    p(data-aos="fade-left") Una cadena de custodia en muestras biológicas es un procedimiento esencial para garantizar que las muestras se manejen, transporten y almacenen de manera adecuada, preservando su identidad e integridad. Esto es especialmente importante cuando se trata de muestras biológicas que pueden representar riesgos para la salud humana, como muestras de sangre, tejido o fluidos corporales.
    p(data-aos="fade-left") La cadena de custodia implica un registro detallado de todas las personas que entran en contacto con la muestra, desde el momento de su recolección hasta su análisis final. Esto ayuda a establecer un rastro claro de quién ha tenido acceso a la muestra en todo momento y garantiza que no haya contaminación o alteración durante el proceso.
    p.mb-5(data-aos="fade-left") La custodia de las muestras, debe garantizar las siguientes  etapas:

    .row.justify-content-center.mt-5
      .col-12
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-acento-botones.p-4.col-ipad(style="background-color: #D5FFF5")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/15.svg' alt='AvatarTop')
            H2.text-center(style="color:#12263F") 1
            p.text-bold.text-center(style="color:#12263F") Extracción y recolección de indicios
          .tarjeta.color-acento-botones.p-4.col-ipad(style="background-color: #D5FFF5")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/16.svg' alt='AvatarTop')
            H2.text-center(style="color:#12263F") 2
            p.text-bold.text-center(style="color:#12263F") Preservación y embalaje de la prueba.
          .tarjeta.color-acento-botones.p-4.col-ipad(style="background-color: #D5FFF5")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/17.svg' alt='AvatarTop')
            H2.text-center(style="color:#12263F") 3
            p.text-bold.text-center(style="color:#12263F") Preservación y embalaje de la prueba.
          .tarjeta.color-acento-botones.p-4.col-ipad(style="background-color: #D5FFF5")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/18.svg' alt='AvatarTop')
            H2.text-center(style="color:#12263F") 4
            p.text-bold.text-center(style="color:#12263F") Transporte y traslado de la prueba al laboratorio.
          .tarjeta.color-acento-botones.p-4.col-ipad(style="background-color: #D5FFF5")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/19.svg' alt='AvatarTop')
            H2.text-center(style="color:#12263F") 5
            p.text-bold.text-center(style="color:#12263F") Respuestas de las pruebas a la autoridad judicial.
    
    .row.justify-content-center
      .col-10.desktop
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          span #[em Esquema de evidencias]
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/20.svg' alt='En la figura 3 se muestra el esquema que se debe tener en cuenta a la hora de recolectar evidencias.')
    .row.justify-content-center 
      .col-12.movil
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          span #[em Esquema de evidencias]
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/21.svg' alt='En la figura 3 se muestra el esquema que se debe tener en cuenta a la hora de recolectar evidencias.')
          

</template>

<script>
export default {
  name: 'Tema2',
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
