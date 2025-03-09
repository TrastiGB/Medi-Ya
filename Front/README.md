# GS2_Reto2EV

 

Actividad de Aprendizaje 2ª Evaluación



Curso 2024-2025

Desarrollo de Aplicaciones Web 
CENTRO   SAN VALERO
ZARAGOZA

Propuesta de trabajo 
Esta Actividad de Aprendizaje consiste en el Desarrollo de una Web que se conecte a una API que gestione información en una base de datos. La Web debe tener un adecuado UI/UX basadas en unas buenas guías de estilo. El proyecto deberá estar configurado con filosofía DevOps para trabajar en un entorno local con contenedores y desplegado mediante CI/CD en un entorno en la nube.
Tenéis total libertad para escoger el tema de la aplicación.
Todas las funcionalidades indicadas en el documento deben implementarse lo mejor posible según lo aprendido y evaluado en el ciclo formativo.
Tras la entrega del trabajo, todos los miembros del equipo realizarán una prueba de autoría que debe superarse, evaluando el esfuerzo y conocimientos adquiridos en el proyecto, para dar por válido el trabajo.

Funcionalidades del proyecto:
Diseña una API con una correcta arquitectura RESTful, métodos HTTP para las operaciones CRUD y códigos de estado HTTP que tenga:
Gestión de elementos (usuarios y/o productos y/o servicios). Dependerá del propósito de la aplicación el que existan unos u otros.
Zona pública de información. Dependerá del propósito de la aplicación y será pública para todos los usuarios.
Zona privada de información. Dependerá del propósito de la aplicación y cada usuario tendrá su propia información asociada.
Para cada zona deberá incluirse la gestión de elementos:
Listado de elementos
Creación y modificación de elementos
Detalle de elementos
Eliminación de elementos


Para el frontend debes hacer uso de Vue 3.
Utiliza Vue-Router para la navegación entre páginas
La web gestionará la información de la API mediante Pinia (o similar). Todas las llamadas a la API deberán estar en un store
Deberás estructurar bien las páginas para hacer un uso correcto de los componentes y su comunicación


Diseña un modelo de datos acorde a las funcionalidades de tu aplicación que cumpla:
El modelo de datos estará compuesto de, al menos, 3 entidades y tendrá que existir alguna relación entre ellas. Cada entidad tendrá, al menos, 5 atributos (string, int, decimal, boolean, dateTime). No cuentan como atributos las FK ni las PKs

4.  Añade una búsqueda avanzada
Incluir el buscador en la zona pública
Permite filtrar los resultados por, al menos, 2 campos. El id no es un campo válido para buscar


5.  Prepara un entorno DevOps para tener la aplicación funcionando en local y en la nube:
Configura, al menos, un entorno de trabajo en local mediante contenedores y orquéstalos mediante Docker Compose.
Configura el entorno de trabajo en la nube en un cluster de Kubernetes (K8s)  para lanzar la solución implementada
La BBDD puede estar dockerizada en K8s o utilizando servicios administrados de nube como pueda ser AWS RDS
Tiene que prepararse una canalización CI/CD con Github Actions que conecte con el cluster de kubernetes
Tiene que estar la plataforma con HTTPS, para eso podéis pedir al profesor de despliegue web tantos subdominios como necesitéis del dominio principal retocsv.es

8.  Maquetación
Responsive
Mobile-first
Nomenclatura BEM
SASS genérico (variables, mixins, etc.)
SASS scoped dentro de los componentes
Utiliza Vuetify para la maquetación

9.  Aplica buenas prácticas de programación:
Uso de Git y la metodología Gitflow con Pull Request durante todo el desarrollo de la aplicación
La web debe estar desarrollada con componentes web con la menor lógica posible para reutilizarlos lo máximo en las vistas web
Implementa una arquitectura por capas e inyección de dependencias

10. HTML5 Canvas: Dibujar el logo de tu web mediante canvas que cumpla:
Disponer de al menos 3 partes diferenciadas
Al pasar el ratón por encima del logo-canvas cambie el tamaño o posición de cada una de las partes de forma independiente

