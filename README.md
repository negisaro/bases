# Bases de Angular - Aplicación Educativa

Esta es una aplicación educativa de Angular que demuestra los conceptos fundamentales del framework. El proyecto incluye múltiples módulos que enseñan diferentes aspectos de Angular.

## ¿Para qué sirve esta aplicación?

Esta aplicación sirve como **tutorial práctico y demo de Angular** que incluye:

### 🎯 Funcionalidades Principales

**1. Gestor de Personajes DBZ (Módulo Activo)**
- ✅ Visualizar lista de personajes de Dragon Ball Z
- ✅ Agregar nuevos personajes con nombre y nivel de poder
- ✅ Eliminar personajes existentes
- ✅ Gestión de IDs únicos usando UUID

**2. Contador Interactivo (Módulo Opcional)**
- Incrementar/Decrementar valores
- Resetear contador

**3. Gestor de Héroes (Módulo Opcional)**
- Cambiar información de superhéroes
- Mostrar datos dinámicos

### 📚 Conceptos de Angular Demostrados

- **Componentes y Templates**: Estructura modular de la aplicación
- **Data Binding**: Enlace bidireccional de datos con [(ngModel)]
- **Event Binding**: Manejo de eventos de click y submit
- **Input/Output Decorators**: Comunicación entre componentes padre e hijo
- **Servicios e Inyección de Dependencias**: DbzService para gestión de datos
- **Interfaces TypeScript**: Tipado fuerte con Character interface
- **Módulos**: Organización del código en módulos funcionales
- **Formularios**: Manejo de forms con validación básica
- **Pipes**: Transformación de datos en templates

### 🛠️ Tecnologías Utilizadas

- Angular 18.2.x
- TypeScript
- Bootstrap (para estilos)
- UUID (para IDs únicos)
- Angular Forms
- RxJS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1.

### 🚀 Cómo Usar la Aplicación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar servidor de desarrollo:**
   ```bash
   npm start
   # o
   ng serve
   ```

3. **Navegar a:** `http://localhost:4200/`

### 🎮 Funcionalidades Disponibles

**Gestor de Personajes DBZ (Actualmente Activo):**
- Agrega personajes completando el formulario con nombre y nivel de poder
- Elimina personajes haciendo clic en el botón "X"
- Los personajes se muestran en una lista numerada con su información

**Módulos Adicionales (Comentados en app.component.html):**
- Descomenta las líneas en `app.component.html` para activar:
  - `<app-counter>`: Contador interactivo
  - `<app-heroes-hero>`: Gestor de información de héroes
  - `<app-heroes-list>`: Lista de héroes

### 📁 Estructura del Proyecto

```
src/app/
├── counter/          # Módulo contador
├── heroes/           # Módulo héroes  
├── dbz/              # Módulo DBZ (principal)
│   ├── components/   # Componentes de lista y formulario
│   ├── interfaces/   # Interface de Character
│   ├── pages/        # Página principal
│   └── services/     # Servicio de gestión de datos
└── app.component.*   # Componente raíz
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
