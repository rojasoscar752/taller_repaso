# 🚀 Proyecto: API con Express.js y Servidor Estático con Nginx

Este proyecto configura una API en **Express.js** y un servidor estático en **Nginx**, utilizando **Docker Compose** y **Traefik** como proxy inverso.

---

## 📂 Estructura del Proyecto
```
/mi-proyecto
│── /api
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│── /nginx
│   ├── Dockerfile
│   ├── default.conf
│   ├── /html
│       ├── index.html
│── docker-compose.yml
```

---

## 📦 Instalación y Uso

### 1️⃣ Clonar el Repositorio
```sh
git clone git@github.com:tu-usuario/mi-proyecto.git
cd mi-proyecto
```

### 2️⃣ Construir y Levantar los Servicios
```sh
docker-compose up -d --build
```

### 3️⃣ Probar los Servicios
- 🌍 **Nginx (Servidor estático):** [http://nginx.localhost](http://nginx.localhost)
- 📡 **API Express.js:** [http://api.localhost](http://api.localhost)

---

## ⚙️ Tecnologías Utilizadas
- **Node.js + Express.js** → API REST
- **Nginx** → Servidor de archivos estáticos
- **Docker Compose** → Orquestación de contenedores
- **Traefik** → Proxy inverso y balanceador de carga

---

## 🔧 Configuración de Docker
### `docker-compose.yml`
Define los servicios de **Traefik, Nginx y API Express.js**.

### `api/Dockerfile`
Crea la imagen de la API con **Node.js**.

### `nginx/Dockerfile`
Configura Nginx para servir archivos estáticos.

### `nginx/default.conf`
Define las reglas del servidor web.

---

## 🔑 Configuración de SSH con GitHub
Si usas SSH para GitHub, asegúrate de:
1. Tener una clave SSH generada: `ssh-keygen -t rsa -b 4096`
2. Agregarla a GitHub: [GitHub → SSH keys](https://github.com/settings/keys)
3. Probar la conexión: `ssh -T git@github.com`
4. Cambiar la URL del repo a SSH:
   ```sh
   git remote set-url origin git@github.com:tu-usuario/mi-proyecto.git
   ```

---

## 🛠️ Comandos Útiles
### Parar los contenedores
```sh
docker-compose down
```
### Ver logs de Traefik
```sh
docker logs traefik -f
```
### Reconstruir y reiniciar todo
```sh
docker-compose up -d --build
```

---

## 📌 Notas
- **Traefik** maneja el enrutamiento de los servicios.
- **Nginx** se encarga de servir archivos estáticos.
- **Express.js** maneja las peticiones API.

✍️ **Autor:** _Oscar Rojas, Jhonatan Baron_
# taller_repaso
Grafana: http://localhost:3000 con credenciales admin/admin.

Prometheus: http://localhost:9090.

API: http://api.localhost.

Nginx: http://nginx.localhost.
