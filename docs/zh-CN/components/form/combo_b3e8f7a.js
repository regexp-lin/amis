amis.define('docs/zh-CN/components/form/combo.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Combo 组合",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "Combo",
    "icon": null,
    "order": 12,
    "html": "<div class=\"markdown-body\"><p>用于将多个表单项组合到一起，实现深层结构的数据编辑。</p>\n<p>比如想提交 <code>user.name</code> 这样的数据结构，有两种方法：一种是将表单项的 name 设置为<code>user.name</code>，另一种就是使用 combo。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h2><p>配置<code>controls</code>属性，组合多个表单项</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n      \"type\": \"combo\",\n      \"name\": \"user\",\n      \"label\": \"用户\",\n      \"controls\": [\n        {\n          \"name\": \"text\",\n          \"label\": \"名字\",\n          \"type\": \"text\"\n        },\n        {\n          \"name\": \"gender\",\n          \"label\": \"性别\",\n          \"type\": \"select\",\n          \"options\": [\"男\", \"女\"]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%A4%9A%E8%A1%8C%E5%B1%95%E7%A4%BA%E6%A8%A1%E5%BC%8F\" href=\"#%E5%A4%9A%E8%A1%8C%E5%B1%95%E7%A4%BA%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>多行展示模式</h2><p>默认，combo 内表单项是横着展示一排，如果想换行展示，可以配置<code>&quot;multiLine&quot;: true</code></p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"mode\": \"horizontal\",\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n      \"type\": \"combo\",\n      \"name\": \"combo1\",\n      \"label\": \"Combo 单行展示\",\n      \"controls\": [\n        {\n          \"name\": \"text\",\n          \"label\": \"文本\",\n          \"type\": \"text\"\n        },\n        {\n          \"name\": \"select\",\n          \"label\": \"选项\",\n          \"type\": \"select\",\n          \"options\": [\"a\", \"b\", \"c\"]\n        }\n      ]\n    },\n    {\n        \"type\": \"divider\"\n    },\n    {\n      \"type\": \"combo\",\n      \"name\": \"combo2\",\n      \"label\": \"Combo 多行展示\",\n      \"multiLine\": true,\n      \"controls\": [\n        {\n          \"name\": \"text\",\n          \"label\": \"文本\",\n          \"type\": \"text\"\n        },\n        {\n          \"name\": \"select\",\n          \"label\": \"选项\",\n          \"type\": \"select\",\n          \"options\": [\"a\", \"b\", \"c\"]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%A4%9A%E9%80%89%E6%A8%A1%E5%BC%8F\" href=\"#%E5%A4%9A%E9%80%89%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>多选模式</h2><p>默认，combo 为单选模式，可以配置<code>&quot;multiple&quot;: true</code>实现多选模式。</p>\n<p>这时提交的将会是对象数组。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"mode\": \"horizontal\",\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"debug\": true,\n  \"controls\": [\n    {\n      \"type\": \"combo\",\n      \"name\": \"combo1\",\n      \"label\": \"Combo 单选展示\",\n      \"controls\": [\n        {\n          \"name\": \"text\",\n          \"label\": \"文本\",\n          \"type\": \"text\"\n        },\n        {\n          \"name\": \"select\",\n          \"label\": \"选项\",\n          \"type\": \"select\",\n          \"options\": [\"a\", \"b\", \"c\"]\n        }\n      ]\n    },\n    {\n        \"type\": \"divider\"\n    },\n    {\n      \"type\": \"combo\",\n      \"name\": \"combo2\",\n      \"label\": \"Combo 多选展示\",\n      \"multiple\": true,\n      \"controls\": [\n        {\n          \"name\": \"text\",\n          \"label\": \"文本\",\n          \"type\": \"text\"\n        },\n        {\n          \"name\": \"select\",\n          \"label\": \"选项\",\n          \"type\": \"select\",\n          \"options\": [\"a\", \"b\", \"c\"]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%99%90%E5%88%B6%E4%B8%AA%E6%95%B0\" href=\"#%E9%99%90%E5%88%B6%E4%B8%AA%E6%95%B0\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>限制个数</h2><p>多选模式下，可以配置<code>minLength</code>和<code>maxLength</code>配置该 Combo 可添加的条数</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"mode\": \"horizontal\",\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n      \"type\": \"combo\",\n      \"name\": \"combo1\",\n      \"label\": \"最少添加1条\",\n      \"multiple\": true,\n      \"minLength\": 1,\n      \"controls\": [\n        {\n          \"name\": \"text\",\n          \"label\": \"文本\",\n          \"type\": \"text\"\n        },\n        {\n          \"name\": \"select\",\n          \"label\": \"选项\",\n          \"type\": \"select\",\n          \"options\": [\"a\", \"b\", \"c\"]\n        }\n      ]\n    },\n    {\n      \"type\": \"combo\",\n      \"name\": \"combo2\",\n      \"label\": \"最多添加3条\",\n      \"multiple\": true,\n      \"maxLength\": 3,\n      \"controls\": [\n        {\n          \"name\": \"text\",\n          \"label\": \"文本\",\n          \"type\": \"text\"\n        },\n        {\n          \"name\": \"select\",\n          \"label\": \"选项\",\n          \"type\": \"select\",\n          \"options\": [\"a\", \"b\", \"c\"]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%80%BC%E6%A0%BC%E5%BC%8F\" href=\"#%E5%80%BC%E6%A0%BC%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>值格式</h2><p>观察下例中表单数据域值的变化，可以发现：</p>\n<ul>\n<li>单选模式时，<strong>数据格式为对象</strong>；</li>\n<li>多选模式时，<strong>数据格式为数组，数组成员是对象</strong></li>\n</ul>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"mode\": \"horizontal\",\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n      \"type\": \"combo\",\n      \"name\": \"combo1\",\n      \"label\": \"Combo 单选展示\",\n      \"controls\": [\n        {\n          \"name\": \"text\",\n          \"label\": \"文本\",\n          \"type\": \"text\"\n        },\n        {\n          \"name\": \"select\",\n          \"label\": \"选项\",\n          \"type\": \"select\",\n          \"options\": [\"a\", \"b\", \"c\"]\n        }\n      ]\n    },\n    {\n        \"type\": \"divider\"\n    },\n    {\n      \"type\": \"combo\",\n      \"name\": \"combo2\",\n      \"label\": \"Combo 多选展示\",\n      \"multiple\": true,\n      \"controls\": [\n        {\n          \"name\": \"text\",\n          \"label\": \"文本\",\n          \"type\": \"text\"\n        },\n        {\n          \"name\": \"select\",\n          \"label\": \"选项\",\n          \"type\": \"select\",\n          \"options\": [\"a\", \"b\", \"c\"]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E6%89%93%E5%B9%B3%E5%80%BC\" href=\"#%E6%89%93%E5%B9%B3%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>打平值</h3><p>默认多选模式下，数据格式是对象数组的形式，当你配置的组合中只有一个表单项时，可以配置<code>&quot;flat&quot;: true</code>，将值进行打平处理。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"mode\": \"horizontal\",\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n        \"type\": \"combo\",\n        \"name\": \"combo1\",\n        \"label\": \"默认模式\",\n        \"multiple\": true,\n        \"controls\": [\n            {\n                \"name\": \"text\",\n                \"type\": \"text\"\n            }\n        ]\n    },\n    {\n        \"type\": \"divider\"\n    },\n    {\n        \"type\": \"combo\",\n        \"name\": \"combo2\",\n        \"label\": \"打平模式\",\n        \"multiple\": true,\n        \"flat\": true,\n        \"controls\": [\n            {\n                \"name\": \"text\",\n                \"type\": \"text\"\n            }\n        ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>查看上例表单数据域，可以看到打平后数据格式如下：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"combo2\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">\"aaa\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"bbb\"</span><span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span></code></pre>\n<h2><a class=\"anchor\" name=\"%E5%A2%9E%E5%8A%A0%E5%B1%82%E7%BA%A7\" href=\"#%E5%A2%9E%E5%8A%A0%E5%B1%82%E7%BA%A7\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>增加层级</h2><p>combo 还有一个作用是增加层级，比如返回的数据是一个深层对象</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"a\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"b\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"data\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre>\n<p>如果要用文本框显示，name 必须是 <code>a.b</code>，但使用 combo 创建层级后，name 就可以只是 <code>b</code>：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"a\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"combo\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"noBorder\"</span><span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"multiLine\"</span><span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"controls\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"text\"</span><span class=\"token punctuation\">,</span>\n      <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"b\"</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span></code></pre>\n<p>这样就能结合 <a href=\"../../types/definitions#树形结构\">definitions</a> 实现无限层级结构。</p>\n<h2><a class=\"anchor\" name=\"%E5%94%AF%E4%B8%80%E9%AA%8C%E8%AF%81\" href=\"#%E5%94%AF%E4%B8%80%E9%AA%8C%E8%AF%81\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>唯一验证</h2><p>可以在配置的<code>controls</code>项上，配置<code>&quot;unique&quot;: true</code>，指定当前表单项不可重复</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"mode\": \"horizontal\",\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n        \"type\": \"combo\",\n        \"name\": \"combo666\",\n        \"label\": \"唯一\",\n        \"multiple\": true,\n        \"controls\": [\n            {\n                \"name\": \"text\",\n                \"type\": \"text\",\n                \"placeholder\": \"文本\",\n                \"unique\": true\n            },\n            {\n                \"name\": \"select\",\n                \"type\": \"select\",\n                \"options\": [\n                    \"a\",\n                    \"b\",\n                    \"c\"\n                ],\n                \"unique\": true\n            }\n        ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>上例中，<code>text</code>和<code>select</code>都配置了<code>&quot;unique&quot;: true</code>，新增多条 combo，在任意两个<code>text</code>输入框的值相同时，提交时都会报错<code>&quot;当前值不唯一&quot;</code>，而<code>select</code>选择框也不可选择重复的选项</p>\n<h2><a class=\"anchor\" name=\"%E6%8B%96%E6%8B%BD%E6%8E%92%E5%BA%8F\" href=\"#%E6%8B%96%E6%8B%BD%E6%8E%92%E5%BA%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>拖拽排序</h2><p>多选模式下，可以配置<code>&quot;draggable&quot;: true</code>实现拖拽调整排序</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"mode\": \"horizontal\",\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n        \"type\": \"combo\",\n        \"name\": \"combo\",\n        \"label\": \"拖拽排序\",\n        \"multiple\": true,\n        \"value\": [\n            {\n                \"text\": \"1\",\n                \"select\": \"a\"\n            },\n            {\n                \"text\": \"2\",\n                \"select\": \"b\"\n            }\n        ],\n        \"draggable\": true,\n        \"controls\": [\n            {\n                \"name\": \"text\",\n                \"type\": \"text\"\n            },\n            {\n                \"name\": \"select\",\n                \"type\": \"select\",\n                \"options\": [\n                    \"a\",\n                    \"b\",\n                    \"c\"\n                ]\n            }\n        ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%9D%A1%E4%BB%B6%E5%88%86%E6%94%AF\" href=\"#%E6%9D%A1%E4%BB%B6%E5%88%86%E6%94%AF\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>条件分支</h2><p>默认 Combo 渲染的成员是固定表单项的，成员的类型时一致，如果不一致怎么办？这里可以设置条件分支来给不同的成员设置不同的表单项。</p>\n<p>如下面的例子，定义了两种类型：文本和数字，用户新增的时候可以选择是新增文本还是数字。区分是文字和数字的方式是根据成员数据中的 type 字段来决定。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"form-item\">{\n  \"type\": \"combo\",\n  \"name\": \"combo-conditions2\",\n  \"label\": \"多选\",\n  \"value\": [\n    {\n      \"type\": \"text\"\n    }\n  ],\n  \"multiLine\": true,\n  \"multiple\": true,\n  \"typeSwitchable\": false,\n  \"conditions\": [\n    {\n      \"label\": \"文本\",\n      \"test\": \"this.type === \\\"text\\\"\",\n      \"scaffold\": {\n        \"type\": \"text\",\n        \"label\": \"文本\",\n        \"name\": \"\"\n      },\n      \"controls\": [\n        {\n          \"label\": \"名称\",\n          \"name\": \"label\",\n          \"type\": \"text\"\n        },\n        {\n          \"label\": \"字段名\",\n          \"name\": \"name\",\n          \"type\": \"text\"\n        }\n      ]\n    },\n    {\n      \"label\": \"数字\",\n      \"test\": \"this.type === \\\"number\\\"\",\n      \"scaffold\": {\n        \"type\": \"number\",\n        \"label\": \"数字\",\n        \"name\": \"\"\n      },\n      \"controls\": [\n        {\n          \"label\": \"名称\",\n          \"name\": \"label\",\n          \"type\": \"text\"\n        },\n        {\n          \"label\": \"字段名\",\n          \"name\": \"name\",\n          \"type\": \"text\"\n        },\n        {\n          \"label\": \"最小值\",\n          \"name\": \"min\",\n          \"type\": \"number\"\n        },\n        {\n          \"label\": \"最大值\",\n          \"name\": \"max\",\n          \"type\": \"number\"\n        },\n        {\n          \"label\": \"步长\",\n          \"name\": \"step\",\n          \"type\": \"number\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<ul>\n<li><code>conditions</code> Array<Condition> 数组，每个成员是一种类型</li>\n<li><code>conditions[x].label</code> 类型名称</li>\n<li><code>conditions[x].test</code> 表达式，目标成员数据是否属于这个类型？</li>\n<li><code>conditions[x].scaffold</code> 初始数据，当新增的时候直接使用此数据。</li>\n<li><code>conditions[x].controls</code> 该类型的表单设置。</li>\n<li><code>typeSwitchable</code> 类型是否允许切换，如果设置成 true 会多一个类型切换的按钮。</li>\n</ul>\n<h2><a class=\"anchor\" name=\"tabs-%E6%A8%A1%E5%BC%8F\" href=\"#tabs-%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Tabs 模式</h2><p>默认成员是一个一个排列的，如果数据比较多有点让人眼花缭乱。所以 Combo 支持了 tabs 的排列方式。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"form-item\">{\n  \"type\": \"combo\",\n  \"name\": \"combo101\",\n  \"label\": \"组合多条多行\",\n  \"multiple\": true,\n  \"multiLine\": true,\n  \"value\": [\n    {}\n  ],\n  \"tabsMode\": true,\n  \"tabsStyle\": \"card\",\n  \"maxLength\": 3,\n  \"controls\": [\n    {\n      \"name\": \"a\",\n      \"label\": \"文本\",\n      \"type\": \"text\",\n      \"placeholder\": \"文本\",\n      \"value\": \"\",\n      \"size\": \"full\"\n    },\n    {\n      \"name\": \"b\",\n      \"label\": \"选项\",\n      \"type\": \"select\",\n      \"options\": [\n        \"a\",\n        \"b\",\n        \"c\"\n      ],\n      \"size\": \"full\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<ul>\n<li><code>tabsMode</code> boolean 用来开启此模式</li>\n<li><code>tabsStyle</code> string 样式，可选：<code>line</code>、<code>card</code> 或者 <code>radio</code>.</li>\n<li><code>tabsLabelTpl</code> 用来生成标题的模板，默认为：<code>成员 ${index|plus}</code></li>\n</ul>\n<p>注意：这是新引入的功能，目前还不支持拖拽组合使用。且此模式只有多选时才能生效。</p>\n<h2><a class=\"anchor\" name=\"%E8%8E%B7%E5%8F%96%E7%88%B6%E7%BA%A7%E6%95%B0%E6%8D%AE\" href=\"#%E8%8E%B7%E5%8F%96%E7%88%B6%E7%BA%A7%E6%95%B0%E6%8D%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>获取父级数据</h2><p>默认情况下，Combo 内表达项无法获取父级数据域的数据，如下，我们添加 Combo 表单项时，尽管 Combo 内的文本框的<code>name</code>与父级数据域中的<code>super_text</code>变量同名，但是没有自动映射值。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"mode\": \"horizontal\",\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n        \"type\": \"text\",\n        \"label\": \"父级文本框\",\n        \"name\": \"super_text\",\n        \"value\": \"123\"\n    },\n    {\n        \"type\": \"combo\",\n        \"name\": \"combo1\",\n        \"label\": \"不可获取父级数据\",\n        \"multiple\": true,\n        \"controls\": [\n            {\n                \"name\": \"super_text\",\n                \"type\": \"text\"\n            }\n        ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>可以配置<code>&quot;canAccessSuperData&quot;: true</code>开启此特性，如下，配置了该配置项后，添加 Combo 的<code>text</code>表单项会自动映射父级数据域的同名变量</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"mode\": \"horizontal\",\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n        \"type\": \"text\",\n        \"label\": \"父级文本框\",\n        \"name\": \"super_text\",\n        \"value\": \"123\"\n    },\n    {\n        \"type\": \"combo\",\n        \"name\": \"combo2\",\n        \"label\": \"可获取父级数据\",\n        \"multiple\": true,\n        \"canAccessSuperData\": true,\n        \"controls\": [\n            {\n                \"name\": \"super_text\",\n                \"type\": \"text\"\n            }\n        ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%90%8C%E6%AD%A5%E6%9B%B4%E6%96%B0%E5%86%85%E9%83%A8%E8%A1%A8%E5%8D%95%E9%A1%B9\" href=\"#%E5%90%8C%E6%AD%A5%E6%9B%B4%E6%96%B0%E5%86%85%E9%83%A8%E8%A1%A8%E5%8D%95%E9%A1%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>同步更新内部表单项</h2><p>配置<code>canAccessSuperData</code>可以获取父级数据域值，但是为了效率，在父级数据域变化的时候，默认 combo 内部是不会进行同步的</p>\n<p>如下，添加一组 combo，然后可以看到默认会映射父级变量值<code>123</code>，但是当你在更改父级数据域<code>super_text</code>文本框值后，combo 内部文本框并没有同步更新</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"mode\": \"horizontal\",\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n        \"type\": \"text\",\n        \"label\": \"父级文本框\",\n        \"name\": \"super_text\",\n        \"value\": \"123\"\n    },\n    {\n        \"type\": \"combo\",\n        \"name\": \"combo2\",\n        \"label\": \"可获取父级数据\",\n        \"multiple\": true,\n        \"canAccessSuperData\": true,\n        \"controls\": [\n            {\n                \"name\": \"super_text\",\n                \"type\": \"text\"\n            }\n        ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>如果想实现内部同步更新，需要如下配置：</p>\n<ul>\n<li>配置<code>&quot;strictMode&quot;: false</code></li>\n<li>配置<code>syncFields</code>字符串数组，数组项是需要同步的变量名</li>\n</ul>\n<p>以上面为例，我们在 combo 上配置<code>&quot;strictMode&quot;: false</code>和<code>&quot;syncFields&quot;: [&quot;super_text&quot;]</code>，即可实现同步</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"mode\": \"horizontal\",\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n        \"type\": \"text\",\n        \"label\": \"父级文本框\",\n        \"name\": \"super_text\",\n        \"value\": \"123\"\n    },\n    {\n        \"type\": \"combo\",\n        \"name\": \"combo2\",\n        \"label\": \"可获取父级数据\",\n        \"multiple\": true,\n        \"canAccessSuperData\": true,\n        \"strictMode\": false,\n        \"syncFields\": [\"super_text\"],\n        \"controls\": [\n            {\n                \"name\": \"super_text\",\n                \"type\": \"text\"\n            }\n        ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%AE%BE%E7%BD%AE%E5%BA%8F%E5%8F%B7\" href=\"#%E8%AE%BE%E7%BD%AE%E5%BA%8F%E5%8F%B7\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>设置序号</h2><p>默认 Combo 数据域中，每一项会有一个隐藏变量<code>index</code>，可以利用 Tpl 组件，显示当前项序号</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"mode\": \"horizontal\",\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n        \"type\": \"combo\",\n        \"name\": \"combo\",\n        \"label\": \"显示序号\",\n        \"multiple\": true,\n        \"controls\": [\n            {\n                \"type\": \"tpl\",\n                \"tpl\": \"<%= this.index + 1%>\",\n                \"className\": \"p-t-xs\",\n                \"mode\": \"inline\"\n            },\n            {\n                \"name\": \"text\",\n                \"type\": \"text\"\n            }\n        ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>当做选择器表单项使用时，除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>formClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>单组表单项的类名</td>\n</tr>\n<tr>\n<td>controls</td>\n<td>Array&lt;<a href=\"./formitem\">表单项</a>&gt;</td>\n<td></td>\n<td>组合展示的表单项</td>\n</tr>\n<tr>\n<td>controls[x].columnClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>列的类名，可以用它配置列宽度。默认平均分配。</td>\n</tr>\n<tr>\n<td>controls[x].unique</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>设置当前列值是否唯一，即不允许重复选择。</td>\n</tr>\n<tr>\n<td>multiple</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否多选</td>\n</tr>\n<tr>\n<td>multiLine</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>默认是横着展示一排，设置以后竖着展示</td>\n</tr>\n<tr>\n<td>minLength</td>\n<td><code>number</code></td>\n<td></td>\n<td>最少添加的条数</td>\n</tr>\n<tr>\n<td>maxLength</td>\n<td><code>number</code></td>\n<td></td>\n<td>最多添加的条数</td>\n</tr>\n<tr>\n<td>flat</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否将结果扁平化(去掉 name),只有当 controls 的 length 为 1 且 multiple 为 true 的时候才有效。</td>\n</tr>\n<tr>\n<td>joinValues</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>默认为 <code>true</code> 当扁平化开启的时候，是否用分隔符的形式发送给后端，否则采用 array 的方式。</td>\n</tr>\n<tr>\n<td>delimiter</td>\n<td><code>string</code></td>\n<td><code>false</code></td>\n<td>当扁平化开启并且 joinValues 为 true 时，用什么分隔符。</td>\n</tr>\n<tr>\n<td>addable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否可新增</td>\n</tr>\n<tr>\n<td>removable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否可删除</td>\n</tr>\n<tr>\n<td>deleteApi</td>\n<td><a href=\"../../types/api\">API</a></td>\n<td></td>\n<td>如果配置了，则删除前会发送一个 api，请求成功才完成删除</td>\n</tr>\n<tr>\n<td>deleteConfirmText</td>\n<td><code>string</code></td>\n<td><code>&quot;确认要删除？&quot;</code></td>\n<td>当配置 <code>deleteApi</code> 才生效！删除时用来做用户确认</td>\n</tr>\n<tr>\n<td>draggable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否可以拖动排序, 需要注意的是当启用拖动排序的时候，会多一个$id 字段</td>\n</tr>\n<tr>\n<td>draggableTip</td>\n<td><code>string</code></td>\n<td><code>&quot;可通过拖动每行中的【交换】按钮进行顺序调整&quot;</code></td>\n<td>可拖拽的提示文字</td>\n</tr>\n<tr>\n<td>addButtonText</td>\n<td><code>string</code></td>\n<td><code>&quot;新增&quot;</code></td>\n<td>新增按钮文字</td>\n</tr>\n<tr>\n<td>scaffold</td>\n<td><code>object</code></td>\n<td><code>{}</code></td>\n<td>单组表单项初始值</td>\n</tr>\n<tr>\n<td>canAccessSuperData</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>指定是否可以自动获取上层的数据并映射到表单项上</td>\n</tr>\n<tr>\n<td>conditions</td>\n<td><code>object</code></td>\n<td></td>\n<td>数组的形式包含所有条件的渲染类型，单个数组内的<code>test</code> 为判断条件，数组内的<code>controls</code>为符合该条件后渲染的<code>schema</code></td>\n</tr>\n<tr>\n<td>typeSwitchable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否可切换条件，配合<code>conditions</code>使用</td>\n</tr>\n<tr>\n<td>noBorder</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>单组表单项是否显示边框</td>\n</tr>\n<tr>\n<td>strictMode</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>默认为严格模式，设置为 false 时，当其他表单项更新是，里面的表单项也可以及时获取，否则不会。</td>\n</tr>\n<tr>\n<td>syncFields</td>\n<td><code>Array&lt;string&gt;</code></td>\n<td><code>true</code></td>\n<td>配置同步字段。只有 strictMode 为 false 时有效。如果 combo 层级比较深，底层的获取外层的数据可能不同步。但是给 combo 配置这个属性就能同步下来。输入格式：<code>[&quot;os&quot;]</code></td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本使用",
          "fragment": "%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "level": 2
        },
        {
          "label": "多行展示模式",
          "fragment": "%E5%A4%9A%E8%A1%8C%E5%B1%95%E7%A4%BA%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E5%A4%9A%E8%A1%8C%E5%B1%95%E7%A4%BA%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "多选模式",
          "fragment": "%E5%A4%9A%E9%80%89%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E5%A4%9A%E9%80%89%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "限制个数",
          "fragment": "%E9%99%90%E5%88%B6%E4%B8%AA%E6%95%B0",
          "fullPath": "#%E9%99%90%E5%88%B6%E4%B8%AA%E6%95%B0",
          "level": 2
        },
        {
          "label": "值格式",
          "fragment": "%E5%80%BC%E6%A0%BC%E5%BC%8F",
          "fullPath": "#%E5%80%BC%E6%A0%BC%E5%BC%8F",
          "level": 2,
          "children": [
            {
              "label": "打平值",
              "fragment": "%E6%89%93%E5%B9%B3%E5%80%BC",
              "fullPath": "#%E6%89%93%E5%B9%B3%E5%80%BC",
              "level": 3
            }
          ]
        },
        {
          "label": "增加层级",
          "fragment": "%E5%A2%9E%E5%8A%A0%E5%B1%82%E7%BA%A7",
          "fullPath": "#%E5%A2%9E%E5%8A%A0%E5%B1%82%E7%BA%A7",
          "level": 2
        },
        {
          "label": "唯一验证",
          "fragment": "%E5%94%AF%E4%B8%80%E9%AA%8C%E8%AF%81",
          "fullPath": "#%E5%94%AF%E4%B8%80%E9%AA%8C%E8%AF%81",
          "level": 2
        },
        {
          "label": "拖拽排序",
          "fragment": "%E6%8B%96%E6%8B%BD%E6%8E%92%E5%BA%8F",
          "fullPath": "#%E6%8B%96%E6%8B%BD%E6%8E%92%E5%BA%8F",
          "level": 2
        },
        {
          "label": "条件分支",
          "fragment": "%E6%9D%A1%E4%BB%B6%E5%88%86%E6%94%AF",
          "fullPath": "#%E6%9D%A1%E4%BB%B6%E5%88%86%E6%94%AF",
          "level": 2
        },
        {
          "label": "Tabs 模式",
          "fragment": "tabs-%E6%A8%A1%E5%BC%8F",
          "fullPath": "#tabs-%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "获取父级数据",
          "fragment": "%E8%8E%B7%E5%8F%96%E7%88%B6%E7%BA%A7%E6%95%B0%E6%8D%AE",
          "fullPath": "#%E8%8E%B7%E5%8F%96%E7%88%B6%E7%BA%A7%E6%95%B0%E6%8D%AE",
          "level": 2
        },
        {
          "label": "同步更新内部表单项",
          "fragment": "%E5%90%8C%E6%AD%A5%E6%9B%B4%E6%96%B0%E5%86%85%E9%83%A8%E8%A1%A8%E5%8D%95%E9%A1%B9",
          "fullPath": "#%E5%90%8C%E6%AD%A5%E6%9B%B4%E6%96%B0%E5%86%85%E9%83%A8%E8%A1%A8%E5%8D%95%E9%A1%B9",
          "level": 2
        },
        {
          "label": "设置序号",
          "fragment": "%E8%AE%BE%E7%BD%AE%E5%BA%8F%E5%8F%B7",
          "fullPath": "#%E8%AE%BE%E7%BD%AE%E5%BA%8F%E5%8F%B7",
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
