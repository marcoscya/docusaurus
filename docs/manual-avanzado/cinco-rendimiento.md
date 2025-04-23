---
sidebar_position: 5
---

# Rendimiento

La pestaña Performance es una herramienta avanzada del Inspector de Elementos que te permite analizar en profundidad el rendimiento de una página web. Aquí puedes grabar y examinar la actividad del navegador mientras la página se carga o interactúas con ella, identificando cuellos de botella y áreas que pueden optimizarse para mejorar la velocidad y la experiencia del usuario.

En esta sección explicaremos cada parte importante de la pestaña Performance para que puedas sacarle el máximo provecho.

## Grabación de rendimiento

La pestaña Performance te permite iniciar una grabación que captura toda la actividad del navegador durante un periodo determinado. Esto incluye la carga de recursos, ejecución de scripts, renderizado, repintados y eventos de usuario. La grabación genera una línea de tiempo detallada que puedes analizar posteriormente.

## Línea de tiempo (Timeline)

La línea de tiempo muestra visualmente todas las operaciones que realiza el navegador, organizadas en categorías como scripting, rendering, painting y otros procesos internos. Esto te ayuda a identificar qué tareas consumen más tiempo y afectan el rendimiento general.

## Análisis de frames y FPS

Puedes ver el rendimiento de los frames por segundo (FPS) durante la grabación, lo cual es crucial para detectar caídas de rendimiento que afectan la fluidez de animaciones o interacciones.

## Call Stack y eventos

Cuando seleccionas una sección específica de la grabación, puedes examinar la pila de llamadas (call stack) para entender qué funciones de JavaScript se ejecutaron y cuánto tiempo consumieron. También puedes ver eventos específicos como clics, desplazamientos o cargas de recursos.

## Identificación de cuellos de botella

La pestaña Performance ayuda a detectar problemas comunes como:

- Scripts que tardan mucho en ejecutarse
- Renderizados y repintados excesivos
- Bloqueos del hilo principal (main thread)
- Operaciones costosas en animaciones o transiciones

## Uso práctico de Performance

- Optimizar la velocidad de carga y respuesta de la página.
- Mejorar la fluidez de animaciones e interacciones.
- Detectar y corregir problemas de rendimiento en JavaScript y renderizado.
- Analizar el impacto de cambios en el código sobre el rendimiento.

_La pestaña Performance es una herramienta poderosa para desarrolladores que buscan ofrecer experiencias web rápidas y eficientes, permitiendo un análisis detallado y la optimización continua del rendimiento de sus sitios y aplicaciones_.
