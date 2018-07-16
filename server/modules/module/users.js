import * as api from '../../routes/tools/api.js';
var moment = require('moment');

module.exports = class {
    constructor(mongoose, _) {

        this._ = _;

        var Schema = mongoose.Schema;

        var usersSchema = new Schema({
            nickname: String,
            passWorld: String,
            date: {
                type: Date,
                default: Date.now
            },
        });
        usersSchema.virtual('created_at').get(function () {
            return moment(this.date).format('YYYY-MM-DD hh:mm:ss');
        });
        var Users = mongoose.model('Users', usersSchema);
        this.defaultAdmin();
    }

    defaultAdmin() {
        console.log('11111111111111')
        // var self = this;
        // this.findAdminByName(api.constantValue().admin, function (err, data) {
        //     if (!err && self._.isEmpty(data)) {
        //         var admin =
        //             {
        //                 nickname: api.constantValue().admin,
        //                 passWorld: api.encryption('adminadmin')
        //             }
        //         self.saveAdmin(admin, function (err, data) {
        //             if (err) {
        //                 console.log('admin 用户创建失败');
        //             }
        //             else {
        //                 console.log('admin 用户创建成功！');
        //             }
        //         });
        //     }
        // });
    }
}
