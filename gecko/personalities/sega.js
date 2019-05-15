module.exports = {
    name: "Atari Jaguar",
    backgroundCSS: "radial-gradient(circle at top left, #000000, #003883)",
    logoPath: "./images/logos/sega.png",
    emblemPath: "",
    gameList: [
        {
            name: "Tempest 2000",
            releaseDate: "1994",
            developer: "Llamasoft",
            launchCommand: "virtualjaguar",
            launchArguments: [
                "-g"
            ],
            romPath: "./roms/tempest",
            boxArt: "./images/jaguar_boxart/tempest-2000.png"
        },
        {
            name: "Alien Vs. Predator",
            releaseDate: "1994",
            developer: "Rebellion Developments",
            launchCommand: "virtualjaguar",
            launchArguments: [
                "-g"
            ],
            romPath: "./roms/avp",
            boxArt: "./images/jaguar_boxart/alien-vs-predator.png"
        },
        {
            name: "Rayman",
            releaseDate: "1995",
            developer: "UbiSoft",
            launchCommand: "virtualjaguar",
            launchArguments: [
                "-g"
            ],
            romPath: "./roms/rayman",
            boxArt: "./images/jaguar_boxart/rayman.png"
        },
        {
            name: "Zool 2",
            releaseDate: "1993",
            developer: "Imagitec Design",
            launchCommand: "virtualjaguar",
            launchArguments: [
                "-g"
            ],
            romPath: "./roms/zool_2",
            boxArt: "./images/jaguar_boxart/zool-2.png"
        },
    ],
    controller: {
        vid: 33150,
        pid: 581130,
        id: "dgrubb"
    },
    menuCombo: [
        0,
        0
    ]
};
