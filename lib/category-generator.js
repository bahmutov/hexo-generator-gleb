// code copied from hexo-generator-category
'use strict'

const pagination = require('hexo-pagination')

module.exports = function (locals) {
  const config = this.config
  const perPage = config.category_generator.per_page
  const paginationDir = config.pagination_dir || 'page'
  const orderBy = config.category_generator.order_by || '-date'

  console.log('hexo category order by %s perPage %d', orderBy, perPage)

  return locals.categories.reduce((result, category) => {
    if (!category.length) return result

    console.log(
      'by category "%s" %d posts',
      category.name,
      category.posts.length,
    )
    const posts = category.posts.sort(orderBy)
    const data = pagination(category.path, posts, {
      perPage,
      layout: ['category', 'archive', 'index'],
      format: paginationDir + '/%d/',
      data: {
        category: category.name,
      },
    })

    return result.concat(data)
  }, [])
}
