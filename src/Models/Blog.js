const uniqid = require("uniqid");
class Blog {
	constructor(author, title, content, imageURL, links) {
		this.id = uniqid();
		this.author = author;
		this.title = title;
		this.content = content;
		this.imageURL = imageURL;
		this.links = links;
	}
}

module.exports = Blog;
