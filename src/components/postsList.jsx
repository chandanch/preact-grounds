const getPostsData = () => {
	return [
		{ id: 1, text: 'learn Preact', done: false },
		{ id: 2, text: 'make an awesome app', done: false },
	];
};

const PostsList = () => {
	const posts = getPostsData();

	return (
		<div>
			{posts.map((post) => {
				return (
					<li key={post.id}>
						{post.text}
						<button>Add Post!</button>
						<button>Delete Post!</button>
					</li>
				);
			})}
		</div>
	);
};

export default PostsList;
