npm i

npm run initHTML

npm run initJS

npm run start

Запускаем конвертацию в формат .woff(.woff2) `npm run ttfToWoff`
Подключаем шрифты в mixin scss `"app/styles/fonts.scss"` командой `npm run fontsInStyle`

```js
    scss: {
        "@Sections": "./../pages/sections",
        "@Components": "./../pages/components",
        "@Elements": "./../pages/elements",
    },
    js: {
        "@Sections": path.resolve(__dirname, "../../" + paths.sections),
        "@Components": path.resolve(__dirname, "../../" + paths.components),
        "@Elements": path.resolve(__dirname, "../../" + paths.elements),
    },
```
