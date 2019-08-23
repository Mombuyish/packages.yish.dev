module.exports = (options = {}, context) => ({
    extendPageData ($page) {
        const { regularPath, frontmatter  } = $page

        frontmatter.meta = []

        if ($page.regularPath.includes('/packages/')) {
            frontmatter.meta.push({
                name: 'docsearch:version',
                content: '1.0.0'
            })
        }
    }
})