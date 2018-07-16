var _ = require("underscore");

export default class { 
    constructor(mongoose) {
		this.Users = new (require('./module/users.js'))(mongoose, _);
	}
}
