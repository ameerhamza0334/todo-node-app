
export default class genericService {
    mongoModel = null
    constructor(mongoModel) {
        this.mongoModel = mongoModel
    }

    genericAdd(collectionModel) {
        return new Promise((resolve, reject) => {
            this.mongoModel.create(collectionModel, (err, res) => err ? reject(err) : resolve(res))
        })
    }

    genericDelete(id) {
        return new Promise((resolve, reject) => {
            this.mongoModel.deleteOne({
                _id: id
            }, (err, res) => err ? reject(err) : resolve(res)
            )

        })
    }

}