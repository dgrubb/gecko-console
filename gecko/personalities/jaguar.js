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
                "-b",
                "-g",
                "-f",
                "./roms/jaguar/tempest-2000.jag"
            ],
            boxArt: "./images/jaguar_boxart/tempest-2000.png"
        },
        {
            name: "Alien Vs. Predator",
            releaseDate: "1994",
            developer: "Rebellion Developments",
            launchCommand: "virtualjaguar",
            launchArguments: [
                "-b",
                "-g",
                "-f",
                "./roms/jaguar/avp.jag"
            ],
            boxArt: "./images/jaguar_boxart/alien-vs-predator.png"
        },
        {
            name: "Rayman",
            releaseDate: "1995",
            developer: "UbiSoft",
            launchCommand: "virtualjaguar",
            launchArguments: [
                "-b",
                "-g",
                "-f",
                "./roms/jaguar/rayman.jag"
            ],
            boxArt: "./images/jaguar_boxart/rayman.png"
        },
        {
            name: "Zool 2",
            releaseDate: "1993",
            developer: "Imagitec Design",
            launchCommand: "virtualjaguar",
            launchArguments: [
                "-b",
                "-g",
                "-f",
                "./roms/jaguar/zool-2.jag"
            ],
            boxArt: "./images/jaguar_boxart/zool-2.png"
        },
    ],
    controller: {
        vid: 4617,
        pid: 6534,
    },
    menuCombo: [
        3,
        13
    ],
    menuControls: {
        left: {
            axis: true,
            id: 0,
            val: -1
        },
        right: {
            axis: true,
            id: 0,
            val: 1
        },
        select: {
            axis: false,
            id: 10,
            val: 1
        }
    }
};
