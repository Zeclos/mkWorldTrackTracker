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
        id:"MBC",
        name: "Mario Bros Circuit",
        image: mbc,
        connectsTo: ["rWS", "rTF", "rCM", "CC", "WS", "rDH", "rSGB"]
    },
    {
        id:"CC",
        name: "Crown City",
        image: cc,
        connectsTo: ["rCM", "rMMM", "PS", "FO", "rKTB", "DKS", "WS", "rDH", "MBC", "rWS"]
    },
    {
        id:"WS",
        name: "Whistlestop Summit",
        image: ws,
        connectsTo: ["rDH", "MBC", "rCM", "CC", "rKTB", "DKS"]
    },
    {
        id:"DKS",
        name: "DK Spaceport",
        image: dks,
        connectsTo: ["WS", "rDH", "MBC", "CC", "PS", "rKTB"]
    },
    {
        id:"rDH",
        name: "Desert Hills",
        image: rdh,
        connectsTo: ["rSGB", "MBC", "CC", "rKTB", "WS"]
    },
    {
        id:"rSGB",
        name: "Shy Guy Bazaar",
        image: rsgb,
        connectsTo: ["rAF", "rWS", "rCM", "rMBC", "rDH"]
    },
    {
        id:"rWS",
        name: "Wario Stadium",
        image: rws,
        connectsTo: ["BC", "DBB", "rTF", "rCM", "CC", "MBC", "rSGB", "rAF"]
    },
    {
        id:"rAF",
        name: "Airship Fortress",
        image: raf,
        connectsTo: ["BC", "DBB", "rTF", "rWS", "rSGB"]
    },
    {
        id:"rDKP",
        name: "DK Pass",
        image: rdkp,
        connectsTo: ["SP", "rSHS", "rWSh", "SSS", "CCF", "rMMM", "DD"]
    },
    {
        id:"SP",
        name: "Starview Peak",
        image: sp,
        connectsTo: ["rSHS", "rWSh", "rDKP", "CCF", "DD", "rMC", "BCi"]
    },
    {
        id:"rSHS",
        name: "Sky-High Sundae",
        image: rshs,
        connectsTo: ["rWSh", "SSS", "rDKP", "CCF", "DD", "SP"]
    },
    {
        id:"rWSh",
        name: "Wario Shipyard",
        image: rwsh,
        connectsTo: ["rPB", "SSS", "CCF", "rDKP", "SP", "rSHS"]
    },
    {
        id:"rKTB",
        name: "Koopa Troope Beach",
        image: rktb,
        connectsTo: ["DKS", "CC", "PS", "FO", "rDDJ"]
    },
    {
        id:"FO",
        name: "Faraway Oasis",
        image: fo,
        connectsTo: ["CCF", "SSS", "rPB", "GBR", "rDDJ", "rKTB", "CC", "PS"]
    },
    {
        id:"PS",
        name: "Peach Stadium",
        image: ps,
        connectsTo: ["rMMM", "CCF", "FO", "rKTB", "CC", "rCM", "rTF", "RR"]
    },
    {
        id:"rPB",
        name: "Peach Beach",
        image: rpb,
        connectsTo: ["GBR", "rDDJ", "FO", "SSS", "rWSh"]
    },
    {
        id:"SSS",
        name: "Salty Salty Speedway",
        image: sss,
        connectsTo: ["rDKP", "rWSh", "rPB", "GBR", "rDDj", "FO", "CCF"]
    },
    {
        id:"rDDJ",
        name: "Dino Dino Jungle",
        image: rddj,
        connectsTo: ["rKTB", "FO", "SSS", "PB", "GBR"]
    },
    {
        id:"GBR",
        name: "Great ? Block Ruins",
        image: gbr,
        connectsTo: ["rDDJ", "rKTB", "FO", "SSS", "PB"]
    },
    {
        id:"CCF",
        name: "Cheep Cheep Falls",
        image: ccf,
        connectsTo: ["DD", "SP", "rDKP", "rWSh", "SSS", "FO", "PS", "rCM", "rMMM"]
    },
    {
        id:"DD",
        name: "Dandelion Depths",
        image: dd,
        connectsTo: ["BCi", "SP", "rSHS", "rDKPS", "CCF", "rMMM", "rTF", "rMC", "AH"]
    },
    {
        id:"BCi",
        name: "Boo Cinema",
        image: bci,
        connectsTo: ["SP", "DD", "rMC", "DBB", "AH"]
    },
    {
        id:"DBB",
        name: "Dry Bones Burnout",
        image: dbb,
        connectsTo: ["AH", "BCi", "rMC", "rMMM", "rTF", "rWS", "rAF", "BC"]
    },
    {
        id:"rMMM",
        name: "Moo Moo Meadows",
        image: rmmm,
        connectsTo: ["rMC", "DD", "rDKP", "CCF", "PS", "CC", "rCM", "rTF", "DBB"]

    },
    {
        id:"rCM",
        name: "Choco Mountain",
        image: rcm,
        connectsTo: ["rTF", "rMMM", "CCF", "PS", "CC", "rWS", "MBC", "rSGB", "rWS", "BC"]
    },
    {
        id:"rTF",
        name: "Toad's Factory",
        image: rtf,
        connectsTo: ["DBB", "AH", "rMC", "DD", "rMMM", "PS", "rCM", "rMC", "rWS", "rAF", "BC"]

    },
    {
        id:"BC",
        name: "Bowser's Castle",
        image: bc,
        connectsTo: ["DBB", "rMC", "rTF", "rCM", "rWS", "rWS", "rAF"]
    },
    {
        id:"AH",
        name: "Acorn Heights",
        image: ah,
        connectsTo: ["BCi", "DD", "rMC", "rTF", "DBB"]

    },
    {
        id:"rMC",
        name: "Mario Circuit",
        image: rmc,
        connectsTo: ["AH", "BCi", "SP", "DD", "rMMM", "PS", "rTF", "BC", "DBB"]
    },
    {
        id:"RR",
        name: "Rainbow Road",
        image: rr,
        connectsTo: []
    },
]