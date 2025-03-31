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

## Respuestas a preguntas

- **¿Cómo detecta Traefik los servicios configurados en Docker Compose?**
      La herramienta utiliza lo que se encuentra como docker provider para descubrir dinámicamente los servicos que se están ejecutando en Docker; con esto se entiende que Traefik se conecta con el socket de Docker y lee los labels que se definen en los archivos docker-compose.yml de nuestros servicios. Los lables añ igual indican a Traefik cómo enrutar el tráfico a cada servicio. es decir que se escuchan los eventos de Docker y posteriormente se utilizan dichos labels para configurar de forma automática las rutas y servicios.

- **¿Qué rol juegan los middlewares en la seguridad y gestión del tráfico?**
      Los middlewares son intemediarios que permiten modificar la actividad entrante y saliente en un software a modo de un filtro. y son muy importantes en la seguridad de un programa asi como tambien en la gestion del trafico dado el mismo. Dentro de sus particularidades sepuede encontrar que permiten implementar autenticación como con Traefik y el basicAuth, tambien dejan Limitar la tasa de solicitudes o rate limit, gestionar redirecciones http a https; asi como permiten hacer la misma gestión de tráfico y/o balanceo de carga.

- **¿Cómo se define un router en Traefik y qué parámetros son esenciales?**
      Segun la documentación de traefik se entiende que funciona tipo como un dispositivo de borde, es decir que permite gestionar cómo se enrutan las solicitudes entrantes a los servicios. el mismo router se define mediante etiquetas en los servicios de Docker-compose.yml o en archivos de configuración dinámica. Dentro de los parámetros encontramos que rule define la regla con la cual el router se active por ejemplo, Host(\serviciocreado.com)).y service que especifica el nombre del servicio al que se debe enviar el tráfico además de los entrypoints que definen los puntos de entrada o puertos por los que el router escucha las solicitudes.

- **¿Cuál es la diferencia entre un router y un servicio en Traefik?**
      Router: Este puede indicar a qué servicio se debe enviar una petición entrante, basándose en reglas definidas. Servicio: Es el que nos representa la instancia de una aplicación que está ejecutándose por ejemplo en Docker, osea es el destino final al que el router envía el tráfico.

--**¿Cómo se pueden agregar más reglas de enrutamiento para diferentes rutas?**
      Las reglas de enrutamiento se pueden agregar usando : traefik.http.routers..rule dentro de los servicios del Docker-compose. dentro de los ejemplos es entendible que se pueden combinar múltiples reglas usando operadores lógicos como && (AND) y || (OR). como por ejemplo :

labels:

"traefik.http.routers.mi-router.rule=Host(`serviciocreado.com`) && PathPrefix(`/api`)""
donde en el ejemplo se entiende que se enrutaran las solicitudes a serviciocreado.com/api



✍️ **Autores:** _Oscar Rojas, Jhonatan Baron_
# taller_repaso
Grafana: http://localhost:3000 con credenciales admin/admin.

Prometheus: http://localhost:9090.

API: http://api.localhost.

Nginx: http://nginx.localhost.
1. ¿Cómo detecta Traefik los servicios configurados en Docker Compose?

Traefik detecta los servicios configurados en Docker Compose mediante
su provider de Docker. Al habilitar la opción --providers.docker=true en la
configuración de Traefik, Traefik consulta la API de Docker para descubrir
automáticamente los servicios que se están ejecutando, sus contenedores y
las etiquetas (labels) asociadas a cada servicio.
Las etiquetas en los servicios de Docker se utilizan para configurar
reglas de enrutamiento, middlewares y otros parámetros dentro de Traefik. 
Por ejemplo, las etiquetas como traefik.http.routers.servicio.rule definen las 
reglas de enrutamiento para un servicio.
