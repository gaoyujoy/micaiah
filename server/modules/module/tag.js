var moment = require('moment');

export default class {
    constructor(mongoose) {
        
        var Schema = mongoose.Schema;

        var tagSchema = new Schema({
            title: String,
            updateDate: {
                type: Date,
                default: Date.now
            }, // 修改时间
            date: {
                type: Date,
                default: Date.now
            } // 创建时间
        });
        tagSchema.virtual('created_at').get(function () {
            return moment(this.date).format('YYYY-MM-DD hh:mm:ss');
        });
        tagSchema.virtual('updated_at').get(function () {
            return moment(this.updateDate).format('YYYY-MM-DD hh:mm:ss');
        });
        var Tag = mongoose.model('Tag', tagSchema);

        this.featchTags = where => { 
            return new Promise((resolve, reject) => {
                Tag.find(where)
					.sort({ date: -1 })
					.exec(function (err, data) {
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
