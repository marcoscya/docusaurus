# Docusaurus

### Instalación de Docusaurus

Primero en la terminal pondremos el comando `npx docusaurus`  
![comando_iniciar_local](https://github.com/user-attachments/assets/5ed50bc5-6500-4658-813e-59eb15a057ff)

Después de eso, ejecutamos `npx create-docusaurus@latest docusaurus`  
![comando_instalacion1](https://github.com/user-attachments/assets/dec33dfe-6536-47f7-815a-c3bb567a8f4b)

A continuación, nos pedirá elegir el lenguaje a usar, en mi caso elegí **JavaScript**  
![comando_instalacion2](https://github.com/user-attachments/assets/aa08e69e-b05b-4d26-9017-8d05bc3854a5)

Luego, iniciamos el servidor en **localhost** con el comando `npx docusaurus start`.

### Dominio Personalizado

Primero, tenemos que dirigirnos al archivo `docusaurus.config.js`  
![Captura](https://github.com/user-attachments/assets/b6369d9e-6342-4020-ba3e-a82abd368cc3)

Después de eso, buscamos `baseUrl` y lo editamos  
![renombrandoDominio](https://github.com/user-attachments/assets/b0dfa231-5751-4b6e-8199-58b10dab2d9c)

### Pasos Extras

Reconstruimos el build usando `npm run build`  
![comandoBuildDominioPersonalizado2](https://github.com/user-attachments/assets/fe07bdca-775c-4bc7-b439-b2a130e4559f)  
![comandoBuildDominioPersonalizado2](https://github.com/user-attachments/assets/e4775a77-7111-4972-b705-ba89f2ab226d)

Después de eso, nos dirigimos a nuestro panel de administración de archivos y aseguramos que nuestro archivo esté comprimido en un archivo `.zip`  
![cPanel_compremirarchivos5](https://github.com/user-attachments/assets/c6f2fe97-4c2e-4805-be30-85d11cd5d843)

![cPanel_publichtml3](https://github.com/user-attachments/assets/12c4be10-541a-4aec-a61d-c9047c5bc0ca)

Creamos una nueva carpeta llamada **docusaurus** en `public_html` y exportamos nuestro archivo `.zip` ahí desde la opción de administrador de archivos o desde la terminal de cPanel  
![cPanel_pb_nuevacarpeta_subcarpeta4](https://github.com/user-attachments/assets/e098ad8b-8dc2-43fc-ac42-60eeaff933cc)  
![cPanel_archivos_subidos7](https://github.com/user-attachments/assets/fed41f58-44a8-41c1-bd09-7fcbef5be37d)

Y así habremos migrado nuestro sitio de **localhost** a **cPanel**.

![web1](https://github.com/user-attachments/assets/3f6e910d-1d73-4d07-a85b-5951920b0ad4)  
![web2](https://github.com/user-attachments/assets/01454d13-6f76-46bd-8890-671352591e18)  
![web3](https://github.com/user-attachments/assets/24975b4f-0ea8-4fd5-8791-4848225424af)
