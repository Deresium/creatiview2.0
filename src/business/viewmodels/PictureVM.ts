export default class PictureVM {
    private readonly pictureId: number;
    private readonly aperture: string;
    private readonly speed: string;
    private readonly camera: string;
    private readonly iso: string;
    private readonly focalLength: string;

    constructor(pictureId: number, aperture: string, speed: string, camera: string, iso: string, focalLength: string) {
        this.pictureId = pictureId;
        this.aperture = aperture;
        this.speed = speed;
        this.camera = camera;
        this.iso = iso;
        this.focalLength = focalLength;
    }

}