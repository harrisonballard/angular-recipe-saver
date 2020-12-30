# Angular Recipe Saver

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


-------

# todo 

bug with updating recipes. upon editing existing or adding a new recipe, won't save. Another bug I noticed crop up is with CSS form invalid styling;
it was originally, and is intended to be, on clicking submit. with new recipe it now shows up immediately, but only for name and imagePath.


## Features in development

Once the core functionality is up (recipes, pushable shopping list and data persistence), features to be made will be listed here.

- Include nutrition information on items and whole dishes upon save using [Edamam API](https://developer.edamam.com/food-database-api-docs).
-Searchable recipe component not saved in your recipe list using [BigOven API](https://api2.bigoven.com/).
    -Ability to transfer recipes from search into personal recipe list.
- Link to purchase the item online, e.g. through Target or Amazon home delivery.

