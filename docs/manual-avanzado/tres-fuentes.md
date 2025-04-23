---
sidebar_position: 3
---

# Sources(Fuentes)

La pestaña Sources es una herramienta esencial del Inspector de Elementos que te permite explorar, depurar y modificar el código fuente JavaScript, CSS y otros archivos que componen una página web. Aquí puedes ver los archivos cargados, establecer puntos de interrupción, y analizar cómo se ejecuta el código paso a paso.

En esta sección explicaremos cada parte importante de la pestaña Sources para que puedas sacarle el máximo provecho.

## Explorador de archivos

El panel principal muestra una estructura de carpetas y archivos que contiene todos los recursos cargados por la página, como scripts JavaScript, hojas de estilo CSS, imágenes y otros archivos. Puedes navegar por estos archivos para inspeccionar su contenido.

## Depuración con puntos de interrupción (Breakpoints)

Puedes establecer puntos de interrupción en cualquier línea de código para pausar la ejecución cuando el flujo llegue a ese punto. Esto te permite examinar el estado de las variables, el call stack y el contexto en ese momento, facilitando la identificación de errores o comportamientos inesperados.

## Control de la ejecución

La pestaña Sources ofrece controles para manejar la ejecución del código:

- Continuar (Play): Reanuda la ejecución hasta el siguiente breakpoint.
- Paso a paso (Step Over, Step Into, Step Out): Avanza línea por línea o entra/sale de funciones para un análisis detallado.
- Reiniciar o detener la depuración.

## Visualización y edición de código

Puedes editar directamente el código fuente dentro de la pestaña Sources para probar cambios rápidos. Aunque estas modificaciones son temporales y no afectan los archivos originales, son útiles para experimentar y corregir errores en tiempo real.

## Watchers y Scope

- Watchers: Permiten monitorear expresiones o variables específicas para ver cómo cambian durante la ejecución.
- Scope: Muestra las variables disponibles en el contexto actual, incluyendo variables locales, globales y de cierre (closures).

## Llamadas y pila de ejecución (Call Stack)

Cuando la ejecución se detiene en un breakpoint, puedes ver la pila de llamadas para entender cómo se llegó a ese punto en el código, lo cual es fundamental para depurar problemas complejos.

## Uso práctico de Sources

- Inspeccionar y entender el código fuente de una página web.
- Depurar errores y comportamientos inesperados en JavaScript.
- Probar modificaciones temporales para validar soluciones.
- Analizar el flujo de ejecución y el estado de las variables.

_La pestaña Sources es una herramienta poderosa para desarrolladores que buscan controlar y comprender el código que da vida a una página web. Dominarla facilita la depuración eficiente y el desarrollo de aplicaciones web robustas_.
