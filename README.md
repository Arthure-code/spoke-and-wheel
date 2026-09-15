# spoke-and-wheel

[![Build](https://github.com/Arthure-code/spoke-and-wheel/actions/workflows/build.yml/badge.svg)](https://github.com/Arthure-code/spoke-and-wheel/actions/workflows/build.yml)
[![Quality gate](https://sonarcloud.io/api/project_badges/measure?project=Arthure-code_spoke-and-wheel&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Arthure-code_spoke-and-wheel)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Arthure-code_spoke-and-wheel&metric=bugs)](https://sonarcloud.io/summary/new_code?id=Arthure-code_spoke-and-wheel)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Arthure-code_spoke-and-wheel&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=Arthure-code_spoke-and-wheel)
[![Security rating](https://sonarcloud.io/api/project_badges/measure?project=Arthure-code_spoke-and-wheel&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=Arthure-code_spoke-and-wheel)
[![Code smells](https://sonarcloud.io/api/project_badges/measure?project=Arthure-code_spoke-and-wheel&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=Arthure-code_spoke-and-wheel)
[![Duplicated lines](https://sonarcloud.io/api/project_badges/measure?project=Arthure-code_spoke-and-wheel&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=Arthure-code_spoke-and-wheel)

A small bike shop's catalogue: road, city and trail bikes in an array,
rendered by one Vue component with a category, a price, and a red line for
the model that is discontinued. Click a bike and a second component shows
its picture and every detail under the list.

Vue 3 with `<script setup>`, built by Vite, styled with Bootstrap. Two
components, three props, one event, and a single `ref` for the bike picked.

## Screenshots

![A white page with a drawn bicycle logo and the title Spoke & Wheel, then a card headed Our bikes listing five bikes, each with a category pill, Road, City or Trail, and its price: Trek SSL 2017, City XT 2015 in red with a discontinued badge, Cosmic Cobat 2015, Hero DTB 2016 and S-WORKS 2016](preview.png)

![The same page after a click on Cosmic Cobat 2015: its row is highlighted in blue and a detail card under the list shows its picture on the left and, on the right, the name, the description Great bike., the category Trail, the price 499.90 $, Fixed price No, the status Available and the last update 2015-05-17](preview-detail.png)

![The same page on a phone, filling the width, with Trek SSL 2017 selected and its detail card stacked under the list](preview-mobile.png)

## How it works

**The data lives in `App.vue`, the rendering in `ProductList.vue`.** The
array of products is declared once in the root component and handed down as
a prop; the list component declares that prop with `defineProps` and never
changes it.

**One `v-for`, one `:key`.** The list renders a button per product, keyed on
the product's `id` so Vue can track each row if the array ever changes.

**The click goes up, the selection comes down.** A row emits `select` with
its product; `App.vue` keeps the chosen one in a `ref` and passes it back to
the list, which highlights the matching row, and to `ProductDetail.vue`,
which renders it. The child components hold no state of their own.

**The pictures are linked, not stored.** Each product carries an `imageUrl`
pointing at a public photo on [Unsplash](https://unsplash.com/license), and
the detail card binds it with `:src`; no image file lives in the repository.

**Red is a class, bound to a boolean.** `:class="{ 'text-danger':
product.discontinued }"` adds Bootstrap's red text class only when the flag
is true; a `v-if` badge says why. Nothing about colour is written in the
script.

**The logo is an SVG drawn for the shop.** Imported by the root component
and used twice, in the navigation bar and above the title, with an empty
`alt` since the name sits right next to it.

**The title is a plain constant in the component.** `const title = 'Our
bikes'` in `<script setup>` is available to the template as is; no `ref`
is needed for a value that never changes.

## Running it

```bash
npm install
npm run dev
```

`npm run build` writes the static site to `dist/`, which can be served from
any web server.

## Stack

Vue 3.5 with `<script setup>`, Vite 8, Bootstrap 5.3. Two components, no
router, no store, no other dependency. The bike photos are public pictures
on Unsplash, linked by URL.

## Résumé

Le catalogue d'une petite boutique de vélos, route, ville et sentier, dans
un tableau rendu par un composant Vue, avec une catégorie, un prix et une
ligne rouge pour le modèle discontinué. Un clic sur un vélo affiche sa photo
et tous ses détails dans un second composant, sous la liste. Le tableau et
le vélo choisi vivent dans `App.vue` ; la liste les reçoit par props, ne les
modifie jamais, et remonte le clic par un événement `select`. Les photos
sont des images publiques d'Unsplash, liées par adresse, rien n'est stocké
dans le dépôt. Vue 3.5 avec `<script setup>`, compilé par Vite 8.

## Licence

MIT. See [LICENSE](LICENSE).
