export default {
  global: {
    componenteFormativo: 'Obtención de evidencia de riesgos sanitarios',
    descripcionCurso:
      'Toda la gestión de riesgos es una metodología que se utiliza cada vez más en todos aquellos servicios sanitarios aplicando el proceso de inspección, vigilancia y control. Obtener evidencia de riesgos sanitarios es fundamental, ya que incrementa a nivel general la calidad de la asistencia, mejora la seguridad y salud de los pacientes e incluso de los trabajadores sanitarios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Bioseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Protocolos de bioseguridad para toma de muestras',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Elementos de protección individual',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recolección de muestras del riesgo sanitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de obtención de evidencias',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Métodos de embalaje',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipos de custodia de la muestra',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Reporte de hallazgos de evidencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características y tipos de contaminantes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas de captura',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Diligenciamiento y procesamiento de datos',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar pdf',
        download: 'downloads/CFA_03_231100.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Bioseguridad',
      referencia: 'Canal 44 (2020). ¿Qué es la bioseguridad? [Vídeo]. YouTube.',
      tipo: 'Video de YouTube',
      link: 'https://www.youtube.com/watch?v=144NCoIA0MQ&t=2s',
    },
    {
      tema: 'Protocolo de bioseguridad para toma de muestras',
      referencia:
        'Herrera, G. (2021). Protocolo de bioseguridad para la toma de muestras de casos sospechosos de enfermedades SARS-COV2 en los Centros de Atención Médica.',
      tipo: 'Pdf',
      link:
        'https://conexion.colsanitas.com/conexion/documents/10183/332014/PROTOCOLO+DE+BIOSEGURIDAD+PARA+LA+TOMA+DE+MUESTRAS+DE+CASOS+SOSPECHOSOS+DE+ENFERMEDAD+SARS+COV2+EN+LOS+CENTROS+DE+ATENCI%C3%93N+MEDICA.pdf/661fa4f9-23be-4c5b-8454-bd12dccc4c44',
    },
    {
      tema: 'Manual para la toma de muestras para análisis microbiológico',
      referencia:
        'González Cuéllar, M. P. (2008). Manual para la toma de muestras para análisis microbiológico. Secretaría Distrital de Salud de Bogotá, D. C. Dirección de Salud Pública.',
      tipo: 'Pdf',
      link:
        'http://www.saludcapital.gov.co/sitios/VigilanciaSaludPublica/Todo%20IIH/Manual%20Toma%20Muestras.pdf',
    },
    {
      tema: 'Tipos de custodia de la muestra',
      referencia:
        'Centro Argentino de Capacitación Forense. (2021). Charla «Cadena de Custodia en Muestras Biológicas» - Criminalística. [Vídeo]. YouTube.',
      tipo: 'Video de YouTube',
      link: 'https://www.youtube.com/watch?v=JBYkQZZuhEk',
    },
  ],
  glosario: [
    {
      termino: 'Asepsia',
      significado:
        'Es aquel hecho de prevenir enfermedades infecciosas, con el fin de mitigar o impedir la contaminación por bacterias, microbios, parásitos u otros gérmenes en un área determinada. Su objetivo es reducir la proliferación de agentes patógenos y la transmisión de virus.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Es un enfoque estratégico e integrado para analizar y gestionar los riesgos relevantes para la vida y la salud humana, animal y vegetal y los riesgos asociados para el medio ambiente. Se basa en el reconocimiento de los vínculos críticos entre sectores y en la posibilidad de que las amenazas se muevan dentro de los sectores y entre ellos con consecuencias para todo el sistema (Iberdrola,2022).',
    },
    {
      termino: 'Bromatológico',
      significado:
        'Ciencia orientada al estudio de los alimentos y así mismo, a la profundidad de cada sustancia que se ingiere a través de los alimentos y su consecuencia en el ser humano.',
    },
    {
      termino: 'Embalaje',
      significado:
        'Son todos aquellos conjuntos de materiales que envuelven, dan soporte y protección al indicio o al material probatorio de carácter sanitario en este caso, con el fin de identificarlos, garantizar su autenticidad y reconocer el acceso no autorizado durante su traslado y almacenamiento respectivo. El embalaje igualmente es un refuerzo del empaque que está pensado en la manipulación, transporte y almacenamiento del indicio.',
    },
    {
      termino: 'Evidencia biológica',
      significado:
        'La evidencia biológica en la ciencia forense que incluye materiales orgánicos, tales como sangre, semen, cabello, saliva y tejido de la piel, entre otros.',
    },
    {
      termino: 'Gestión de riesgos',
      significado:
        'Es aquel proceso que analiza los procesos y las prácticas vigentes, identifica los factores de riesgo y establece procedimientos para abordar los riesgos identificados.',
    },
    {
      termino: 'Protocolo',
      significado:
        'Son aquellos lineamientos que sirven para orientar a cualquier tipo de persona frente a las medidas requeridas para mitigar la transmisión de algún virus o enfermedad.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Es todo aquello que puede provocar una pérdida o resultado inesperado. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Aroca, A. (2017). Modelo para la inspección, vigilancia y control sanitario con enfoque de riesgos en Colombia. SciELO - Salud Pública - Modelo para la inspección, vigilancia y control sanitario con enfoque de riesgos en Colombia Modelo para la inspección, vigilancia y control sanitario con enfoque de riesgos en Colombia (scielosp.org)',
      link: '',
    },
    {
      referencia:
        'Cavsi. (s.f). ¿Qué es el procesamiento de datos?. ¿Qué es procesamiento de datos? - CAVSI',
      link: '',
    },
    {
      referencia:
        'González Cuéllar, M. P. (2008). Manual para la toma de muestras para análisis microbiológico. Secretaría Distrital de Salud de Bogotá, D. C. Dirección de Salud Pública.',
      link:
        'http://www.saludcapital.gov.co/sitios/VigilanciaSaludPublica/Todo%20IIH/Manual%20Toma%20Muestras.pdf',
    },
    {
      referencia:
        'Iberdrola. (2022). La bioseguridad: fundamental en la lucha contra las pandemias. ¿Qué es la Bioseguridad y por qué es tan importante? - Iberdrola',
      link: '',
    },
    {
      referencia:
        'Larotonda, G. (s.f.). Bioseguridad en la toma de muestras para laboratorio. BIOSEGURIDAD-Y-BUENAS-PRACTICAS-EN-REMISION-DE-MUESTRAS.pdf (uba.ar)',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lizeth Daniela Reinoso Diaz',
          cargo: 'Experta temática',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Diego Acevedo Guevara',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Santander - Centro de la Industria, la Empresa y los Servicios – CIES',
        },
        {
          nombre: 'Silvia Milena Sequeda ',
          cargo: 'Asesora metodológica',
          centro: 'Regional Distrito Capital -  Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodriguez Pérez',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jaslyth Juliana Eraso Casanova ',
          cargo: 'Experta Temática',
          centro:
            'Regional Putumayo - Centro Agroforestal y Acuícola Arapaima.',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Briceño Vera',
          cargo: 'Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Produccióon audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
