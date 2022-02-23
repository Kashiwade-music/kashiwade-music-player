export const config: api.Config = { musicDataFolderPath: [] };
export const dirData: api.RootObjectOfDirData = {
  currentDirPath: "",
  dirData: [{ name: "", fullPath: "", isDir: false, depth: 0 }],
};

// -------一時的なデータ-------//
export const mainWindowStats: api.MainWindowsStats = {
  viewStats: {
    left: true,
    midUpper: true,
    right: true,
  },
  selectedFolderStats: {
    shouldShowDirPathInProjectZone: "",
    openingDirInTree: [],
  },
};
