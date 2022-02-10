# API

## Config.json
アプリ全体の設定項目が書かれたJSON

```js

const config = {
    musicDataFolderPath:["c:/Users/username/Music"]
}
```

## Left Menu
### getDirData()
指定フォルダの内容を取得する時の帰り値
音楽データではないものや、再帰的に中に音楽データが含まれていないものは除外する

```ts
declare module namespace {
    export interface DirData {
        name: string;
        fullPath: string;
        isDir: boolean;
        depth: number;
    }
    export interface RootObject {
        currentDirPath: string;
        dirData: DirData[];
    }

}
```

```js
const dirData = {
   currentDirPath: "",
   dirData: [
       {
           name: "",
           fullPath: "",
           isDir: true,
           depth: 1,
       },
       {
           name: "",
           fullPath: "",
           isDir: true,
           depth: 1,
       }
   ]
}
```