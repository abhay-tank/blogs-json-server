const uniqid = require("uniqid");
class Blog {
	constructor(author, title, content, imageURL, relatedLinks) {
		this.id = uniqid();
		this.author = author;
		this.title = title;
		this.content = content;
		this.imageURL = imageURL;
		this.relatedLinks = relatedLinks;
	}
}

module.exports = Blog;
