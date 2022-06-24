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
    },
    {
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210105/2021010519275372324.png',
        subText: 'The secretary to the Liyue Qixing. The blood of both human and illuminated beast flows within her veins. <br> Graceful and quiet by nature, yet the gentle disposition of qilin sees not even the slightest conflict with even the most arduous of workloads.',
        erro: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20201231/2020123114334627800.png'
    }
]