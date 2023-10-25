<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Bioseguridad
    p(data-aos="fade-left") La bioseguridad engloba un conjunto de medidas, protocolos y, en algunos casos, normativas que se implementan en diversos procedimientos con el propósito de prevenir riesgos o infecciones asociados a la exposición a agentes infecciosos o sustancias que conllevan riesgos biológicos, químicos o físicos que podrían ser significativos para la salud humana. Estas medidas tienen como objetivo primordial proteger la vida y la salud de las personas, así como prevenir la propagación de enfermedades y minimizar la exposición a peligros potenciales en entornos donde se manejan materiales o sustancias que representan un riesgo para la seguridad biológica, química o física. La bioseguridad es fundamental en una variedad de sectores, incluyendo la salud, la investigación científica, la agricultura y la industria, entre otros, y abarca desde prácticas básicas de higiene hasta la implementación de protocolos más complejos y especializados para garantizar la seguridad de las personas y el entorno en el que trabajan.
    p.mb-5(data-aos="fade-left") A continuación, se profundizará en los siguientes aspectos:

    .tarjeta.tarjeta--azul.p-4.mb-5(style="background-color: #EEFFDE")(data-aos="flip-up")
      h4.titulo-cuarto 
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Norma de Bioseguridad
            p Según la Organización Mundial de la Salud (OMS): "la bioseguridad es un enfoque estratégico e integrado para analizar y gestionar los riesgos relevantes para la vida y la salud humana, animal y vegetal y los riesgos asociados para el medio ambiente”
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/1.jpg')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Medidas y protocolos.
            li El buen manejo de residuos especiales.
            li El almacenamiento de sustancias peligrosas o radioactivas.
            li El uso de barreras protectoras.
            li que aseguren el bienestar y la seguridad de todos.
            li Conocimiento y apliación de normas.
            li Aplicación adecuada de procedimientos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/2.jpg')
              
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Riesgo biológico
            p Son agentes y materiales que tienen el potencial de ser transmitidos a cualquier forma de vida, lo que incluye bacterias, virus, hongos y parásitos, y que pueden causar enfermedades en consecuencia. Estos riesgos biológicos representan una amenaza para la salud y la seguridad de las personas y requieren medidas de prevención y control adecuadas para evitar la propagación de enfermedades.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/3.jpg')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Biocontención
            p Es un conjunto de medidas implementadas con el fin de prevenir la liberación o escape de enfermedades infecciosas desde centros de investigación, laboratorios u otros lugares donde puedan originarse este tipo de infecciones. Estas medidas son fundamentales para garantizar la seguridad tanto de las personas que trabajan en estos lugares como del público en general, evitando la propagación de enfermedades peligrosas.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/4.jpg')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Bioprotección
            p Es el conjunto de medidas o protocolos destinados a reducir en lo más posible la pérdida, robo, uso inadecuado e incluso liberación de patógenos y toxinas que están contenidas en algunas instalaciones, almacenamientos, bodegas, materiales, entre otros.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/5.jpg')

    p(data-aos="fade-left") La bioseguridad tiene una amplia gama de aplicaciones en diversos campos, principalmente en entornos donde existe el riesgo de exposición a agentes biológicos, como microorganismos patógenos. Algunas de las aplicaciones más comunes de la bioseguridad incluyen:

    .row.justify-content-center 
      .col-12
        .titulo-sexto.color-acento-contenido.mt-5
          h5 Tabla 1
          span #[em Aplicaciones de la bioseguridad]
        tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            h4.mb-0(style="color: #000000") Aplicaciones de la bioseguridad
          table
            tr
              th.text-center En la alimentación
                 figure.mt-5(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema1/6.svg',height="100", width="100")
              td Se tiene en cuenta el buen manejo de alimentos, la conservación de la salubridad, al igual que las buenas prácticas alimentarias que pueden llegar a reducir gran cantidad de problemas nutricionales y de transmisión de microorganismos patógenos y sus vectores por la alimentación.
            tr
              th.text-center En la agricultura y ganadería
                 figure.mt-5(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema1/7.svg',height="100", width="100")
              td Todas las personas involucradas en actividades agrícolas o ganaderas están, directa o indirectamente, vinculadas a la transmisión de agentes patógenos, esto debido al gran avance que ha tenido el sector y que ha hecho que exista un mayor riesgo de transmisión de enfermedades por el movimiento continuo de animales, vehículos de transporte, personal, entre otros.
            tr
              th.text-center En el medio ambiente
                 figure.mt-5(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema1/8.svg',height="100", width="100")
              td En el campo del medio ambiente, se encarga de las plagas vegetales, las plagas y enfermedades animales, las zoonosis; es decir aquellas enfermedades que se transmiten de animales a humanos, de los organismos genéticamente modificados y sus productos, y de la gestión de genotipos y especies exóticas invasoras.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Protocolos de bioseguridad para toma de muestras
    
    .row.justify-content-center.align-items-center 
      .col-lg-4.col-12.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/9.png')
      .col-lg-8.col-12
        p(data-aos="fade-left") Realizar un diagnóstico de las enfermedades que afectan a las diferentes especies de vida es de vital importancia para poder dar una solución rápida con medidas de prevención y control.
        p(data-aos="fade-left") El resultado de un análisis de laboratorio para confirmar la sospecha de alguna enfermedad está relacionado con la calidad de las muestras remitidas para dicho diagnóstico.
        p(data-aos="fade-left") Partiendo de esto, la persona encargada debe ser responsable de la selección, recolección, prevención, el envío adecuado de las muestras y en general de todas aquellas pautas básicas de extracción y manipulación de las mismas, con el propósito de minimizar cualquier tipo de enfermedad infecciosa en esta logística.

    .row.justify-content-center.align-items-center
      .col-lg-7.col-12.mb-0.text-small
        .tarjeta.mb-3.p-4(style="background-color: #D5FFF5")
          p.text-bold Cada una de las muestras debe contener obligatoriamente los siguientes datos:
          ol.lista-ol.lista-ol
            li 
              span.text-bold a. 
              | Nombre, dirección, teléfono, e-mail o fax del veterinario que tomó la muestra.
            li 
              span.text-bold b. 
              | Nombre, dirección, teléfono, e-mail o fax del propietario.
            li 
              span.text-bold c. 
              | Descripción de los animales muestreados: especie, raza, sexo, edad, estado fisiológico y nutricional; cada muestra con un número o identificación individual.
            li 
              span.text-bold d. 
              | Descripción de las condiciones de extracción de la muestra.
            li 
              span.text-bold e. 
              | Se debe incluir una breve historia clínica. Tratamientos, resultados obtenidos y vacunas aplicadas.
            li 
              span.text-bold f. 
              | Diagnóstico presuntivo.
            li 
              span.text-bold g. 
              | Pruebas o estudios solicitados (Larotonda, s.f.).
      .col-lg-5.col-12.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/10.png')

    .row 
      p(data-aos="fade-left") Además, identificar los protocolos de bioseguridad para la toma de muestras permite la seguridad del personal que participará en dicha toma, manejo, embalaje y transporte de muestras para cualquier tipo de casos sospechosos, esto con el propósito de minimizar los riesgos que puedan provocar en el personal de trabajo de la salud y la dispersión o pérdida de agentes patógenos fuera de las áreas de contención que deben estar.
      p(data-aos="fade-left") A continuación, se muestran los aspectos a tener en cuenta con diferentes equipos de protección personal, insumos y protocolos necesarios para la toma de muestras:

    .row.justify-content-center 
      .col-10.desktop
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span #[em Equipo de protección personal]
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/11.svg' alt='En la figura 1 se muestra el equipo de protección personal adecuado para la toma de muestras.')
    .row.justify-content-center 
      .col-12.movil
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span #[em Equipo de protección personal]
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/12.svg' alt='En la figura 1 se muestra el equipo de protección personal adecuado para la toma de muestras.')

    .row.justify-content-center.mt-5
      .col-lg-2.col-8
        .tarjeta.tarjeta-1.p-2.mb-4.color-acento-contenido(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-10.text-center
              h3(data-aos="fade-left")(style="color:#000000") Insumos

    .row.justify-content-center.align-items-center
      .col-lg-3.col-8
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/13.svg')
      .col-lg-7.col-12
        li Hisopos de dacrón nasofaríngeos y orofaríngeos.
        li Medio de transporte viral.
        li Bolsa de polipapel para autoclave.
        li Bolsa roja de plástico traslúcido para residuos peligrosos biológico-infecciosos, de calibre 200.
        li Sistema de triple embalaje.
        li Contenedor hermético para el traslado de los residuos embalados.
        li Insumos para higiene de manos.
        li Insumos para limpieza.
    
    
    .row.justify-content-center.mt-5
      .tarjeta.mb-3.p-4(style="background-color: #E7FFD1")
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12
            .tarjeta.tarjeta-1.p-2.mb-4.color-acento-contenido(data-aos="flip-up")
              .row.justify-content-center.align-items-center
                .col-lg-10.text-center
                  h3(data-aos="fade-left")(style="color:#000000") Protocolo a seguir en la obtención de muestras primarias
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Lavado de manos antes y después de colocarse los guantes.
              li 
                i.fas.fa-check
                | Con guantes colocados se deberá evitar tocar objetos comunes, tales como: llaves de luz, sillones, manijas de puertas, ropa, entre otros elementos que puedan generar algún tipo de contaminación al tacto.
              li 
                i.fas.fa-check
                | Mantener el cabello recogido.
              li 
                i.fas.fa-check
                | Al terminar las tareas, se quitará los guantes lavándose las manos con jabón antibacterial, proceder a secarlas y luego frotar las mismas con alcohol de 70°.
              li 
                i.fas.fa-check
                | Al terminar la tarea de extracciones, se deberá repasar las superficies de mesadas con solución de hipoclorito de sodio 10 %.
              li 
                i.fas.fa-check
                | Por último, se sacarán los guantes y serán tratados como residuos patogénicos en bolsa roja, y se lavarán las manos con jabón cremoso.
          .col-lg-4.col-12
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/14.svg')
        
        .row.justify-content-center.align-items-center.mt-2
          .col-lg-12.col-12
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Se deberán contar con contenedores para agujas, jeringas, y material presuntamente patogénico (gasas, algodones) en bolsas o tarros especiales para el retiro de residuos patogénicos con el fin de que los desechos y residuos biológicos sean manejados bajo los estándares y políticas de residuos establecidos en la normatividad legal vigente.
              li 
                i.fas.fa-check
                | Para complementar este tema, en el apartado de material complementario, está adjunto un pdf que muestra todo el protocolo de bioseguridad a seguir para la toma de muestras de casos sospechosos de enfermedades SARS – COV 2- en los centros de atención médica.
              
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Elementos de protección individual
    p(data-aos="fade-left") Es necesario que el personal haga uso de Elementos de Protección Individual (EPI), estos elementos son recursos que se utilizan para ofrecer cuidado y seguridad a los trabajadores que desempeñan labores dentro de cualquier organización, en este caso para los encargados de la manipulación de muestras o el contacto con agentes infecciosos.

    .row.justify-content-center.align-items-center 
      .col-lg-4.col-12.mb-2
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/15.png')
      .col-lg-8.col-12
        .cajon.p-4.mb(style="background-color: #E7FFD1")
          p(data-aos="fade-left") Es muy importante que estos trabajadores hagan uso de estos elementos ya que evitan poner a la persona en situaciones de riesgo y también prevenir accidentes que pueden perjudicar a las partes involucradas e incluso tratándose de enfermedades, pueden llegar a perjudicar a toda la población. Así mismo, entre los objetivos del uso de los elementos de protección individual, están: la protección, el control de riesgo y el fomento del desarrollo laboral; este último es indispensable ya que cada trabajador debe exigir a su empleador la dotación precisa de los implementos que requiera para cumplir su labor e igualmente, cada empleador tiene la obligación de suministrar las herramientas necesarias al personal que así lo requiera.

    .row.justify-content-center.mt-5
      .col-10.desktop
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span #[em Objetivos de los elementos de protección personal]
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/16.svg' alt='En la figura 2 se muestran los diferentes tipos de elementos de protección personal, dependiendo del objetivo que cada uno de ellos tiene.')
    .row.justify-content-center 
      .col-12.movil
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span #[em Objetivos de los elementos de protección personal]
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/17.svg' alt='En la figura 2 se muestran los diferentes tipos de elementos de protección personal, dependiendo del objetivo que cada uno de ellos tiene.')
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
