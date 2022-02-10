const dirData = [
    {
        name: "Sample Folder",
        fullPath: "C:Users/username/Music/Sample Folder",
        isDir: true,
        lowerFolderContent: [],
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


console.log(JSON.stringify(dirData));