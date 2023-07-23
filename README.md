# Node

Node tutorials

## Iniciar node:

En el directorio raíz

```
npm init
```

o

```
npm install -y 
```

En esta versión le da "yes" a todas las opciones por default


## Instalar paquetes:

por ejemplo para instalar el paquete "colors"

```
npm i colors 
```


## Reconstruir módulos de node, ejecutar comando en la consola:

```
npm install 
```

En la carpeta raíz donde se encuentra el package.json y el package-lock.json

# help

Help que aparece con YARGS:

```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Es el número del cuál se quiere generar la tabla
                                                             [number] [required]
  -h, --hasta    Es el número máximo hasta el cual se genera la tabla
                                                          [number] [default: 10]
  -l, --listar   Muestra la tabla en consola si es true
                                                      [boolean] [default: false]
```
