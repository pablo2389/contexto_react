# MiBlog React

## Contexto
Para este desafio tenemos como propósito construir una aplicación de "Blog" la cual estará basado en el backend "miblog":

[miblog backend](https://miblog.inovecode.com/docs)

- A lo largo del curso irá agregando funcionalidades a su Blog hasta tenerlo completo al final del curso, como una aplicación completa basada en los conceptos vistos en la cursada.
- Para ello usted tendrá su propio repositorio el cual utilizará y mantendrá actualizado con cada nuevo desafio de profundización.
- En caso de tener dudas o problemas, nos compartirá el link del repositorio para poder ayudarlo u orientarlo.


## Esquema de la aplicación
Esta aplicación permitirá:
- Logearse con un usuario
- Ver los posteos de ese usario
- Leer un posteo de un usuario
- Modificar el posteo de un usuario
- Crear un nuevo posteo para un usuario

Todas estas funcionalidades las construiremos a lo largo de la cursada con cada nuevo desafio. En cada desafio se dará detalle del paso siguiente a realizar.


## Consiga
1. Deberá crear un contexto para almacenar si el usuario está logueado/autenticado en la aplicación y almacenar su nombre de usuario (tal cual lo visto en clase).
2. En la pantalla de Home, deberá aparecer un mensaje que sale al usuario si este está logueado, de lo contrario indicarle que debe loguearse para ver y crear posteos.
3. En la pantalla de login, el usuario deberá autenticarse. En caso de ingresar correctamente las credenciales (recomendamos usar las mismas que las mostradas en clase) se debe autenticar el usuario almacenando los datos correspondientes en el contexto.
4. Deberá proteger todas aquellas rutas que requieran que el usuario esté autenticado, como por ejemplo la ruta para ver los posteo, la ruta para leer un posteo específico y la ruta para crear un posteo.

