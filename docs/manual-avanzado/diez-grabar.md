---
sidebar_position: 10
---

# Recorder(Grabar)

La pestaña Recorder (Grabadora) en Chrome DevTools es una herramienta integrada que permite grabar, reproducir y medir flujos de usuario directamente desde el navegador. Esta funcionalidad facilita la creación de pruebas automatizadas y el análisis del comportamiento de las interacciones en una página web.

En esta sección explicaremos cada parte importante de la pestaña Recorder para que puedas sacarle el máximo provecho.

## Grabación de flujos de usuario

La herramienta permite registrar las acciones que realiza un usuario en la página, como clics, navegación entre páginas, entrada de texto y otros eventos. Esto genera un flujo detallado que refleja el recorrido y las interacciones del usuario.

## Reproducción de grabaciones

Una vez grabado un flujo, puedes reproducirlo para verificar que las acciones se ejecuten correctamente y que el comportamiento sea consistente. Esto es útil para pruebas de regresión o para validar funcionalidades sin intervención manual.

## Medición del rendimiento

Durante la grabación y reproducción, Recorder mide el tiempo que toma cada paso o acción, lo que ayuda a identificar cuellos de botella o pasos lentos en el flujo de usuario.

## Edición y exportación

Puedes editar los flujos grabados para ajustar o corregir pasos, y luego exportarlos en formatos como JSON o scripts compatibles con herramientas de automatización como Puppeteer o WebdriverIO. Esto facilita integrar las grabaciones en suites de pruebas automatizadas.

## Acceso y uso

Para abrir Recorder:

- Abre las Herramientas para desarrolladores (Ctrl+Shift+I o Cmd+Option+I).
- Haz clic en el menú de tres puntos > Más herramientas > Grabadora.
- Desde ahí puedes iniciar una nueva grabación, detenerla, reproducirla, editarla o exportarla.

## Extensiones y personalización

Chrome ofrece una API (chrome.devtools.recorder) para extender la funcionalidad del panel Recorder, permitiendo crear plugins que personalicen la exportación o la reproducción de grabaciones, adaptándolas a necesidades específicas.

## Uso práctico de Recorder

- Automatizar pruebas funcionales sin necesidad de escribir código manualmente.
- Validar flujos de usuario repetitivos para asegurar consistencia.
- Medir tiempos de respuesta y rendimiento en interacciones clave.
- Exportar grabaciones para integrarlas en frameworks de testing.

_La pestaña Recorder es una herramienta poderosa y accesible que simplifica la creación y gestión de pruebas automatizadas, ayudando a desarrolladores y testers a mejorar la calidad y estabilidad de sus aplicaciones web_.
