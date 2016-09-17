## Esparta utilizaría Stylelint

Esparta se diferencio del resto de ciudades estado griegas gracias a su particular visión de la educación que impartía a sus jóvenes. Así que ha llegado la hora de aplicar un poco de dureza y rectitud a nuestra manera de escribir CSS. 

Escribir **CSS** es duro, repetitivo y a veces frustante. Escribir en la soledad puede hacernos creer que siempre vamos a hacerlo con el mismo modus operandi, craso error por muy metodicos que seamos somos humanos y al final siempre vamos a cometer algún error. Escribir **CSS** en equipo puede ser todavía más frustante ya que con el tiempo cada uno de nosotros ha ido adquiriendo una serie de habitos y vicios. Esta serie de habitos y vicios se ha ido multiplicando con la aparición de los preprocesadores. Vaya por delante que no es culpa de ellos, la culpa es de aquellos que lo usan. Un ejemplo muy común y que se ve con mucha frecuencia es la indentación en modo Julio Verne, es aquella que a base de anidar clases puede llegar hasta el centro de la tierra creando selectores con una herencia más potente que la Borbonica. Sobreescribir esos selectores en los distintos media-queries solo hara que nuestro CSS crezca y crezca sin control alguno.

## Orden y control

Vamos a subsanar los errores que incoscientemente cometemos a la hora de escribir CSS a través de un linter, un linter básicamente es una herramienta que revisa nuestro código en busca de errores. Y tenemos a nuestra dispoción un linter impresionante llamado Stylelint.

Lo que me gusta de Stylelint es que es muy configurable y esta muy bien documentado, leerse toda la documentación es una tarea casi titánica.

## Instalando Stylelint

Para utilizar Stylelint vamos a usar el terminal, aquellos reacios a usarlo es hora de que vayais deponiendo vuestra armas, el terminal fue el pasado, es el presente y seguirá siendo el futuro. Disfrutadlo, amadlo y odiadlo todo lo que podáis pero al final vuestra vida sera más fácil y rápida. 

Lo primero que vamos a hacer es instalar Stylelint a traves de NPM y de manera global. Lo vamos a instalar de manera global para poder utilizarlo sin necesidad de Gulp, también porque si usais Sublime Text o Atom es necesario para que funcionen los plugins de estos editores de código. Vamos a ello.

```
npm i stylelint -g
```

Ahora id a través del terminal a un proyecto, y simplemente escribid

```
styles.css stylelint
```

Y el terminal pintara los errores basandose en la configuración por defecto. Podéis lintear un archivo CSS, SASS, Less o cualquier otra sintasis que pueda parsear postCSS. Y es que Stylelint esta creado con postCSS.

Esto es un poco farragoso de hacer, así que vamos a servirnos de Gulp para hacer correr Stylelint y así vamos a hacer que este linteando constantemente nuestro código.

## Instalando stylelint con Gulp

Lo primero para aquellos que todavían no han oído hablar sobre Gulp les recomiendo este gran [artículo]() como punto de inicio.

Lo primero es un npm init para generar el package.json, esto lo hacemos desde el terminal.

Ahora vamos a instalar gulp y gulp-stylelint, vamos al terminal y escribimos lo siguiente

```
npm i gulp gulp-stylelint --save-dev
```

Ahora vamos a nuestro Gulpfile.js y vamos a crear la tarea para lintear

```
gulp.task('lint-css', function() {
  return gulp
    .src('src/css/*.css')
    .pipe(stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});
```

Y ahora creamos la tarea default con un watch que este constantemente vigilando los cambios en nuestro directorio de CSS

```
gulp.task('default', function() {
  gulp.watch('./src/css/*.css', ['lint-css']);
});
``




