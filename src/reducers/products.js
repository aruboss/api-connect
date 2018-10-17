var initalState = [
    {
        id: 1,
        name: 'Thiên Quan Tứ Phúc',
        price: 2000000,
        status: true
    },
    {
        id: 2,
        name: 'Ma Đạo Tổ Sư',
        price: 3000000,
        status: false
    },
    {
        id: 3,
        name: 'Hệ Thống Tự Cứu Của Nhân Vật Phản Diện',
        price: 1000000,
        status: true
    }
];

const products = (state = initalState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;