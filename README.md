# mono repo version

## before start

```sh
npm install -g lerna@^2.0.0-beta
```

## install dependencies

```sh
cd mono
npm install
```

## dev

### serve module-c with hot module replacement enabled

```sh
cd mono/packages/module-c
npm run dev
open http://localhost:8080/
```

## stuff

### lint all modules

```sh
cd mono
lerna run lint
```

### test all modules

```sh
cd mono
lerna run test
```

### build all modules

```sh
cd mono
lerna run build
```
