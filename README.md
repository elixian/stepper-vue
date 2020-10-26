

# Stepper vue


[![Build Status](https://travis-ci.org/elixian/stepper-vue.svg?branch=main)](https://travis-ci.org/elixian/stepper-vue)

Composant stepper


### Pré-requis

Avoir un projet vuejs déjà existant :)

### Installation



Executez la commande ``npm i stepper-vue`` pour commencer ensuite [...]



## Démarrage

```html
<template>
  <div id="app">
    <stepper-vue :active-page="2" :totalPage="10" :CustomStyle="{bg:'crimson',height:'6px'}" />
  </div>
</template>

```

Paramtérage

- ``active-page`` : correspond à l'état d'avancement du stepper, la page active.
- ``totalPage`` : correspond au total de pages
- ``CustomStyle`` : objet comprenant la modification de la couleur (bg) et la hauteur de l'élement (height), par défaut la hauteur est définie à une height de 2px



## Versions

**Dernière version stable :** 1.1.3


## Auteurs
Listez le(s) auteur(s) du projet ici !
* **Elixian** _alias_ [@Elixian](https://github.com/elixian)



## License

Ce projet est sous licence ``ISC`` 


