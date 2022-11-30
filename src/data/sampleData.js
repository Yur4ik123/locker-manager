export const SampleRequests = [
    {
        "_id": "63878c3d85cf3235521f7f6c",
        "hw": false,
        "corporation": "Realysis",
        "personellId": 1922966,
        "lastName": "Robles",
        "firstName": "Alyssa",
        "gender": "female",
        "employer": "Marketoid",
        "costCenter": 1541,
        "orderNumber": 62,
        "building": "974 Oneida",
        "name": "Bailey Sykes",
        "phone": "+1 (902) 409-2097",
        "email": "baileysykes@marketoid.com"
    },
    {
        "_id": "63878c3d590af836bb3d349b",
        "hw": true,
        "corporation": "Calcula",
        "personellId": 1153649,
        "lastName": "Riggs",
        "firstName": "Winnie",
        "gender": "female",
        "employer": "Playce",
        "costCenter": 1799,
        "orderNumber": 685,
        "building": "701 Loomis",
        "name": "Gay Bowen",
        "phone": "+1 (990) 482-3988",
        "email": "gaybowen@playce.com"
    },
    {
        "_id": "63878c3d5c69d1dbd83bad17",
        "hw": true,
        "corporation": "Canopoly",
        "personellId": 1372344,
        "lastName": "Barrera",
        "firstName": "Jeannie",
        "gender": "female",
        "employer": "Imperium",
        "costCenter": 1352,
        "orderNumber": 625,
        "building": "489 Stouchsburg",
        "name": "Silva William",
        "phone": "+1 (907) 482-3158",
        "email": "silvawilliam@imperium.com"
    },
    {
        "_id": "63878c3d90188c5f4151809c",
        "hw": true,
        "corporation": "Liquidoc",
        "personellId": 1860744,
        "lastName": "Jefferson",
        "firstName": "Martina",
        "gender": "female",
        "employer": "Plasmos",
        "costCenter": 1906,
        "orderNumber": 78,
        "building": "281 Orviston",
        "name": "Althea Lyons",
        "phone": "+1 (966) 426-2471",
        "email": "althealyons@plasmos.com"
    },
    {
        "_id": "63878c3dbf8808ecef943f45",
        "hw": true,
        "corporation": "Zillacom",
        "personellId": 1661353,
        "lastName": "Christian",
        "firstName": "Farrell",
        "gender": "male",
        "employer": "Zillar",
        "costCenter": 1972,
        "orderNumber": 693,
        "building": "154 Grenelefe",
        "name": "Leonard Mcleod",
        "phone": "+1 (837) 493-2607",
        "email": "leonardmcleod@zillar.com"
    },
    {
        "_id": "63878c3d60bf8400ca049165",
        "hw": false,
        "corporation": "Lumbrex",
        "personellId": 1186884,
        "lastName": "Garner",
        "firstName": "Freida",
        "gender": "female",
        "employer": "Hinway",
        "costCenter": 1512,
        "orderNumber": 412,
        "building": "317 Titanic",
        "name": "Mavis Bond",
        "phone": "+1 (850) 416-3884",
        "email": "mavisbond@hinway.com"
    },
    {
        "_id": "63878c3dbd16b4aec080d33b",
        "hw": false,
        "corporation": "Emtrak",
        "personellId": 1085379,
        "lastName": "Stephens",
        "firstName": "Hahn",
        "gender": "male",
        "employer": "Interfind",
        "costCenter": 1219,
        "orderNumber": 623,
        "building": "116 Seymour",
        "name": "Georgette Mcmahon",
        "phone": "+1 (832) 536-2749",
        "email": "georgettemcmahon@interfind.com"
    }
]

export const SampleFree = [
    {
        id: 1,
    },
    {
        id: 2,
    }
]

export const SampleReserved = [
    {
        id: 3,
    },
    {
        id: 4,
    }
]

let merged = [];
merged = [].concat(SampleFree, SampleReserved);
export const SampleAll = merged;