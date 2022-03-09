"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AlbumPicturesVM {
    constructor(album) {
        this.album = album;
        this.pictures = new Array();
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
exports.default = AlbumPicturesVM;
//# sourceMappingURL=AlbumPicturesVM.js.map