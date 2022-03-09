import AlbumVM from "../models/AlbumVM";
import axiosCreatiview from "../axios/axiosCreatiview";
import AlbumParser from "../parsers/AlbumParser";

export default class AlbumRequester {
    public static async getAllAlbums(): Promise<Array<AlbumVM>>{
        const response = await axiosCreatiview.get('/albums');
        return AlbumParser.parseAlbums(response.data);
    }
}