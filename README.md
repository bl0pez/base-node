# Bases de Node.js

# Intrucciones.

1. Clonar el repositorio.
2. Ejecutar el comando `npm install` para instalar las dependencias.
3. Ejecutar el comando `npm run dev` para ejecutar el proyecto.

# Pasos para configurar Jest con TypeScript, en Node.

Documentación [oficial sobre Jest](https://jestjs.io/docs/getting-started)

1. Instalaciones de desarrollo (super test es útil para probar Express)

```
npm install -D jest @types/jest ts-jest supertest
```

2. Crear archivo de configuración de Jest

```
npx jest --init
```

3. En el archivo **jest.config.js** configurar

```
preset: 'ts-jest',
testEnvironment: "jest-environment-node",

// Opcional - The paths to modules that run some code to configure or set up the testing environment before each test
// setupFiles: ['dotenv/config'],
```

4. Crear scripts en el **package.json**

```
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage",
```
