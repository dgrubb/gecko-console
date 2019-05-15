module.exports = {
    name: "Atari Jaguar",
    backgroundCSS: "radial-gradient(circle at top left, #000000, #ff0e17)",
    logoPath: "./images/logos/jaguar.png",
    emblemPath: "./images/logos/atari.png",
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
        vid: 3315,
        pid: 58113,
        id: "dgrubb"
    },
    keyInputs: {
        left: 0,
        right: 0,
        up: 0,
        down: 0,
        select: 0
    },
    menuCombo: [
        0,
        0
    ]
};
