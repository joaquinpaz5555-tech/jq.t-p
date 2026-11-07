# JQ TECH · Servicio técnico

Web de **JQ TECH**: mantenimiento de PCs y consolas (PS3, PS4, PS5), cambio de pasta térmica, optimización de Windows e instalación de HEN. Estética neón futurista con túnel de zoom infinito, pantalla de bienvenida y música de fondo.

Zona: Cañuelas · WhatsApp: 2226 68-3920

## Archivos

| Archivo | Qué hace |
|---|---|
| `index.html` | Estructura de la página |
| `index.css` | Estilos y animaciones |
| `index.js` | Servicios, proyectos, túnel de zoom y música |
| `musica.mp3` | Música de fondo (opcional) |

Los cuatro archivos tienen que estar en la **misma carpeta**.

## Música

- Si existe `musica.mp3`, suena ese tema en bucle al tocar **ENTRAR**.
- Si no existe, suena un ambiente sintetizado que genera la propia web.
- Usá música libre de derechos (por ejemplo Pixabay Music).

## Cómo editar

- **Servicios:** lista `SERVICIOS` al principio de `index.js`.
- **Webs de juegos retro:** lista `JUEGOS` en `index.js`. Poné `e:"ok"` y la URL en `u` cuando una web ya esté online.
- **Teléfono y horarios:** buscalos en `index.html`.
- **Colores:** variables `--c1`, `--c2` y `--c3` al inicio de `index.css`.

## Publicar en GitHub Pages

1. Subí los archivos al repositorio (rama `main`).
2. Entrá a **Settings → Pages**.
3. En **Source** elegí **Deploy from a branch**, rama `main`, carpeta `/(root)` y guardá.
4. En uno o dos minutos la web queda online. Si no se ve el cambio, recargá con Ctrl+F5.
