# 接口文档

1、获取所有文章
GET api/article

2、新增文章
POST api/article
参数：title 文章标题，content 文章内容，flag 文章标识（1 新闻动态，2 公司简介）

3、删除文章
DELETE api/article
参数：id 文章id

1、获取所有商品
GET api/goods

2、新增商品
POST api/goods
参数：name 商品名称，describe 商品描述，detail 商品详情，_cate 商品分类，imgs 商品图集

3、删除商品
DELETE api/goods
参数：id 商品id

1、获取所有分类
GET api/cate

2、新增分类
POST api/cate
参数：name 分类名称，sort 分类排序

3、删除分类
DELETE api/cate
参数：id 分类id