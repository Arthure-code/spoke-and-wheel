# spoke-and-wheel

A small bike shop's catalogue: road, city and trail bikes in an array,
rendered by one Vue component with a category, a price, and a red line for
the model that is discontinued. Click a bike and a second component shows
its picture and every detail under the list.

Vue 3 with `<script setup>`, built by Vite, styled with Bootstrap. Two
components, three props, one event, and a single `ref` for the bike picked.

## Screenshots

Coming with the first release.

## How it works

Described with the first release.

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
