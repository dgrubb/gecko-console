module.exports = {
    name: "Sega",
    backgroundCSS: "radial-gradient(circle at top left, #000000, #003883)",
    logoPath: "./images/logos/sega.png",
    emblemPath: "./images/logos/sonic_emblem.png",
    gameList: [
        {
            name: "Sonic the Hedgehog",
            releaseDate: "1991",
            developer: "Sega",
            launchCommand: "virtualjaguar",
            launchArguments: [
                "-g"
            ],
            romPath: "./roms/tempest",
            boxArt: "./images/sega_boxart/sonic-1.png"
        },
        {
            name: "Sonic the Hedgehog 2",
            releaseDate: "1992",
            developer: "Sega Technical Institute",
            launchCommand: "virtualjaguar",
            launchArguments: [
                "-g"
            ],
            romPath: "./roms/avp",
            boxArt: "./images/sega_boxart/sonic-2.png"
        },
        {
            name: "Sonic the Hedgehog 3",
            releaseDate: "1994",
            developer: "Sega",
            launchCommand: "virtualjaguar",
            launchArguments: [
                "-g"
            ],
            romPath: "./roms/rayman",
            boxArt: "./images/sega_boxart/sonic-3.png"
        },
        {
            name: "Sonic and Knuckles",
            releaseDate: "1994",
            developer: "Sega",
            launchCommand: "virtualjaguar",
            launchArguments: [
                "-g"
            ],
            romPath: "./roms/zool_2",
            boxArt: "./images/sega_boxart/sonic-and-knuckles.png"
        },
        {
            name: "Vectorman",
            releaseDate: "1995",
            developer: "BlueSky Software",
            launchCommand: "virtualjaguar",
            launchArguments: [
                "-g"
            ],
            romPath: "./roms/zool_2",
            boxArt: "./images/sega_boxart/vectorman.png"
        },
        {
            name: "Vectorman 2",
            releaseDate: "1996",
            developer: "BlueSky Software",
            launchCommand: "virtualjaguar",
            launchArguments: [
                "-g"
            ],
            romPath: "./roms/zool_2",
            boxArt: "./images/sega_boxart/vectorman-2.png"
        },
    ],
    controller: {
        vid: 2064,
        pid: 58625,
    },
    menuCombo: [
        9,
        0
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
            id: 9,
            val: 1
        }
    }
};
