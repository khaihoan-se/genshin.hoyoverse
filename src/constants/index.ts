export const WEBSITE_URL = 'https://genshin-hoyoverse.vercel.app/';

export const MENU = [
    { page: 'Home', path: '/' },
    { page: 'Products',  path: '/products' },
    { page: 'character',  path: '/character' },
    { 
        page: 'Discover', 
        path: '/game',
        subMenu: [
            { page: 'About Game', path: '/game' },
            { page: 'World', path: '/map' },
            { page: 'Manga', path: '/manga' },
        ]
    },
    { page: 'Other', path: '/other' }
]

// Download Game
export const DOWNLOAD = [
    { pathImage: '/download-game-1.png' },
    { pathImage: '/download-game-2.png' },
    { pathImage: '/download-game-3.png' },
    { pathImage: '/download-game-4.png' },
]
// Banner Character Home
export const BANNER_CHARACTER_HOME = [
    {
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20211226/2021122613552422734.png',
        subText: 'A talented pyrotechnician. The current owner of Naganohara Fireworks known as the "Queen of the Summer Festival. <br> A girl filled with fiery passion. The uncompromising childish innocence and the obsession with craftsmanship intertwine in her to create a spectacular blaze.',
        erro: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210730/2021073011363453824.png'
    },
    {
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210105/2021010519275372324.png',
        subText: 'The secretary to the Liyue Qixing. The blood of both human and illuminated beast flows within her veins. <br> Graceful and quiet by nature, yet the gentle disposition of qilin sees not even the slightest conflict with even the most arduous of workloads.',
        erro: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20201231/2020123114334627800.png'
    },
    {
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210715/2021071516533380974.png',
        subText: 'Daughter of the Yashiro Commission\'s Kamisato Clan from Inazuma. Dignified and elegant, wise and determined. <br> Sincere and pleasant to others. Universally loved by the Inazuma people, she has earned the title of Shirasagi Himegimi.',
        erro: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210715/2021071516535197325.png'
    },
    {
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210622/2021062217445558895.png',
        subText: 'A wandering samurai from Inazuma with a modest and gentle personality. <br> Beneath a youthful and carefree demeanor lies a heart that hides a great many burdens from the past. Seemingly easygoing, Kazuha has his own code of conduct.',
        erro: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210622/2021062217451457114.png'
    },
    {
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210803/2021080311565873098.png',
        subText: 'A talented pyrotechnician. The current owner of Naganohara Fireworks known as the "Queen of the Summer Festival. <br> A girl filled with fiery passion. The uncompromising childish innocence and the obsession with craftsmanship intertwine in her to create a spectacular blaze.',
        erro: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210730/2021073011363453824.png'
    }
]
// Products Home
export const CirSlide = [
    { 
        id: 0, 
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20191009/2019100914372396510.png',
        iconImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200310/2020031016592515874.png',
        className: 'left-[210px] top-[-45px] item-1' 
    },
    { 
        id: 1, 
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200103/2020010310582722822.png',
        iconImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200316/2020031619524764235.png',
        className: 'top-6 right-6 item-2' 
    },
    { 
        id: 2, 
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200315/2020031517331523512.png',
        iconImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200315/2020031517331182257.png', 
        className: 'right-[-45px] top-[180px] item-3' 
    },
    { 
        id: 3, 
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200723/2020072319115159476.png',
        iconImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200723/2020072319114696003.png',
        className: 'bottom-6 right-6 item-4' 
    },
    { 
        id: 4, 
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210122/2021012215393946486.png',
        iconImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200316/2020031619530797687.png', 
        className: 'left-[210px] bottom-[-45px] item-5' 
    },
    { 
        id: 5, 
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200227/2020022720085973518.png',
        iconImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200316/2020031619533898562.png',
        className: 'bottom-6 left-6 item-6' 
    },
    { 
        id: 6, 
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200828/2020082817145380161.png',
        iconImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200828/2020082817144917562.png',
        className: 'left-[-45px] top-[180px] item-7' 
    },
    { 
        id: 7, 
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200828/2020082817192486254.png',
        iconImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200828/2020082817192175739.png',
        className: 'top-6 left-6 item-8' 
    },
]