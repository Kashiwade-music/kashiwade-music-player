# API

## Config.json
アプリ全体の設定項目が書かれたJSON

```js

const config = {
    musicDataFolderPath:["c:/Users/username/Music"]
}
```

## Left Menu
### getDirData
指定フォルダの内容を取得する時の帰り値
音楽データではないものや、再帰的に中に音楽データが含まれていないものは除外する

```ts
declare module namespace {
    export interface RootObject {
        name: string;
        fullPath: string;
        isDir: boolean;
        lowerFolderContent: RootObject[];
    }
}
```

```js
const dirData = {
    [
        {
            name: "Sample Folder",
            fullPath: "C:Users/username/Music/Sample Folder",
            isDir: true,
            lowerFolderContent: []
        },
        {
            name: "Sample Folder 2",
            fullPath: "C:Users/username/Music/Sample Folder 2",
            isDir: true,
            lowerFolderContent: [
                {
                    name: "Sample Folder",
                    fullPath: "C:Users/username/Music/Sample Folder 2/Sample Folder",
                    isDir: true,
                    lowerFolderContent: []
                },
                {
                    name: "Sample Folder 2",
                    fullPath: "C:Users/username/Music/Sample Folder 2/Sample Folder 2",
                    isDir: true,
                    lowerFolderContent: [
                        {
                            name: "Sample Folder",
                            fullPath: "C:Users/username/Music/Sample Folder 2/Sample Folder",
                            isDir: true,
                            lowerFolderContent: []
                        }
                        
                    ]
                },
                {
                    name: "mymusic.mp3",
                    fullPath: "C:Users/username/Music/Sample Folder 2/mymusic.mp3",
                    isDir: false,
                },
            ]
        },
        {
            name: "mymusic.mp3",
            fullPath: "C:Users/username/Music/mymusic.mp3",
            isDir: false,
        },
    ]
}
```