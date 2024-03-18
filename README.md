# fliQt

## Setup

```sh
yarn install
```

## develop

```sh
yarn dev
```

## build

```sh
yarn build
```

## Memo

If "trailingSlash: true" is selected in next.config.js, the slug of metadata should be marked with trailing slash

ex. 
```
alternates: {
  canonical: SITE_URL + '/sample',
},
```
↓
```
alternates: {
  canonical: SITE_URL + '/sample/',
},
```