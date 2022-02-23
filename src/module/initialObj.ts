export const config: api.Config = { musicDataFolderPath: [] };
export const dirData: api.RootObjectOfDirData = {
  currentDirPath: "",
  dirData: [{ name: "", fullPath: "", isDir: false, depth: 0 }],
};

// -------一時的なデータ-------//
export const mainWindowStats: api.MainWindowsStats = {
  viewStats: {
    leftZone: true,
    upperZone: true,
    rightZone: true,
  },
  selectedFolderStats: {
    shouldShowDirPathInProjectZone: "",
    openingDirInTree: [],
  },
};
