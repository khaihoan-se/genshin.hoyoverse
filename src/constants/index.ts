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

// Banner Character Home
export const BANNER_CHARACTER_HOME = [
    {
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20211226/2021122613552422734.png',
        subText: 'Even though she was born in the human world, she ended up being an adepti disciple. She grew up in the mountains far away from Liyue Harbor, her soul bound with red ropes, training both her body and mind. Despite having the elegant temperament of an adeptus, she seems to be shrouded in mystery.',
        check: 'Liyue'
    },
    {
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20191009/2019100914372396510.png',
        subText: 'A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Champion in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.',
        check: 'Mondstadt'
    },
    {
        coverImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210715/2021071516533380974.png',
        subText: 'Daughter of the Yashiro Commission\'s Kamisato Clan from Inazuma. Dignified and elegant, wise and determined. Sincere and pleasant to others. Universally loved by the Inazuma people, she has earned the title of Shirasagi Himegimi.',
        check: 'Inazuma'
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