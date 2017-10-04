# Quark

Librería para las REQUEST de Servicios

## Ejecución

Levanta un servidor en el  http://localhost:4200

    $ npm start

## Calidad del código

Para lanzar las reglas de calidad del código ejecutar

    $ ng lint

## Test Karma

Desarrollo guiado por Test (TDD)

    $ npm test

Pasada simple del test

    $ ng test --single-run

Cobertura del código

    $ ng test --single-run --code-coverage

## Test e2e

    $ npm run e2e

## Entornos

       ng-build --target=production
       ng-build --target=development

## Instrucciones angular-cli

Scaffold  | Usage
---       | ---
Component | `ng g component my-new-component`
Directive | `ng g directive my-new-directive`
Pipe      | `ng g pipe my-new-pipe`
Service   | `ng g service my-new-service`
Class     | `ng g class my-new-class`
Interface | `ng g interface my-new-interface`
Enum      | `ng g enum my-new-enum`
Module    | `ng g module my-module`
Routing   | `ng g module modules/module-name --routing`

