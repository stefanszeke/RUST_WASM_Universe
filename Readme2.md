## instal wasm-pack
[https://rustwasm.github.io/wasm-pack/installer/](https://rustwasm.github.io/wasm-pack/installer/)

## cargo generate
`cargo install cargo-generate` <br>
then <br>
`cargo generate --git https://github.com/rustwasm/wasm-pack-template` <br>
name your project: <br>
wasm-game-of-life

## web app
try to run:
`npm init wasm-app www` <br>
or copy file from: 
[https://github.com/rustwasm/create-wasm-app](https://github.com/rustwasm/create-wasm-app)
add to package.json: <br>
```json
{
  // ...
  "dependencies": {
    "wasm-game-of-life": "file:../pkg", // Add this line!
    // ...
  }
}
```

## build & run
from root directory of the project run: <br>
`wasm-pack build` <br>
`cd www` <br>
`npm install` <br>
`npm run start` <br>