class BlogLink {
	constructor(id, title) {
		this.id = id;
		this.title = {
			validate: {
				validator: await validateLink(),
				message: "Enter valid blog link in related links"
			},
		};
	}
}
const validateLink = async (blogId) => {
	let result = Blogs.findOne({id: blogId});
	if(result) {
		return true;
	} else {
		return false;
	}
}

module.exports = BlogLink;
