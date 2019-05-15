module.exports = {
    name: "Atari Jaguar",
    backgroundCSS: "radial-gradient(circle at top left, #000000, #ff0e17)",
    logoPath: "./images/logos/jaguar.png",
    gameList: [
        {
            name: "Tempest 2000",
            releaseDate: "1994",
            launchCommand: "virtualjaguar",
            launchArguments: [
                "-g"
            ],
            romPath: "./roms/tempest",
            boxArt: "./images/jaguar_boxart/tempest-2000.png"
        }
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
