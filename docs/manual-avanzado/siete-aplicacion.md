---
sidebar_position: 7
---

# Application(Aplicación)

La pestaña Application es una sección clave del Inspector de Elementos que te permite gestionar y analizar diversos aspectos relacionados con el almacenamiento y la gestión de recursos de una página web en el navegador. Aquí puedes ver información detallada sobre la caché, bases de datos, almacenamiento local, cookies, y servicios en segundo plano, entre otros.

En esta sección explicaremos cada parte importante de la pestaña Application para que puedas sacarle el máximo provecho.

## Almacenamiento (Storage)

La pestaña Application te muestra todos los tipos de almacenamiento que utiliza la página web para guardar datos en el navegador, incluyendo:

- Local Storage: Datos almacenados de forma persistente en el navegador, accesibles solo desde el mismo dominio.
- Session Storage: Datos temporales que se mantienen solo durante la sesión del navegador.
- IndexedDB: Base de datos NoSQL para almacenar grandes cantidades de datos estructurados.
- Cookies: Pequeños archivos de texto que guardan información para mantener sesiones, preferencias y seguimiento.

Desde aquí puedes inspeccionar, modificar o eliminar estos datos para probar comportamientos o depurar problemas relacionados con el almacenamiento.

## Caché (Cache)

Puedes ver y administrar diferentes tipos de caché que usa la página, como:

- Cache Storage: Caché gestionada por Service Workers para almacenar recursos y permitir el funcionamiento offline.
- Application Cache: Mecanismo obsoleto pero aún visible en algunos sitios.

Esto es útil para verificar qué recursos están almacenados localmente y controlar su actualización o eliminación.

## Service Workers

La pestaña Application muestra los Service Workers activos, que son scripts que corren en segundo plano para gestionar la caché, notificaciones push y otras funcionalidades offline. Aquí puedes registrar, desactivar o actualizar estos workers para probar su comportamiento.

## Manifest y otras configuraciones

Puedes inspeccionar el archivo manifest.json de la aplicación web, que define cómo se comporta la app cuando se instala en dispositivos móviles o se ejecuta como PWA (Progressive Web App). También puedes ver configuraciones relacionadas con permisos y almacenamiento.

## Bases de datos Web SQL y IndexedDB

Además de IndexedDB, puedes explorar bases de datos Web SQL si están en uso, ver sus tablas y datos almacenados para depurar o analizar la persistencia de información.

## Uso práctico de Application:

- Gestionar y depurar datos almacenados en el navegador.
- Controlar la caché para mejorar el rendimiento y la experiencia offline.
- Inspeccionar y administrar Service Workers y su impacto en la app.
- Verificar y modificar cookies para pruebas de sesión y autenticación.
- Analizar el manifiesto y configuraciones de aplicaciones web progresivas.

_La pestaña Application es fundamental para desarrolladores que trabajan con aplicaciones web modernas, especialmente con funcionalidades offline, almacenamiento avanzado y gestión de recursos, facilitando el control completo sobre cómo la web interactúa con el navegador más allá del código visible_.
