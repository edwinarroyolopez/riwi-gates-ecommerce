# Riwi Gates Ecommerce
*node --version* **20** 

## common -> no tocar


## ui-documentation -> ui team
Este es el proyecto en el que el equipo de ui usará para mostrar sus componentes
Imagino un sidebar donde listan los nombres de los componentes UI y al dar click
se renderiza la información del componente en un container central
    - Nombre y descripción del componente
    - Cómo importarlo -> el código para importarlo
    - Cómo se vé luego de importarlo


### Start:ui-documentation

Ingresa a la carpeta ```cd apps/ui-documentation``` instala dependencias ```npm install``` luego para ejecuta el siguente comando ```npm run dev```

El puerto en el que correrá ```ui-documentation``` será 
```http//:localhost:3003```

Después de instaladas las dependencias puedes lanzar el comando ```npx turbo run dev --filter=ui-documentation```
desde la raiz del proyecto cada vez que quieras iniciar este proyecto

## packages/ui -> ui team
    Dentro de esta carpeta van a poner todos los elementos de la ui, y los otros equipos deberían importarla desde aqui
    
    
## admin
```npx turbo run dev --filter=admin```

Ingresa a la carpeta ```cd apps/admin``` instala dependencias ```npm install``` luego para ejecuta el siguente comando ```npm run dev```

El puerto en el que correrá ```customer``` será 
```http//:localhost:3002```

Después de instaladas las dependencias puedes lanzar el comando ```npx turbo run dev --filter=admin```
desde la raiz del proyecto cada vez que quieras iniciar este proyecto

## customer

```npx turbo run dev --filter=customer```

Ingresa a la carpeta ```cd apps/customer``` instala dependencias ```npm install``` luego para ejecuta el siguente comando ```npm run dev```

El puerto en el que correrá ```customer``` será 
```http//:localhost:3001```

Después de instaladas las dependencias puedes lanzar el comando ```npx turbo run dev --filter=customer```
desde la raiz del proyecto cada vez que quieras iniciar este proyecto

npx turbo run dev --filter=apps/admin