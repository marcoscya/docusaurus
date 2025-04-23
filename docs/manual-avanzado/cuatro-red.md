---
sidebar_position: 4
---

# Network (Red)

La pestaña Network es una herramienta fundamental dentro del Inspector de Elementos que te permite visualizar y analizar todas las peticiones HTTP que realiza una página web hacia el servidor y viceversa. Aquí puedes monitorear cómo se cargan los recursos, detectar problemas de rendimiento y errores en las solicitudes.

En esta sección explicaremos cada parte importante de la pestaña Network para que puedas aprovechar al máximo sus funcionalidades.

## Registro de peticiones HTTP

La pestaña Network muestra en tiempo real todas las solicitudes que la página hace para obtener recursos como archivos HTML, CSS, JavaScript, imágenes, fuentes, y datos de APIs. Cada petición aparece con detalles como el método (GET, POST, etc.), el estado de la respuesta, el tamaño y el tiempo que tardó en completarse.

## Recarga y captura de tráfico

Para ver todas las peticiones desde el inicio de la carga de la página, es habitual abrir la pestaña Network y luego recargar la página. Esto permite capturar y analizar cada recurso solicitado durante la carga, ayudando a identificar cuáles ralentizan el sitio o fallan al cargar.

## Filtros y búsqueda

Puedes filtrar las peticiones por tipo (documentos, scripts, imágenes, fuentes, etc.) o buscar peticiones específicas por nombre o URL. Esto facilita encontrar recursos concretos en registros muy extensos.

## Detalles de cada petición

Al seleccionar una petición, puedes ver información detallada como:

- Encabezados HTTP enviados y recibidos
- Carga útil (payload) y parámetros enviados
- Respuesta del servidor, incluyendo el contenido recibido
- Tiempos de conexión, envío, espera y descarga
- Cookies asociadas a la petición

## Análisis de rendimiento

La pestaña Network ofrece gráficos visuales que muestran el tiempo que tarda cada recurso en cargarse, ayudando a detectar cuellos de botella o recursos pesados que afectan la velocidad de la página.

## Simulación de condiciones de red

Puedes simular conexiones lentas o inestables (como 3G o conexiones con alta latencia) para probar cómo se comporta tu sitio en diferentes condiciones de red, lo que es útil para optimizar la experiencia en dispositivos móviles o redes pobres.

## Uso práctico de Network

- Diagnosticar problemas de carga y errores en recursos.
- Optimizar tiempos de carga identificando archivos pesados o lentos.
- Verificar el correcto funcionamiento de APIs y solicitudes AJAX.
- Probar el comportamiento del sitio bajo diferentes condiciones de red.

_La pestaña Network es una herramienta imprescindible para desarrolladores y especialistas en rendimiento web, ya que brinda una visión completa y detallada del tráfico entre el navegador y el servidor, facilitando la mejora continua de la experiencia del usuario_.
