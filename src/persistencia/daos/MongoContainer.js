import { ObjectId } from 'mongodb';

export default class MongoContainer {

    constructor(model){
        this.model = model;
    }

    async getAllData() {
        try {
            return await this.model.find();
        } catch (err) {
            { getalldata: err }
        }
    }

    async setData(dto) {
        try {
            return await this.model.create(dto);
        } catch (err) {
            { setdata: err }
        }
    }

    async getData(id) {
        try {
            return await this.model.findOne({ id });
        } catch (err) {
            { getdata: err }
        }
    }

    async delData(id) {
        try {
            return await this.model.findOneAndDelete({ id });
        } catch (err) {
            { deldata: err }
        }
    }
    
    async updateData(id, body) {
        try {
            return await this.model.findOneAndUpdate({ id }, { $set: body });
        } catch (err) {
            { updatedata: err }
        }
    }
    // async delData(id) {
    //     try {
    //         await this.model.findOneAndDelete({ _id: ObjectId(`${id}`) });
    //     } catch (err) {
    //         { deldata: err }
    //     }
    // }
    
    // async updateData(id, body) {
    //     try {
    //         await this.model.findOneAndUpdate({ _id: ObjectId(`${id}`) }, { $set: body });
    //     } catch (err) {
    //         { updatedata: err }
    //     }
    // }
};