amis.define('docs/zh-CN/components/carousel.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Carousel 轮播图",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Carousel 幻灯片",
    "icon": null,
    "order": 33,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"carousel\",\n    \"options\": [\n        {\n            \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2019-12/1577157239810/da6376bf988c.png\"\n        },\n        {\n            \"html\": \"<div style=\\\"width: 100%; height: 300px; background: #e3e3e3; text-align: center; line-height: 300px;\\\">carousel data</div>\"\n        },\n        {\n            \"image\": \"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3893101144,2877209892&fm=23&gp=0.jpg\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;carousel&quot;</code></td>\n<td>指定为 Carousel 渲染器</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td><code>&quot;panel-default&quot;</code></td>\n<td>外层 Dom 的类名</td>\n</tr>\n<tr>\n<td>options</td>\n<td><code>array</code></td>\n<td><code>[]</code></td>\n<td>轮播面板数据</td>\n</tr>\n<tr>\n<td>options.image</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片链接</td>\n</tr>\n<tr>\n<td>options.imageClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片类名</td>\n</tr>\n<tr>\n<td>options.title</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片标题</td>\n</tr>\n<tr>\n<td>options.titleClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片标题类名</td>\n</tr>\n<tr>\n<td>options.description</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片描述</td>\n</tr>\n<tr>\n<td>options.descriptionClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片描述类名</td>\n</tr>\n<tr>\n<td>options.html</td>\n<td><code>string</code></td>\n<td></td>\n<td>HTML 自定义，同<a href=\"./tpl\">Tpl</a>一致</td>\n</tr>\n<tr>\n<td>itemSchema</td>\n<td><code>object</code></td>\n<td></td>\n<td>自定义<code>schema</code>来展示数据</td>\n</tr>\n<tr>\n<td>auto</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否自动轮播</td>\n</tr>\n<tr>\n<td>interval</td>\n<td><code>string</code></td>\n<td><code>5s</code></td>\n<td>切换动画间隔</td>\n</tr>\n<tr>\n<td>duration</td>\n<td><code>string</code></td>\n<td><code>0.5s</code></td>\n<td>切换动画时长</td>\n</tr>\n<tr>\n<td>width</td>\n<td><code>string</code></td>\n<td><code>auto</code></td>\n<td>宽度</td>\n</tr>\n<tr>\n<td>height</td>\n<td><code>string</code></td>\n<td><code>200px</code></td>\n<td>高度</td>\n</tr>\n<tr>\n<td>controls</td>\n<td><code>array</code></td>\n<td><code>[&#39;dots&#39;, &#39;arrows&#39;]</code></td>\n<td>显示左右箭头、底部圆点索引</td>\n</tr>\n<tr>\n<td>controlsTheme</td>\n<td><code>string</code></td>\n<td><code>light</code></td>\n<td>左右箭头、底部圆点索引颜色，默认<code>light</code>，另有<code>dark</code>模式</td>\n</tr>\n<tr>\n<td>animation</td>\n<td><code>string</code></td>\n<td>fade</td>\n<td>切换动画效果，默认<code>fade</code>，另有<code>slide</code>模式</td>\n</tr>\n</tbody></table>\n<ul>\n<li><code>type</code> 请设置成 <code>carousel</code></li>\n<li><code>className</code> 外层 Dom 的类名</li>\n<li><code>options</code> 轮播面板数据，默认<code>[]</code>，支持以下模式<ul>\n<li>图片<ul>\n<li><code>image</code> 图片链接</li>\n<li><code>imageClassName</code> 图片类名</li>\n<li><code>title</code> 图片标题</li>\n<li><code>titleClassName</code> 图片标题类名</li>\n<li><code>description</code> 图片描述</li>\n<li><code>descriptionClassName</code> 图片描述类名</li>\n</ul>\n</li>\n<li><code>html</code> HTML 自定义，同<a href=\"/amis./Tpl\">Tpl</a>一致</li>\n</ul>\n</li>\n<li><code>itemSchema</code> 自定义<code>schema</code>来展示数据</li>\n<li><code>auto</code> 是否自动轮播，默认<code>true</code></li>\n<li><code>interval</code> 切换动画间隔，默认<code>5s</code></li>\n<li><code>duration</code> 切换动画时长，默认<code>0.5s</code></li>\n<li><code>width</code> 宽度，默认<code>auto</code></li>\n<li><code>height</code> 高度，默认<code>200px</code></li>\n<li><code>controls</code> 显示左右箭头、底部圆点索引，默认<code>[&#39;dots&#39;, &#39;arrows&#39;]</code></li>\n<li><code>controlsTheme</code> 左右箭头、底部圆点索引颜色，默认<code>light</code>，另有<code>dark</code>模式</li>\n<li><code>animation</code> 切换动画效果，默认<code>fade</code>，另有<code>slide</code>模式</li>\n</ul>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
