---
sidebar_position: 9
---

# Lighthouse(Faro)

La pestaña Lighthouse es una herramienta automatizada y de código abierto integrada en Chrome DevTools que te ayuda a mejorar la calidad de las páginas web. Al ejecutar una auditoría, Lighthouse analiza una URL y genera un informe detallado sobre el desempeño de la página en varias áreas clave.

En esta sección explicaremos cada parte importante de Lighthouse para que puedas aprovechar al máximo sus funcionalidades.

## ¿Qué es Lighthouse?

Lighthouse es una herramienta que realiza auditorías automáticas para evaluar la calidad de una página web en aspectos como:

- Accesibilidad: verifica que la página sea usable para personas con diferentes capacidades.
- Buenas prácticas: revisa aspectos técnicos y de seguridad.
- SEO: analiza la optimización para motores de búsqueda.
- Aplicaciones web progresivas (PWA): evalúa características para apps web modernas y offline.

## Cómo funciona

Le das a Lighthouse una URL para auditar y la herramienta ejecuta una serie de pruebas en un entorno controlado, simulando condiciones específicas de red y dispositivo (por ejemplo, conexión 3G). Luego genera un informe con puntuaciones y recomendaciones para mejorar cada área evaluada.

## Uso en Chrome DevTools

Puedes acceder a Lighthouse directamente desde las herramientas de desarrollo de Chrome:

- Abre Chrome y navega a la página que quieres auditar.
- Abre DevTools (Ctrl+Shift+I o Cmd+Option+I).
- Selecciona la pestaña Lighthouse.
- Elige las categorías que deseas auditar y si quieres simular un dispositivo móvil o escritorio.
- Haz clic en Analizar la carga de la página para iniciar la auditoría.

## Interpretación del informe

El informe de Lighthouse muestra un score de 0 a 100 para cada categoría, donde:

- 0–49 (rojo): rendimiento pobre, necesita mejoras urgentes.
- 50–89 (naranja): rendimiento aceptable, pero con margen para optimizar.
- 90–100 (verde): rendimiento excelente.

Además, ofrece detalles sobre problemas detectados, oportunidades de mejora y buenas prácticas a seguir, con explicaciones y enlaces para profundizar.

## Otras formas de usar Lighthouse

- Desde la línea de comandos: para automatizar auditorías en procesos de desarrollo.
- Como módulo de Node.js: para integrarlo en sistemas y flujos de trabajo.
- Extensión de Chrome: para auditorías rápidas desde el navegador.
- PageSpeed Insights: que utiliza datos de Lighthouse para mostrar análisis online.

## Uso práctico de Lighthouse

- Mejorar la velocidad y rendimiento general de tu sitio web.
- Garantizar que tu sitio sea accesible para todos los usuarios.
- Optimizar el SEO para mejorar el posicionamiento en buscadores.
- Verificar el cumplimiento de buenas prácticas y estándares web.
- Evaluar y mejorar las capacidades de aplicaciones web progresivas.

_Lighthouse es una herramienta imprescindible para desarrolladores, SEO y propietarios de sitios web que buscan optimizar la experiencia del usuario y la calidad técnica de sus páginas, con informes claros y recomendaciones prácticas_.
