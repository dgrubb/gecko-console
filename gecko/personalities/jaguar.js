module.exports = {
    name: "Atari Jaguar",
    backgroundCSS: "radial-gradient(circle at top left, #000000, #ff0e17)",
    logoPath: "./assets/misc/jaguar.png"
    gameList: [
        {
            name: "Tempest 2000",
            releaseDate: "1994",
            launchCommand: "virtualjaguar",
            launchArguments: [
                "-g"
            ],
            romPath: "./roms/tempest",
            boxArt: "./assets/boxart/tempest_box.png"
        }
    ],
    controller: {
        vid: 0,
        pid: 0
    }
};
