export const MENU = [
    { page: 'Trang Chủ', path: '/' },
    { page: 'Sản Phẩm',  path: '/products' },
    { page: 'Nhân Vật',  path: '/character' },
    { 
        page: 'Tư Liệu', 
        path: '/',
        subMenu: [
            { page: 'Giới Thiệu Game', path: '/gmae' },
            { page: 'Thế Giới', path: '/map' },
            { page: 'Truyện Tranh', path: '/manga' },
        ]
    },
    { page: 'Khác', path: '/' }
]