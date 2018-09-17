var moment = require('moment');

export default class {
    constructor(mongoose) {
        
        var Schema = mongoose.Schema;

        var aboutmeSchema = new Schema({
            content: String,
            updateDate: {
                type: Date,
                default: Date.now
            }, // 修改时间
            date: {
                type: Date,
                default: Date.now
            } // 创建时间
        });
        aboutmeSchema.virtual('created_at').get(function () {
            return moment(this.date).format('YYYY-MM-DD hh:mm:ss');
        });
        aboutmeSchema.virtual('updated_at').get(function () {
            return moment(this.updateDate).format('YYYY-MM-DD hh:mm:ss');
        });
        var Aboutme = mongoose.model('Aboutme', aboutmeSchema);
        
        this.featchAboutme = () => { 
            return new Promise((resolve, reject) => {
                Aboutme.findOne({},(err, data) =>{
                    if (err) {
                        reject('数据库错误');
                    } else {
                        resolve({ code: 0, data: data });
                    }
                });
            })
        };
    }
}
