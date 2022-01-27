hexo.config.tag_generator = Object.assign(
  {
    per_page: 0,
  },
  hexo.config.tag_generator,
)

hexo.extend.generator.register('tag', require('./lib/tag-generator'))

hexo.config.category_generator = Object.assign(
  {
    per_page: 0,
  },
  hexo.config.category_generator,
)

hexo.extend.generator.register('category', require('./lib/category-generator'))
