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
        coverImage: 'https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Character_Amber_Full_Wish.png/revision/latest?cb=20220507130150',
        iconImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200310/2020031016592515874.png',
        className: 'left-[210px] top-[-45px] item-1' 
    },
    { 
        id: 1, 
        coverImage: 'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Klee_Full_Wish.png/revision/latest?cb=20220507125530',
        iconImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200316/2020031619524764235.png',
        className: 'top-6 right-6 item-2' 
    },
    { 
        id: 2, 
        coverImage: 'https://static.wikia.nocookie.net/gensin-impact/images/0/08/Character_Noelle_Full_Wish.png/revision/latest?cb=20220507161129',
        iconImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200315/2020031517331182257.png', 
        className: 'right-[-45px] top-[180px] item-3' 
    },
    { 
        id: 3, 
        coverImage: 'https://static.wikia.nocookie.net/gensin-impact/images/9/9e/Character_Sucrose_Full_Wish.png/revision/latest?cb=20220507132952',
        iconImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200723/2020072319114696003.png',
        className: 'bottom-6 right-6 item-4' 
    },
    { 
        id: 4, 
        coverImage: 'https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Character_Xiao_Full_Wish.png/revision/latest?cb=20220507154523',
        iconImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200316/2020031619530797687.png', 
        className: 'left-[210px] bottom-[-45px] item-5' 
    },
    { 
        id: 5, 
        coverImage: 'https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Character_Beidou_Full_Wish.png/revision/latest?cb=20220507113330',
        iconImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200316/2020031619533898562.png',
        className: 'bottom-6 left-6 item-6' 
    },
    { 
        id: 6, 
        coverImage: 'https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Character_Qiqi_Full_Wish.png/revision/latest?cb=20220507110008',
        iconImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200828/2020082817144917562.png',
        className: 'left-[-45px] top-[180px] item-7' 
    },
    { 
        id: 7, 
        coverImage: 'https://static.wikia.nocookie.net/gensin-impact/images/b/be/Character_Keqing_Full_Wish.png/revision/latest?cb=20220507113259',
        iconImage: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200828/2020082817192175739.png',
        className: 'top-6 left-6 item-8' 
    },
]

export const PRODUCTS_HOME = [
    {
        coverImage: 'https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Character_Amber_Full_Wish.png/revision/latest?cb=20220507130150',
        description: 'As the only remaining Outrider of the Knights of Favonius, she is always ready to help the citizens of Mondstadt — whether it be something simple or perhaps a more',
        name: 'Amber',
        price: '100,000'
    },
    {
        coverImage: 'https://static.wikia.nocookie.net/gensin-impact/images/2/24/Character_Sangonomiya_Kokomi_Full_Wish.png/revision/latest?cb=20220507131919',
        description: 'As the only remaining Outrider of the Knights of Favonius, she is always ready to help the citizens of Mondstadt — whether it be something simple or perhaps a more',
        name: 'Sangonomiya Kokomi',
        price: '200,000'
    },
    {
        coverImage: 'https://static.wikia.nocookie.net/gensin-impact/images/4/49/Character_Yae_Miko_Full_Wish.png/revision/latest?cb=20220507110641',
        description: 'As the only remaining Outrider of the Knights of Favonius, she is always ready to help the citizens of Mondstadt — whether it be something simple or perhaps a more',
        name: 'Yae Miko',
        price: '150,000'
    },
    {
        coverImage: 'https://static.wikia.nocookie.net/gensin-impact/images/5/59/Character_Hu_Tao_Full_Wish.png/revision/latest?cb=20220507160922',
        description: 'As the only remaining Outrider of the Knights of Favonius, she is always ready to help the citizens of Mondstadt — whether it be something simple or perhaps a more',
        name: 'Hu Tao',
        price: '300,000'
    },
    {
        coverImage: 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Ganyu_Full_Wish.png/revision/latest?cb=20220507132832',
        description: 'She is a half-qilin Adeptus under contract with the Geo Archon Morax and serves as the general secretary of the Liyue Qixing.',
        name: 'Ganyu',
        price: '340,000'
    },
    {
        coverImage: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d0/Character_Kamisato_Ayaka_Full_Wish.png/revision/latest?cb=20220507132731',
        description: 'As the only remaining Outrider of the Knights of Favonius, she is always ready to help the citizens of Mondstadt — whether it be something simple or perhaps a more',
        name: 'Kamisato Ayaka',
        price: '200,000'
    },
    {
        coverImage: 'https://static.wikia.nocookie.net/gensin-impact/images/5/53/Character_Lisa_Full_Wish.png/revision/latest?cb=20220507110102',
        description: 'As the only remaining Outrider of the Knights of Favonius, she is always ready to help the citizens of Mondstadt — whether it be something simple or perhaps a more',
        name: 'Lisa',
        price: '150,000'
    },
    {
        coverImage: 'https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Character_Ningguang_Full_Wish.png/revision/latest?cb=20220507113052',
        description: 'As the only remaining Outrider of the Knights of Favonius, she is always ready to help the citizens of Mondstadt — whether it be something simple or perhaps a more',
        name: 'Ningguang',
        price: '300,000'
    }
]