---
sidebar_position: 1
---

# Elementos

La pestaña Elements es la parte fundamental del Inspector de Elementos. Aquí puedes explorar la estructura HTML de cualquier página web, ver cómo están organizados los elementos y modificar su código en tiempo real para probar cambios visuales o funcionales.

En esta sección explicaremos cada parte importante de la pestaña Elements para que puedas sacarle el máximo provecho.

## Árbol DOM (Document Object Model)

El árbol DOM muestra la estructura jerárquica de todos los elementos HTML que componen la página. Cada nodo representa una etiqueta HTML, y puedes expandir o contraer las ramas para navegar por los distintos niveles del documento.

Desde aquí puedes seleccionar cualquier elemento para inspeccionarlo o modificarlo.

## Panel de Estilos

Cuando seleccionas un elemento en el árbol DOM, el panel de estilos muestra todas las reglas CSS que se aplican a ese elemento. Aquí puedes ver propiedades activas, propiedades heredadas y las reglas que están siendo sobrescritas.

Además, puedes editar o añadir nuevas reglas CSS para ver cómo afectan al diseño en tiempo real.

## Panel de Atributos

Este panel te permite ver y modificar los atributos HTML del elemento seleccionado, como id, class, src, entre otros. Cambiar estos atributos puede alterar el comportamiento o la apariencia del elemento en la página.

## Herramientas de Selección

El Inspector de Elementos incluye herramientas para seleccionar visualmente cualquier parte de la página simplemente pasando el cursor sobre ella. Esto facilita encontrar rápidamente el código correspondiente sin necesidad de buscar manualmente en el árbol DOM.

## Computed (Calculado)

La pestaña Computed muestra todos los estilos CSS finales que se aplican a un elemento seleccionado, después de que el navegador haya procesado todas las reglas CSS, incluyendo herencias, valores por defecto y reglas sobrescritas. Es útil para entender exactamente qué estilos están activos y cómo se calculan, ya que muestra las propiedades con sus valores finales y permite ver qué regla CSS los originó.

## Layout (Diseño)

La sección Layout te ayuda a visualizar y entender cómo se posicionan y dimensionan los elementos en la página. Incluye información sobre el modelo de caja CSS (margen, borde, relleno y tamaño), las propiedades de posición (como display, position, top, left), y puede mostrar guías visuales para entender el espacio que ocupa un elemento dentro del diseño general.

## Event Listeners (Escuchas de eventos)

En Event Listeners puedes ver todos los eventos JavaScript que están asociados a un elemento específico, como clics, movimientos del ratón, teclas presionadas, etc. Esto es útil para depurar interacciones, ya que muestra qué funciones están escuchando esos eventos y dónde están definidas en el código.

## DOM Breakpoints (Puntos de interrupción DOM)

Los DOM Breakpoints permiten pausar la ejecución del código JavaScript cuando ocurren cambios específicos en el DOM relacionados con un elemento, como modificaciones en sus atributos, adición o eliminación de nodos hijos, o cambios en el propio nodo. Son herramientas poderosas para depurar dinámicas y detectar cuándo y cómo se modifican los elementos en tiempo real.

## Properties (Propiedades)

La pestaña Properties muestra todas las propiedades JavaScript del nodo DOM seleccionado, incluyendo atributos, métodos y valores actuales. Esto permite inspeccionar el objeto DOM como un objeto JavaScript, facilitando la comprensión de su estado y comportamiento interno.

## Accessibility (Accesibilidad)

La sección Accessibility ofrece información sobre cómo el elemento es interpretado por tecnologías asistivas, como lectores de pantalla. Muestra atributos relacionados con accesibilidad (por ejemplo, roles ARIA, etiquetas, estados), ayudando a los desarrolladores a mejorar la usabilidad para personas con discapacidades y asegurar que el contenido sea accesible para todos.

Estas secciones complementan la pestaña Elements y ofrecen herramientas muy valiosas para inspeccionar, depurar y mejorar páginas web desde diferentes perspectivas: visual, funcional, estructural y accesible.

## Uso práctico de Elements

- Inspeccionar y entender la estructura de una página web.
- Probar cambios temporales en HTML y CSS sin afectar el sitio real.
- Depurar problemas de diseño o funcionalidad.
- Aprender cómo están construidos sitios web para mejorar tus propias habilidades.
