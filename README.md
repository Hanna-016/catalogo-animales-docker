# Fauna — Catálogo de animales

Aplicación web estática creada como práctica de contenerización con Docker.

## Archivos

- `index.html`: estructura de la página.
- `styles.css`: diseño adaptable a móviles y computadores.
- `app.js`: catálogo, búsqueda y filtros.
- `Dockerfile`: instrucciones para construir la imagen con Nginx.

## Ejecutar localmente sin Docker

Abre `index.html` en un navegador. Las fotografías y las fuentes tipográficas se cargan desde internet.

## Construir la imagen

```powershell
docker build -t fauna-web:v1 .
```

## Crear y ejecutar el contenedor

```powershell
docker run -d --name fauna-contenedor -p 8080:80 fauna-web:v1
```

Abre `http://localhost:8080`.

## Detener y volver a iniciar

```powershell
docker stop fauna-contenedor
docker start fauna-contenedor
```

Actualiza el navegador después de cada comando para comprobar la disponibilidad.

## Verificar el contenedor

```powershell
docker ps
docker ps -a
docker logs fauna-contenedor
```

## Eliminar al terminar las pruebas

```powershell
docker stop fauna-contenedor
docker rm fauna-contenedor
```

La imagen permanece disponible localmente. Para eliminarla:

```powershell
docker rmi fauna-web:v1
```

## Imágenes

Las fotografías se cargan desde URLs de imágenes de Unsplash. Se requiere conexión a internet para visualizarlas.
