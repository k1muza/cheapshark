import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  games: Game[] = [
    {
      gameID: "228131",
      steamAppID: "1577630",
      cheapest: "2.99",
      cheapestDealID: "vaPCdOMDFDyWa0iGfBZ8YcR72h3L6%2BrVGJc%2FcNIxWJ4%3D",
      external: "Speed",
      internalName: "SPEED",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1577630/capsule_sm_120.jpg?t=1617422478"
    },
    {
      gameID: "231564",
      steamAppID: "1655560",
      cheapest: "18.99",
      cheapestDealID: "hDAfpPvqpUEUwxgArrL3Az7wGOsOCegIH5IK40K9pKs%3D",
      external: "Speeder",
      internalName: "SPEEDER",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1655560/capsule_sm_120.jpg?t=1624943255"
    },
    {
      gameID: "222995",
      steamAppID: "1402960",
      cheapest: "5.99",
      cheapestDealID: "NY0P9V%2FTHQQRmy%2FzTHvj1MrM3IpqlZExI6fvtgzqfMo%3D",
      external: "Speedily",
      internalName: "SPEEDILY",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1402960/capsule_sm_120.jpg?t=1605194518"
    },
    {
      gameID: "189955",
      steamAppID: "886490",
      cheapest: "0.99",
      cheapestDealID: "md6ke5xlyrZAl52agzt%2FaEAbljqKQocL2XWQ8D7WUrY%3D",
      external: "SPEED BOX",
      internalName: "SPEEDBOX",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/886490/capsule_sm_120.jpg?t=1558394231"
    },
    {
      gameID: "226401",
      steamAppID: "1058280",
      cheapest: "9.99",
      cheapestDealID: "D7B60aEAJYKF1zxiO2irT8rsPyh9tXebmlDJMpV3g4k%3D",
      external: "Speed Limit",
      internalName: "SPEEDLIMIT",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1058280/capsule_sm_120.jpg?t=1630064364"
    },
    {
      gameID: "192359",
      steamAppID: "468670",
      cheapest: "5.99",
      cheapestDealID: "ZFl2kbM%2FIIgDXhP4%2Fi8QEMuiFOjak3ZqZQCuLyqQMUk%3D",
      external: "Speed Brawl",
      internalName: "SPEEDBRAWL",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/468670/capsule_sm_120.jpg?t=1625497949"
    },
    {
      gameID: "224173",
      steamAppID: "1482700",
      cheapest: "2.99",
      cheapestDealID: "ZV2hvsJWJwoUEUiJ1M4hx%2By27UtbQGdVEM4KQtC7zYM%3D",
      external: "Speed Stars",
      internalName: "SPEEDSTARS",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1482700/capsule_sm_120.jpg?t=1612830067"
    },
    {
      gameID: "109552",
      steamAppID: "284930",
      cheapest: "4.99",
      cheapestDealID: "BpR%2F8mbioPxXtEeg5FXLjGGLg6NAr6AkBZI7D6DdzXs%3D",
      external: "Speed Kills",
      internalName: "SPEEDKILLS",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/284930/capsule_sm_120.jpg?t=1593545307"
    },
    {
      gameID: "143020",
      steamAppID: "347260",
      cheapest: "5.99",
      cheapestDealID: "stMTeBHX2FRRQ7Icfv270mn08YcdWIOicSm2IwvmADA%3D",
      external: "Hyperspeed",
      internalName: "HYPERSPEED",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/347260/capsule_sm_120.jpg?t=1468248847"
    },
    {
      gameID: "229459",
      steamAppID: "1443330",
      cheapest: "14.99",
      cheapestDealID: "%2BXtyehpawHWiT2Pd9%2Bs8U2scYzMFZ%2BKKKp9Cy5zn8LA%3D",
      external: "Speedy Golf",
      internalName: "SPEEDYGOLF",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1443330/capsule_sm_120.jpg?t=1620274689"
    },
    {
      gameID: "216419",
      steamAppID: "1314930",
      cheapest: "4.99",
      cheapestDealID: "ohSWJnyuhQPoSXLQU85nkD7BrXGjYmnjplJkAhVTrrU%3D",
      external: "Speed Swing",
      internalName: "SPEEDSWING",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1314930/capsule_sm_120.jpg?t=1592553853"
    },
    {
      gameID: "189390",
      steamAppID: "885290",
      cheapest: "2.99",
      cheapestDealID: "%2BJlFt6TYDIXLOB%2FNeC9Ir4UNgvjLKjNJf404PDZok98%3D",
      external: "AceSpeeder3",
      internalName: "ACESPEEDER3",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/885290/capsule_sm_120.jpg?t=1543564164"
    },
    {
      gameID: "177173",
      steamAppID: "755230",
      cheapest: "4.99",
      cheapestDealID: "1%2FPMyLW6DMsNFNQ%2FU8eN1ZEBdttGQXUyv1UBxruDv6I%3D",
      external: "Target speed",
      internalName: "TARGETSPEED",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/755230/capsule_sm_120.jpg?t=1579264565"
    },
    {
      gameID: "186979",
      steamAppID: "847490",
      cheapest: "0.99",
      cheapestDealID: "CDZo5z8Tb7u8GPKdpFOfld9mArLqO6hEUhDC0wZysK0%3D",
      external: "Star Speeder",
      internalName: "STARSPEEDER",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/847490/capsule_sm_120.jpg?t=1621871813"
    },
    {
      gameID: "227680",
      steamAppID: "1562540",
      cheapest: "0.59",
      cheapestDealID: "h9f%2FnMMWuEws7CxWPgJlyS3x186zWUqMhTEL9cSXBgs%3D",
      external: "SpeedingRoad",
      internalName: "SPEEDINGROAD",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1562540/capsule_sm_120.jpg?t=1616579903"
    },
    {
      gameID: "144435",
      steamAppID: "1262540",
      cheapest: "19.99",
      cheapestDealID: "4DNu6mDH9JLRdc0qc0FnutUWcKW8wGs%2F4kDDgmv3nBo%3D",
      external: "Need for Speed",
      internalName: "NEEDFORSPEED",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1262540/capsule_sm_120.jpg?t=1614949605"
    },
    {
      gameID: "145762",
      steamAppID: "333290",
      cheapest: "3.99",
      cheapestDealID: "x%2FHR5flUOeUaAgGtMxR2Y2deFn%2B2%2Fi2vze5jvQdfU30%3D",
      external: "Mos Speedrun 2",
      internalName: "MOSSPEEDRUN2",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/333290/capsule_sm_120.jpg?t=1447365069"
    },
    {
      gameID: "233656",
      steamAppID: "1715220",
      cheapest: "0.99",
      cheapestDealID: "6s0ENQctdYGmmr85T7VSMMF1PHgwSHPVDO79FSFgHeA%3D",
      external: "Extreme Speed",
      internalName: "EXTREMESPEED",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1715220/capsule_sm_120.jpg?t=1629499608"
    },
    {
      gameID: "103513",
      steamAppID: "251690",
      cheapest: "9.99",
      cheapestDealID: "EzBUPKl3XUWAh%2FI3bmMqniExDMbhWFOkhBQsKIMXM2s%3D",
      external: "Speedball 2 HD",
      internalName: "SPEEDBALL2HD",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/251690/capsule_sm_120.jpg?t=1607939946"
    },
    {
      gameID: "101308",
      steamAppID: "207140",
      cheapest: "12.59",
      cheapestDealID: "aLYoBEoNvRabN%2BY8TKISFY99l6do0i5WPs2hqsCzoJM%3D",
      external: "SpeedRunners",
      internalName: "SPEEDRUNNERS",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/207140/capsule_sm_120.jpg?t=1631522005"
    },
    {
      gameID: "213669",
      steamAppID: "1271520",
      cheapest: "4.99",
      cheapestDealID: "Iw8i7a6aqxdV4o428qUUNVDyDbhgWW2IwyjQRU4hdPw%3D",
      external: "SpeedFighter",
      internalName: "SPEEDFIGHTER",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1271520/capsule_sm_120.jpg?t=1615130517"
    },
    {
      gameID: "211707",
      steamAppID: "1248680",
      cheapest: "3.99",
      cheapestDealID: "VEr9rw223y%2B9%2BPtsd%2FKw51UBBkrZfpHD8jg%2FRYsmPcw%3D",
      external: "Speed Sweeper",
      internalName: "SPEEDSWEEPER",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1248680/capsule_sm_120.jpg?t=1583505941"
    },
    {
      gameID: "201515",
      steamAppID: "1073100",
      cheapest: "2.99",
      cheapestDealID: "nBLKYnroQkMeu93Jzq5pYq28oBWOvEDehDmfscJsXkg%3D",
      external: "Speedrun Squad",
      internalName: "SPEEDRUNSQUAD",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1073100/capsule_sm_120.jpg?t=1625938229"
    },
    {
      gameID: "230077",
      steamAppID: "1600810",
      cheapest: "2.99",
      cheapestDealID: "n%2FPRbmDpjwqOPQe4bdJIh8qMA8S81PSzfGOzsw214z0%3D",
      external: "Pixel Speedrun",
      internalName: "PIXELSPEEDRUN",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1600810/capsule_sm_120.jpg?t=1623138374"
    },
    {
      gameID: "201207",
      steamAppID: "1028010",
      cheapest: "1.99",
      cheapestDealID: "gxmg05agLbA2tMcoLELti7z%2B1Qrohlz5iizq0RdVThQ%3D",
      external: "Speedrun Ninja",
      internalName: "SPEEDRUNNINJA",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1028010/capsule_sm_120.jpg?t=1557164925"
    },
    {
      gameID: "91877",
      steamAppID: null,
      cheapest: "1.99",
      cheapestDealID: "KMboHrIbId0ziDrBppjvu6LFpcfz0w3%2Bu5MxI8lcgyI%3D",
      external: "Dino Speedboat",
      internalName: "DINOSPEEDBOAT",
      thumb: "https://gamersgatep.imgix.net/d/8/b/e3734fdbed4641c2f8252c81aebe9b7ad9063b8d.jpg?auto=&w="
    },
    {
      gameID: "168819",
      steamAppID: "588980",
      cheapest: "4.99",
      cheapestDealID: "uwolCVdRFazz8mTWO55DNMJK1G9JNVHFpTHN0P%2FbxNw%3D",
      external: "Speed and Scream",
      internalName: "SPEEDANDSCREAM",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/588980/capsule_sm_120.jpg?t=1511366678"
    },
    {
      gameID: "189757",
      steamAppID: "888480",
      cheapest: "0.99",
      cheapestDealID: "0K25worZl4LnPZKG8Z%2FbrzQbY8OorvKwGDhxsXFEkuw%3D",
      external: "Ninja SpeedRush",
      internalName: "NINJASPEEDRUSH",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/888480/capsule_sm_120.jpg?t=1531939587"
    },
    {
      gameID: "3598",
      steamAppID: null,
      cheapest: "1.99",
      cheapestDealID: "R2S%2FRXU1uFcOUp3A3gy6rNLSDrMwqXo3a6yD8geD7b8%3D",
      external: "FIM Speedway GP 3",
      internalName: "FIMSPEEDWAYGP3",
      thumb: "https://gamersgatep.imgix.net/7/5/1/0a379dc528db588f16abeb4832de973b4157e157.jpg?auto=&w="
    },
    {
      gameID: "175543",
      steamAppID: "566380",
      cheapest: "9.99",
      cheapestDealID: "cFIuXeAj3L%2BtyZU1%2FNtquX%2BYBDL1eUAWmqN4d7Z%2FOJc%3D",
      external: "Speedball Arena",
      internalName: "SPEEDBALLARENA",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/566380/capsule_sm_120.jpg?t=1511948869"
    },
    {
      gameID: "221259",
      steamAppID: "1408550",
      cheapest: "5.99",
      cheapestDealID: "RQJoADXb9VmUHo91BlYkEL19xExlSa6W4nGm1njdwQE%3D",
      external: "Spooky Speedrun",
      internalName: "SPOOKYSPEEDRUN",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1408550/capsule_sm_120.jpg?t=1633614459"
    },
    {
      gameID: "186610",
      steamAppID: "833800",
      cheapest: "0.99",
      cheapestDealID: "LgRvk%2Byt9xK4Uvn%2F%2F17VGTWS8CyxsWWcR3KxvFNhwKY%3D",
      external: "Speed Car Fighter",
      internalName: "SPEEDCARFIGHTER",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/833800/capsule_sm_120.jpg?t=1525162197"
    },
    {
      gameID: "207684",
      steamAppID: "1188690",
      cheapest: "9.99",
      cheapestDealID: "pKkPI69Tzm01su3fj%2FSDSRFtBGR6XeyhGUgiBvCh3cE%3D",
      external: "Speed Masters ASD",
      internalName: "SPEEDMASTERSASD",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1188690/capsule_sm_120.jpg?t=1588379961"
    },
    {
      gameID: "228290",
      steamAppID: "1530370",
      cheapest: "9.99",
      cheapestDealID: "unPPcQKSBNpJxANtVMIw8W6LMFJXkz77HhzT2MUu9ak%3D",
      external: "Speedy Gun Savage",
      internalName: "SPEEDYGUNSAVAGE",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1530370/capsule_sm_120.jpg?t=1623676987"
    },
    {
      gameID: "184130",
      steamAppID: "816660",
      cheapest: "14.99",
      cheapestDealID: "sdsqd7DXJj0LpS8%2FnwdWWdjKUoHq7Ib4SF5OYFaHBz8%3D",
      external: "High Speed Trains",
      internalName: "HIGHSPEEDTRAINS",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/816660/capsule_sm_120.jpg?t=1538987794"
    },
    {
      gameID: "178428",
      steamAppID: "797020",
      cheapest: "9.99",
      cheapestDealID: "CmTmniQVS2oxYL1IDojSGOHqKehA%2FVOXT6oygB1rYy4%3D",
      external: "TinyWar high-speed",
      internalName: "TINYWARHIGHSPEED",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/797020/capsule_sm_120.jpg?t=1519270005"
    },
    {
      gameID: "155313",
      steamAppID: "415900",
      cheapest: "4.99",
      cheapestDealID: "Uqhe%2BpwgXoFpw%2F9xzTDy9fOYE04wsc%2BYiNQZ06DcE70%3D",
      external: "Bugspeed Collider",
      internalName: "BUGSPEEDCOLLIDER",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/415900/capsule_sm_120.jpg?t=1475791212"
    },
    {
      gameID: "202302",
      steamAppID: "1081910",
      cheapest: "9.99",
      cheapestDealID: "0eZ2T5NrZKEk8U2qdqXngQE9P0eqVTdURttla%2BotlwA%3D",
      external: "Fancy Skiing: Speed",
      internalName: "FANCYSKIINGSPEED",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1081910/capsule_sm_120.jpg?t=1565040797"
    },
    {
      gameID: "219319",
      steamAppID: "1378330",
      cheapest: "5.99",
      cheapestDealID: "F1bl3%2FYEAOv24HZqgHtgi2vbqspyxt4NrOEHOFrI4FU%3D",
      external: "Speedgunner Ultra",
      internalName: "SPEEDGUNNERULTRA",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1378330/capsule_sm_120.jpg?t=1597684568"
    },
    {
      gameID: "204096",
      steamAppID: "1222680",
      cheapest: "56.99",
      cheapestDealID: "0h0U8bz%2FVYi%2BmOHY7m%2FhKCXcXQ4fk8udYxgf29bST48%3D",
      external: "Need for Speed Heat",
      internalName: "NEEDFORSPEEDHEAT",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/capsule_sm_120.jpg?t=1620488613"
    },
    {
      gameID: "436",
      steamAppID: "24870",
      cheapest: "9.99",
      cheapestDealID: "RxaZMfiLf%2B8sjzH48UAsEVU%2FWLC2hq9MGJDcj1XTz8g%3D",
      external: "Need for Speed: Shift",
      internalName: "NEEDFORSPEEDSHIFT",
      thumb: "https://us.gamesplanet.com/acache/17/12/1/us/packshot-feab463992d4a89dde00c9e3c52b4e3e.jpg"
    },
    {
      gameID: "174299",
      steamAppID: "577150",
      cheapest: "1.99",
      cheapestDealID: "CyVTFuLgaU8IF8l5AoUIKKpZ6bB5JMUPzD0eGOSt80Y%3D",
      external: "ICEBOX: Speedgunner",
      internalName: "ICEBOXSPEEDGUNNER",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/577150/capsule_sm_120.jpg?t=1572352408"
    },
    {
      gameID: "225019",
      steamAppID: "1260400",
      cheapest: "1.99",
      cheapestDealID: "nkN7uFwj7hi14I%2BQbrOA8VFz6qlrZcu7uxvfP8HAx8M%3D",
      external: "Challenge Speedball",
      internalName: "CHALLENGESPEEDBALL",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1260400/capsule_sm_120.jpg?t=1611579909"
    },
    {
      gameID: "223687",
      steamAppID: "1415520",
      cheapest: "5.07",
      cheapestDealID: "dVG6k0kA7m4eBH%2FbW9iw6xOVMZCKA7hi92JzD1oDzzk%3D",
      external: "High Speed Cataclysm",
      internalName: "HIGHSPEEDCATACLYSM",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1415520/capsule_sm_120.jpg?t=1608780678"
    },
    {
      gameID: "166915",
      steamAppID: "548650",
      cheapest: "14.99",
      cheapestDealID: "ojkKGpv5vVI0Wo7N%2B9rPYqk2izGxg93Qo7EbqEPX8Jo%3D",
      external: "Lightspeed Frontier",
      internalName: "LIGHTSPEEDFRONTIER",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/548650/capsule_sm_120.jpg?t=1572547886"
    },
    {
      gameID: "97955",
      steamAppID: "1262600",
      cheapest: "9.99",
      cheapestDealID: "%2BT%2FLfFUmjxip%2BgWtJkEMC5XPJUDMP2jyvcnaaA948Ug%3D",
      external: "Need for Speed Rivals",
      internalName: "NEEDFORSPEEDRIVALS",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1262600/capsule_sm_120.jpg?t=1625518950"
    },
    {
      gameID: "1616",
      steamAppID: null,
      cheapest: "19.99",
      cheapestDealID: "IKeeZPJvPb2qh34rmqfSY9N9C%2FHddey1rl1tC8OsxgQ%3D",
      external: "Need for Speed The Run",
      internalName: "NEEDFORSPEEDTHERUN",
      thumb: "https://images.2game.com/boxshot/28928_medium.jpg"
    },
    {
      gameID: "141520",
      steamAppID: null,
      cheapest: "6.99",
      cheapestDealID: "yJrJuJD8ahDeH1iD7z9KZEDM%2FQPBlg1n3ggnzgTBLYU%3D",
      external: "The Crew - Speed Car Pack",
      internalName: "THECREWSPEEDCARPACK",
      thumb: "https://hb.imgix.net/6bf99e7a840f828586714e05b42df8ede78e9249.jpg?auto=compress,format&fit=crop&h=84&w=135&s=565134534c566033ab9bd09487b6ae79"
    },
    {
      gameID: "169835",
      steamAppID: "1262580",
      cheapest: "18.99",
      cheapestDealID: "5HbAKHC8Ngc2yV9druAnhgFmzmEjzUFQFJfcjSQ9hls%3D",
      external: "Need for Speed Payback",
      internalName: "NEEDFORSPEEDPAYBACK",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1262580/capsule_sm_120.jpg?t=1615894576"
    },
    {
      gameID: "220236",
      steamAppID: "1393930",
      cheapest: "6.99",
      cheapestDealID: "rt%2BIc%2BwheSugdoWDQBcpMkp5GZfXndxBzbGBo73jKD4%3D",
      external: "Speedway Challenge 20",
      internalName: "SPEEDWAYCHALLENGE20",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1393930/capsule_sm_120.jpg?t=1604335564"
    },
    {
      gameID: "210842",
      steamAppID: "1228450",
      cheapest: "0.99",
      cheapestDealID: "vr0HfuYYUqys16um5Dt4YUVp%2BS6Dh2DRtF14%2BVebq0M%3D",
      external: "Speed And Survive Ball, ",
      internalName: "SPEEDANDSURVIVEBALL",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1228450/capsule_sm_120.jpg?t=1587343799"
    },
    {
      gameID: "190230",
      steamAppID: "850920",
      cheapest: "9.99",
      cheapestDealID: "J8qOPpZV44X1pNVgMHgom8hLk4qk1sNOpHfNlxtqL34%3D",
      external: "Hypersonic Speed Girl / ",
      internalName: "HYPERSONICSPEEDGIRL",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/850920/capsule_sm_120.jpg?t=1525918230"
    },
    {
      gameID: "178157",
      steamAppID: "746400",
      cheapest: "6.99",
      cheapestDealID: "ZTaETRahx9UT5zN%2F7GqUXUazRBAS3UgIGC0wmi%2BzmLU%3D",
      external: "Speed Dating for Ghosts",
      internalName: "SPEEDDATINGFORGHOSTS",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/746400/capsule_sm_120.jpg?t=1617835652"
    },
    {
      gameID: "1756",
      steamAppID: null,
      cheapest: "2.49",
      cheapestDealID: "k6xD%2Bq0p68WkP9fz2lohSUlMaIJ4eCDI8%2FLZl3NeM34%3D",
      external: "FIM Speedway Grand Prix 4",
      internalName: "FIMSPEEDWAYGRANDPRIX4",
      thumb: "https://gamersgatep.imgix.net/9/e/d/bda72f9bec23f9e70e62416da517c9916b0b4de9.jpg?auto=&w="
    },
    {
      gameID: "231887",
      steamAppID: "1589730",
      cheapest: "1.99",
      cheapestDealID: "%2BNxE2BAlUT5WBnZtkIBwG4HZXDvZ43GTd5%2Fs8W9TZlI%3D",
      external: "Escape - The Speedrun Game",
      internalName: "ESCAPETHESPEEDRUNGAME",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1589730/capsule_sm_120.jpg?t=1631514017"
    },
    {
      gameID: "234757",
      steamAppID: "1741210",
      cheapest: "8.99",
      cheapestDealID: "Txei3ZWJYpoHPgCEyYIlk9LQBau4AwZ0DbykS3vlfm0%3D",
      external: "Speedway Challenge 2021",
      internalName: "SPEEDWAYCHALLENGE2021",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1741210/capsule_sm_120.jpg?t=1631861404"
    },
    {
      gameID: "92576",
      steamAppID: "1262560",
      cheapest: "19.99",
      cheapestDealID: "NoLvW0YJlM5XyAi4XT18Ft4acfYHNpWmEerOqe61F%2FU%3D",
      external: "Need for Speed Most Wanted",
      internalName: "NEEDFORSPEEDMOSTWANTED",
      thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/1262560/capsule_sm_120.jpg?t=1605151411"
    },
    {
      gameID: "234620",
      steamAppID: null,
      cheapest: "69.99",
      cheapestDealID: "NDCMWwGgwl%2FlcbEp8wpbUvAcB22vgQry6ZfQQ0GGa3g%3D",
      external: "Need for Speed Heat - Deluxe",
      internalName: "NEEDFORSPEEDHEATDELUXE",
      thumb: "https://static.dlgamer.com/assets/565/60/packshots/need_for_speed_heat_deluxe_edition.jpg?v=20211009072634"
    },
    {
      gameID: "147246",
      steamAppID: "348820",
      cheapest: "3.99",
      cheapestDealID: "JKSvrBSG5qTogg9aKM9lKaEUYDneQwTyA6eDvbrwrMg%3D",
      external: "FIM Speedway Grand Prix 15",
      internalName: "FIMSPEEDWAYGRANDPRIX15",
      thumb: "https://cdn.fanatical.com/production/product/400x225/b01e0174-9604-4774-8ad3-1379e4f84d89.jpeg"
    },
    {
      gameID: "234143",
      steamAppID: null,
      cheapest: "16.99",
      cheapestDealID: "Qw9Eep19187MYUfXT2a1mwc15nlmz%2Ba%2BWjLHc6dmNWk%3D",
      external: "Speed Brawl (Steam Version)",
      internalName: "SPEEDBRAWLSTEAMVERSION",
      thumb: "https://static.voidu.com/cdn-cgi/image/format=auto,width=765,quality=75/images/thumbs/0113044_speed-brawl-steam-version.png"
    }
  ]

  constructor() { }

  getGames(): Observable<Game[]> {
    return of(this.games)
  }
}
