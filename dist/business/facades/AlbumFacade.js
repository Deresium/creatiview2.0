"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AlbumVM_1 = __importDefault(require("../viewmodels/AlbumVM"));
const AlbumPicturesVM_1 = __importDefault(require("../viewmodels/AlbumPicturesVM"));
const PictureVM_1 = __importDefault(require("../viewmodels/PictureVM"));
class AlbumFacade {
    constructor(albumDataGateway, pictureDataGateway, fileDataGateway) {
        this.albumDataGateway = albumDataGateway;
        this.pictureDataGateway = pictureDataGateway;
        this.fileDataGateway = fileDataGateway;
    }
    getListAlbums() {
        return __awaiter(this, void 0, void 0, function* () {
            const listAlbums = new Array();
            const albums = yield this.albumDataGateway.getAllAlbums();
            for (const album of albums) {
                const firstPicture = yield this.pictureDataGateway.getFirstPicture(album.getAlbumId());
                listAlbums.push(new AlbumVM_1.default(album.getAlbumId(), album.getName(), firstPicture.getPictureId()));
            }
            return listAlbums;
        });
    }
    getAlbumWithPictures(albumId) {
        return __awaiter(this, void 0, void 0, function* () {
            const album = yield this.albumDataGateway.getAlbum(albumId);
            const pictures = yield this.pictureDataGateway.getPictures(albumId);
            const albumVM = new AlbumVM_1.default(album.getAlbumId(), album.getName(), null);
            const albumPictureVM = new AlbumPicturesVM_1.default(albumVM);
            for (const picture of pictures) {
                const aperture = `f/${picture.getAperture()}`;
                const focalLength = `${picture.getFocalLength()} mm`;
                const iso = `ISO ${picture.getIso()}`;
                const pictureVM = new PictureVM_1.default(picture.getPictureId(), aperture, picture.getSpeed(), picture.getCamera(), iso, focalLength);
                albumPictureVM.addPicture(pictureVM);
            }
            return albumPictureVM;
        });
    }
    getPicture(pictureId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fileDataGateway.getPicture(pictureId);
        });
    }
}
exports.default = AlbumFacade;
//# sourceMappingURL=AlbumFacade.js.map