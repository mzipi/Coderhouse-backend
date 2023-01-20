import crypto from 'crypto'
import { imagesDao } from '../dao/dao-factory.js';
import LoadImagesRepository from '../repositories/load-images-repository.js';
import ImagesDto from '../dto/load-images-dto.js';

export default class ProductsService {
    constructor() {
        this.loadImagesRepository = new LoadImagesRepository(imagesDao);
    }

    async setData({body}) {
        const image = new ImagesDto({ ...body });
        await this.loadImagesRepository.setData(image);
        return image.asDto();
    }
}