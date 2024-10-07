<h1 align = "center">Gestión de empleados 🙋‍♂️</h1>
<div align = "center">
    <img src='https://i.ibb.co/tLFWkQM/bg-employees.png' border='0' alt='employees' width='800' height='auto'/>
</div>

# Descripción de la Aplicación

Aplicación web de gestión de empleados, desarrollada con React JS y Vite, proporciona una solución completa para la administración del personal. Incluye autenticación de usuarios para proteger el acceso a funciones críticas, gestión de empleados que permite alta, baja y modificación de registros, y un listado de empleados obtenido de un mock de API para una visualización clara. Las rutas protegidas aseguran que solo usuarios autenticados puedan acceder a páginas sensibles, mientras que los formularios con validación, manejados por un hook personalizado, garantizan la entrada de datos precisa y fluida. La aplicación distingue entre layouts públicos y privados para una navegación segura y organizada, utiliza el patrón Container para separar lógica de negocio de la presentación, y se beneficia de variables de entorno en Vite para una configuración flexible de la API.

# Instalación y configuración

Para instalar y configurar la aplicación, clona el repositorio con el comando:

- .git clone https://github.com/nicolasvlaeminch/TP-Final-ReactJS.git

Navega al directorio del proyecto y ejecuta npm install para instalar las dependencias. Luego, inicia el proyecto con el comando npm run dev, luego para configurar json-server, instala el paquete con npm install json-server, luego añade el siguiente script en package.json bajo scripts:

- "start": "json-server --watch db.json --port 5000"

Finalmente, inicia json-server con npm start.

# Usuario administrador para la web

- Usuario: admin
- Contraseña: admin
