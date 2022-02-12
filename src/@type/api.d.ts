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

  // -------一時的なデータ-------//
  export interface ViewStats {
    left: boolean;
    midUpper: boolean;
    right: boolean;
  }

  export interface MainWindowsStats {
    viewStats: ViewStats;
  }
}
