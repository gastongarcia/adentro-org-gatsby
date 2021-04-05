exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter
}) => {
  const results = await graphql(`
    {
      posts: allDatoCmsBlog {
        nodes {
          slug
        }
      }
    }
  `);

  if (results.errors) {
    reporter.panic("Error fetching data", JSON.stringify(result.errors));
  }

  results.data.posts.nodes.forEach(post => {
    createPage({
      path: `/${post.slug}/`,
      component: require.resolve("./src/templates/posts.js"),
      context: {
        slug: post.slug
      }
    });
  });
};
