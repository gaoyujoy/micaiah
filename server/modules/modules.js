var _ = require("underscore");

export default class { 
    constructor(mongoose) {
		this.Blog = new (require('./module/blog.js').default)(mongoose);
		this.Tag = new (require('./module/tag.js').default)(mongoose);
		this.Aboutme = new (require('./module/aboutme.js').default)(mongoose);
	}
}
