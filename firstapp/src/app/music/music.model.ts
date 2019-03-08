export interface IMusic {
    _id: string;
    artists: {
        id: number;
        name: string;
        cover: string;
        bio: string;
        albums: {
            albumId: string;
            title: string;
            year: number,
            cover: string;
            price: number;
          };
        genre: string;
    };
}
/*

export interface Imusic {
    _id: string;
    artists: Iartist[];
}

export interface Iartist {
    id: number;
    name: string;
    cover: string;
    bio: string;
    albums: Ialbum[];
    genre: string;
}

export interface Ialbum {
    albumId: string;
    title: string;
    year: number;
    cover: string;
    price: number;
}
*/