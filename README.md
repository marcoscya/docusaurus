# Docusaurus

### Instalación de Docusaurus

Para comenzar con la instalación de Docusaurus, lo primero que debemos hacer es abrir la terminal y ejecutar el siguiente comando para instalar Docusaurus globalmente usando `npx docusaurus`. Esto nos permitirá acceder a Docusaurus sin necesidad de instalarlo localmente en cada proyecto:

![comando_iniciar_local](https://github.com/user-attachments/assets/5ed50bc5-6500-4658-813e-59eb15a057ff)

Una vez instalado, ejecutamos el siguiente comando para crear un nuevo proyecto de Docusaurus en la carpeta `docusaurus`:

![comando_instalacion1](https://github.com/user-attachments/assets/dec33dfe-6536-47f7-815a-c3bb567a8f4b)

Al ejecutar este comando, se nos pedirá elegir el tipo de proyecto que deseamos crear. En este caso, elegí **JavaScript** como lenguaje para el proyecto:

![comando_instalacion2](https://github.com/user-attachments/assets/aa08e69e-b05b-4d26-9017-8d05bc3854a5)

Una vez completada la configuración, podemos iniciar el servidor local en **localhost** con el siguiente comando: `npx docusaurus start`
Este comando iniciará un servidor local en el cual podremos visualizar nuestra página web.

### Configuración de Dominio Personalizado

Para configurar un dominio personalizado en nuestro proyecto de Docusaurus, primero debemos acceder al archivo de configuración `docusaurus.config.js`. Este archivo se encuentra dentro del directorio raíz de nuestro proyecto:

![Captura](https://github.com/user-attachments/assets/b6369d9e-6342-4020-ba3e-a82abd368cc3)

Dentro de este archivo, buscamos la línea que contiene `baseUrl`. Este valor determina la ruta base de nuestro sitio, y debemos modificarlo para reflejar nuestro dominio o subdominio personalizado. En mi caso, realicé el siguiente cambio:

![renombrandoDominio](https://github.com/user-attachments/assets/b0dfa231-5751-4b6e-8199-58b10dab2d9c)

### Pasos Adicionales

Una vez configurado el dominio, debemos construir el proyecto para generar los archivos estáticos listos para ser subidos al servidor. Para ello, utilizamos el comando:
Este comando genera una versión optimizada y lista para producción de nuestro sitio web:

![comandoBuildDominioPersonalizado2](https://github.com/user-attachments/assets/fe07bdca-775c-4bc7-b439-b2a130e4559f)  
![comandoBuildDominioPersonalizado2](https://github.com/user-attachments/assets/e4775a77-7111-4972-b705-ba89f2ab226d)

Una vez que se genera el build, el siguiente paso es comprimir los archivos generados en un archivo `.zip`. Esto se puede hacer utilizando el administrador de archivos del panel de control de tu servidor o cualquier herramienta de compresión que prefieras.

![cPanel_compremirarchivos5](https://github.com/user-attachments/assets/c6f2fe97-4c2e-4805-be30-85d11cd5d843)

![cPanel_publichtml3](https://github.com/user-attachments/assets/12c4be10-541a-4aec-a61d-c9047c5bc0ca)

Una vez comprimidos los archivos, creamos una nueva carpeta llamada **docusaurus** dentro del directorio `public_html` de nuestro servidor. Esta carpeta servirá como contenedor para nuestros archivos comprimidos.

![cPanel_pb_nuevacarpeta_subcarpeta4](https://github.com/user-attachments/assets/e098ad8b-8dc2-43fc-ac42-60eeaff933cc)  
![cPanel_archivos_subidos7](https://github.com/user-attachments/assets/fed41f58-44a8-41c1-bd09-7fcbef5be37d)

### Migración de localhost a cPanel
Con todos los archivos comprimidos y subidos al servidor, hemos completado la migración de nuestro sitio web desde **localhost** a **cPanel**. Ahora, podremos acceder al sitio en el dominio personalizado que configuramos previamente.
A continuación, se muestran algunos ejemplos de cómo se verá nuestro sitio una vez migrado:

![web1](https://github.com/user-attachments/assets/3f6e910d-1d73-4d07-a85b-5951920b0ad4)  
![web2](https://github.com/user-attachments/assets/01454d13-6f76-46bd-8890-671352591e18)  
![web3](https://github.com/user-attachments/assets/24975b4f-0ea8-4fd5-8791-4848225424af)
