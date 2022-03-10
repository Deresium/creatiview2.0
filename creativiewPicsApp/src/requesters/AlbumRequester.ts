import AlbumVM from "../models/AlbumVM";
import axiosCreatiview from "../axios/axiosCreatiview";
import AlbumParser from "../parsers/AlbumParser";
import AlbumPicturesVM from "../models/AlbumPicturesVM";

export default class AlbumRequester {
    public static async getAllAlbums(): Promise<Array<AlbumVM>>{
        const response = await axiosCreatiview.get('/albums');
        return AlbumParser.parseAlbums(response.data);
    }

    public static async getAlbum(albumId: number): Promise<AlbumPicturesVM> {
        const response = await axiosCreatiview.get(`/albums/${albumId}`);
        return AlbumParser.parseAlbumPicture(response.data);
    }
}