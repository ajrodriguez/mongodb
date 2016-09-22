Docker:


docker ps -> lista los contenedores que estan arrancados


docker ps -a -> lista todos los contenedores disponibles


docker images -> lista todas las imágenes disponibles


docker pull image -> descarga image del hub de docker.com


docker run image


        --name
        --ip
        --network
        -p local:contenedor
        -v origen:destino (ruta origen te la linca en el destino)


docker exec -ti name comando (bash)


docker start/stop name




Dockerfiles: scripts para automatizar todas estas tareas.


Bichear la web dokku (heroku ccon docker).






+++++++++++++++++++++++++++++++++++++++++++++++++++




LOG


Host string
User 
Status string
Method string
Time Date
Path string
responseSize Integer
userAgent String


Gráficas: Users, Paths, userAgents


db.createCollection("logs", {
	validator: { $or: 
		[
			{host: {$type: "string"}},
			{user: {$type: "string"}},
			{status: {$type: "string"}},
			{method: {$in: ["GET", "POST", "PUT", "DEL"]}},
			{time: {$type: "date"}},
			{path: {$type: "string"}},
			{responseSize: {$type: "int"}},
			{userAgent: {$type: "string"}}
		]
	},
	validationAction: "warn"
}, 
{capped: true, size: 5242880, max: 100.000}
);
