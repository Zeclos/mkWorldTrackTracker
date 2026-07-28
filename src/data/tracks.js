import mbc from '@/assets/track_images/MBC.png'
import cc from '@/assets/track_images/CC.png'
import ws from '@/assets/track_images/WS.png'
import dks from '@/assets/track_images/DKS.png'
import rdh from '@/assets/track_images/rDH.png'
import rsgb from '@/assets/track_images/rSGB.png'
import rws from '@/assets/track_images/rWS.png'
import raf from '@/assets/track_images/rAF.png'
import rdkp from '@/assets/track_images/rDKP.png'
import sp from '@/assets/track_images/SP.png'
import rshs from '@/assets/track_images/rSHS.png'
import rwsh from '@/assets/track_images/rWSh.png'
import rktb from '@/assets/track_images/rKTB.png'
import fo from '@/assets/track_images/FO.png'
import ps from '@/assets/track_images/PS.png'
import rpb from '@/assets/track_images/rPB.png'
import sss from '@/assets/track_images/SSS.png'
import rddj from '@/assets/track_images/rDDJ.png'
import gbr from '@/assets/track_images/GBR.png'
import ccf from '@/assets/track_images/CCF.png'
import dd from '@/assets/track_images/DD.png'
import bci from '@/assets/track_images/BCi.png'
import dbb from '@/assets/track_images/DBB.png'
import rmmm from '@/assets/track_images/rMMM.png'
import rcm from '@/assets/track_images/rCM.png'
import rtf from '@/assets/track_images/rTF.png'
import bc from '@/assets/track_images/BC.png'
import ah from '@/assets/track_images/AH.png'
import rmc from '@/assets/track_images/rMC.png'
import rr from '@/assets/track_images/RR.png'


export const tracks = [
    {
        id: 1,
        name: "Mario Bros Circuit",
        image: mbc,
        connectsTo: [7, 26, 25, 2, 3, 5, 6]
    },
    {
        id: 2,
        name: "Crown City",
        image: cc,
        connectsTo: [25, 24, 15, 14, 13, 4, 3, 5, 1, 7]
    },
    {
        id: 3,
        name: "Whistlestop Summit",
        image: ws,
        connectsTo: [5, 1, 25, 2, 13, 4]
    },
    {
        id: 4,
        name: "DK Spaceport",
        image: dks,
        connectsTo: [3, 5, 1, 2, 15, 13]
    },
    {
        id: 5,
        name: "Desert Hills",
        image: rdh,
        connectsTo: [6, 1, 2, 13, 3]
    },
    {
        id: 6,
        name: "Shy Guy Bazaar",
        image: rsgb,
        connectsTo: [8, 7, 25, 1, 5]
    },
    {
        id: 7,
        name: "Wario Stadium",
        image: rws,
        connectsTo: [27, 23, 26, 25, 2, 1, 6, 8]
    },
    {
        id: 8,
        name: "Airship Fortress",
        image: raf,
        connectsTo: [27, 23, 26, 7, 6]
    },
    {
        id: 9,
        name: "DK Pass",
        image: rdkp,
        connectsTo: [10, 11, 12, 17, 20, 24, 21]
    },
    {
        id: 10,
        name: "Starview Peak",
        image: sp,
        connectsTo: [11, 12, 9, 20, 21, 29, 22]
    },
    {
        id: 11,
        name: "Sky-High Sundae",
        image: rshs,
        connectsTo: [12, 17, 9, 20, 21, 10]
    },
    {
        id: 12,
        name: "Wario Shipyard",
        image: rwsh,
        connectsTo: [16, 17, 20, 9, 10, 11]
    },
    {
        id: 13,
        name: "Koopa Troope Beach",
        image: rktb,
        connectsTo: [4, 2, 15, 14, 18]
    },
    {
        id: 14,
        name: "Faraway Oasis",
        image: fo,
        connectsTo: [20, 17, 16, 19, 18, 13, 2, 15]
    },
    {
        id: 15,
        name: "Peach Stadium",
        image: ps,
        connectsTo: [24, 20, 14, 13, 2, 25, 26, 30]
    },
    {
        id: 16,
        name: "Peach Beach",
        image: rpb,
        connectsTo: [19, 18, 14, 17, 12]
    },
    {
        id: 17,
        name: "Salty Salty Speedway",
        image: sss,
        connectsTo: [9, 12, 16, 19, 18, 14, 20]
    },
    {
        id: 18,
        name: "Dino Dino Jungle",
        image: rddj,
        connectsTo: [13, 14, 17, 16, 19]
    },
    {
        id: 19,
        name: "Great ? Block Ruins",
        image: gbr,
        connectsTo: [18, 13, 14, 17, 16]
    },
    {
        id: 20,
        name: "Cheep Cheep Falls",
        image: ccf,
        connectsTo: [21, 10, 9, 12, 17, 14, 15, 25, 24]
    },
    {
        id: 21,
        name: "Dandelion Depths",
        image: dd,
        connectsTo: [22, 10, 11, 9, 20, 24, 26, 29, 28]
    },
    {
        id: 22,
        name: "Boo Cinema",
        image: bci,
        connectsTo: [10, 21, 29, 23, 28]
    },
    {
        id: 23,
        name: "Dry Bones Burnout",
        image: dbb,
        connectsTo: [28, 22, 29, 24, 26, 7, 8, 27]
    },
    {
        id: 24,
        name: "Moo Moo Meadows",
        image: rmmm,
        connectsTo: [29, 21, 9, 20, 15, 2, 25, 26, 23]

    },
    {
        id: 25,
        name: "Choco Mountain",
        image: rcm,
        connectsTo: [26, 24, 20, 15, 2, 7, 1, 6, 7, 27]
    },
    {
        id: 26,
        name: "Toad's Factory",
        image: rtf,
        connectsTo: [23, 28, 29, 21, 24, 15, 25, 29, 7, 8, 27]

    },
    {
        id: 27,
        name: "Bowser's Castle",
        image: bc,
        connectsTo: [23, 29, 26, 25, 7, 7, 8]
    },
    {
        id: 28,
        name: "Acorn Heights",
        image: ah,
        connectsTo: [22, 21, 29, 26, 23]

    },
    {
        id: 29,
        name: "Mario Circuit",
        image: rmc,
        connectsTo: [28, 22, 10, 21, 24, 15, 26, 27, 23]
    },
    {
        id: 30,
        name: "Rainbow Road",
        image: rr,
        connectsTo: []
    },
]