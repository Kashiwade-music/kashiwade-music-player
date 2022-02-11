declare module api {
  export interface Config {
    // 設定情報のやり取り用
    musicDataFolderPath: string[];
  }
  export interface DirData {
    // ディレクトリのファイル情報
    name: string;
    fullPath: string;
    isDir: boolean;
    depth: number;
  }
  export interface RootObjectOfDirData {
    // あるディレクトリのファイル情報を得る際に返すJSON
    currentDirPath: string;
    dirData: DirData[];
  }
}
