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
    leftZone: boolean;
    upperZone: boolean;
    rightZone: boolean;
  }

  export interface SelectedFolderStats {
    shouldShowDirPathInProjectZone: string;
    openingDirInTree: string[];
  }

  export interface MainWindowsStats {
    viewStats: ViewStats;
    selectedFolderStats: SelectedFolderStats;
  }
}
