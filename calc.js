function luasPersegi (panjangSisi){
    return panjangSisi * panjangSisi
};

function kelilingPersegi (panjangSisi ){
    return 4 * panjangSisi
};

function luasPersegiPanjang (panjang,lebar){
    return panjang * lebar
};

function kelilingPersegiPanjang (panjang,lebar){
    return 2 * (panjang + lebar)
};

module.exports = {
    luasPersegi,
    kelilingPersegi,
    luasPersegiPanjang,
    kelilingPersegiPanjang
}