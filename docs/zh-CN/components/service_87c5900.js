amis.define('docs/zh-CN/components/service.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Service 功能型容器",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Service",
    "icon": null,
    "order": 63,
    "html": "<div class=\"markdown-body\"><p>amis 中部分组件，作为展示组件，自身没有<strong>使用接口初始化数据域的能力</strong>，例如：<a href=\"./table\">Table</a>、<a href=\"./cards\">Cards</a>、<a href=\"./list\">List</a>等，他们需要使用某些配置项，例如<code>source</code>，通过<a href=\"../concepts/data-mapping\">数据映射</a>功能，在当前的 <strong>数据链</strong> 中获取数据，并进行数据展示。</p>\n<p>而<code>Service</code>组件就是专门为该类组件而生，它的功能是：：<strong>配置初始化接口，进行数据域的初始化，然后在<code>Service</code>内容器中配置子组件，这些子组件通过数据链的方法，获取<code>Service</code>所拉取到的数据</strong></p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h2><p>最基本的使用，是配置初始化接口<code>api</code>，将接口返回的数据添加到自身的数据域中，以供子组件通过<a href=\"../concepts/datascope-and-datachain#%E6%95%B0%E6%8D%AE%E9%93%BE\">数据链</a>进行获取使用。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"service\",\n    \"api\": \"https://houtai.baidu.com/api/mock2/page/initData\",\n    \"body\": {\n        \"type\": \"panel\",\n        \"title\": \"$title\",\n        \"body\": \"现在是：${date}\"\n    }\n}\n</script></div><div class=\"markdown-body\">\n<p>你可以通过查看网络面板看到，<code>service</code>接口返回的数据结构为：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"title\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Test Page Component\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"date\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"2017-10-13\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre>\n<p>在<code>service</code>的子组件中，就可以使用<code>${title}</code>和<code>${date}</code>展示数据</p>\n<h2><a class=\"anchor\" name=\"%E5%B1%95%E7%A4%BA%E5%88%97%E8%A1%A8\" href=\"#%E5%B1%95%E7%A4%BA%E5%88%97%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>展示列表</h2><p>另外一种使用较为频繁的场景是：serivce + table 进行列表渲染</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"service\",\n    \"api\": \"https://houtai.baidu.com/api/mock2/crud/table?perPage=5\",\n    \"body\": [\n        {\n            \"type\": \"table\",\n            \"title\": \"表格1\",\n            \"source\": \"$rows\",\n            \"columns\": [\n                {\n                    \"name\": \"engine\",\n                    \"label\": \"Engine\"\n                },\n                {\n                    \"name\": \"version\",\n                    \"label\": \"Version\"\n                }\n            ]\n        },\n        {\n            \"type\": \"table\",\n            \"source\": \"$rows\",\n            \"columns\": [\n                {\n                    \"name\": \"engine\",\n                    \"label\": \"Engine\"\n                },\n                {\n                    \"name\": \"version\",\n                    \"label\": \"Version\"\n                }\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>上例中 service 接口返回数据结构如下：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"ok\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"count\"</span><span class=\"token operator\">:</span> <span class=\"token number\">57</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"rows\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"engine\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Trident\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"browser\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Internet Explorer 4.0\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"platform\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Win 95+\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"version\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"4\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"grade\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"X\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"id\"</span><span class=\"token operator\">:</span> <span class=\"token number\">1</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"engine\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Trident\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"browser\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Internet Explorer 5.0\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"platform\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Win 95+\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"version\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"5\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"grade\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"C\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"id\"</span><span class=\"token operator\">:</span> <span class=\"token number\">2</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"engine\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Trident\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"browser\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Internet Explorer 5.5\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"platform\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Win 95+\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"version\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"5.5\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"grade\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"A\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"id\"</span><span class=\"token operator\">:</span> <span class=\"token number\">3</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"engine\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Trident\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"browser\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Internet Explorer 6\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"platform\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Win 98+\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"version\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"6\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"grade\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"A\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"id\"</span><span class=\"token operator\">:</span> <span class=\"token number\">4</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"engine\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Trident\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"browser\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Internet Explorer 7\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"platform\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Win XP SP2+\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"version\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"7\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"grade\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"A\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"id\"</span><span class=\"token operator\">:</span> <span class=\"token number\">5</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"engine\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Trident\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"browser\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"AOL browser (AOL desktop)\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"platform\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Win XP\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"version\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"6\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"grade\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"A\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"id\"</span><span class=\"token operator\">:</span> <span class=\"token number\">6</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"engine\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Gecko\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"browser\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Firefox 1.0\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"platform\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Win 98+ / OSX.2+\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"version\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"1.7\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"grade\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"A\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"id\"</span><span class=\"token operator\">:</span> <span class=\"token number\">7</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"engine\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Gecko\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"browser\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Firefox 1.5\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"platform\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Win 98+ / OSX.2+\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"version\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"1.8\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"grade\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"A\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"id\"</span><span class=\"token operator\">:</span> <span class=\"token number\">8</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"engine\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Gecko\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"browser\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Firefox 2.0\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"platform\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Win 98+ / OSX.2+\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"version\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"1.8\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"grade\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"A\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"id\"</span><span class=\"token operator\">:</span> <span class=\"token number\">9</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"engine\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Gecko\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"browser\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Firefox 3.0\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"platform\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Win 2k+ / OSX.3+\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"version\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"1.9\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"grade\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"A\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"id\"</span><span class=\"token operator\">:</span> <span class=\"token number\">10</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre>\n<p><code>table</code>中配置<code>source</code>属性为<code>${rows}</code>就可以获取到<code>rows</code>变量的数据，并用于展示。</p>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E6%80%81%E6%B8%B2%E6%9F%93%E9%A1%B5%E9%9D%A2\" href=\"#%E5%8A%A8%E6%80%81%E6%B8%B2%E6%9F%93%E9%A1%B5%E9%9D%A2\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动态渲染页面</h2><p><code>Service</code> 还有个重要的功能就是支持配置 <code>schemaApi</code>，通过它可以实现动态渲染页面内容。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"service\",\n  \"schemaApi\": \"https://houtai.baidu.com/api/mock2/service/schema?type=tabs\"\n}\n</script></div><div class=\"markdown-body\">\n<p>同样观察<code>schemaApi接口</code>返回的数据结构：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"tabs\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"tabs\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"title\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"TabA\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"body\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"卡片A内容\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"title\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"TabB\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"body\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"卡片B内容\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre>\n<p>它将<code>data</code>返回的对象作为 amis 页面配置，进行了解析渲染，实现动态渲染页面的功能。</p>\n<h2><a class=\"anchor\" name=\"%E6%8E%A5%E5%8F%A3%E8%81%94%E5%8A%A8\" href=\"#%E6%8E%A5%E5%8F%A3%E8%81%94%E5%8A%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>接口联动</h2><p><code>api</code>和<code>schemaApi</code>都支持<a href=\"../concepts/linkage#%E6%8E%A5%E5%8F%A3%E8%81%94%E5%8A%A8\">接口联动</a></p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"title\": \"\",\n    \"type\": \"form\",\n    \"api\": \"https://houtai.baidu.com/api/mock/saveForm?waitSeconds=1\",\n    \"mode\": \"horizontal\",\n    \"controls\": [\n        {\n        \"label\": \"数据模板\",\n        \"type\": \"select\",\n        \"name\": \"tpl\",\n        \"value\": \"tpl1\",\n        \"size\": \"sm\",\n        \"options\": [\n            {\n            \"label\": \"模板1\",\n            \"value\": \"tpl1\"\n            },\n            {\n            \"label\": \"模板2\",\n            \"value\": \"tpl2\"\n            },\n            {\n            \"label\": \"模板3\",\n            \"value\": \"tpl3\"\n            }\n        ],\n        \"description\": \"<span class=\\\"text-danger\\\">请修改该下拉选择器查看效果</span>\"\n        },\n        {\n        \"type\": \"service\",\n        \"api\": \"https://houtai.baidu.com/api/mock2/form/initData?tpl=${tpl}\",\n        \"controls\": [\n            {\n            \"label\": \"名称\",\n            \"type\": \"text\",\n            \"name\": \"name\"\n            },\n            {\n            \"label\": \"作者\",\n            \"type\": \"text\",\n            \"name\": \"author\"\n            },\n            {\n            \"label\": \"请求时间\",\n            \"type\": \"datetime\",\n            \"name\": \"date\"\n            }\n        ]\n        }\n    ],\n    \"actions\": []\n}\n</script></div><div class=\"markdown-body\">\n<p>上例可看到，变更<strong>数据模板</strong>的值，会触发 service 重新请求，并更新当前数据域中的数据</p>\n<p>更多相关见<a href=\"../concepts/linkage#%E6%8E%A5%E5%8F%A3%E8%81%94%E5%8A%A8\">接口联动</a></p>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;service&quot;</code></td>\n<td>指定为 service 渲染器</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 Dom 的类名</td>\n</tr>\n<tr>\n<td>body</td>\n<td><a href=\"../types/schemanode\">SchemaNode</a></td>\n<td></td>\n<td>内容容器</td>\n</tr>\n<tr>\n<td>api</td>\n<td><a href=\"../types/api\">api</a></td>\n<td></td>\n<td>初始化数据域接口地址</td>\n</tr>\n<tr>\n<td>initFetch</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否默认拉取</td>\n</tr>\n<tr>\n<td>schemaApi</td>\n<td><a href=\"../types/api\">api</a></td>\n<td></td>\n<td>用来获取远程 Schema 接口地址</td>\n</tr>\n<tr>\n<td>initFetchSchema</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否默认拉取 Schema</td>\n</tr>\n<tr>\n<td>messages</td>\n<td><code>Object</code></td>\n<td></td>\n<td>消息提示覆写，默认消息读取的是接口返回的 toast 提示文字，但是在此可以覆写它。</td>\n</tr>\n<tr>\n<td>messages.fetchSuccess</td>\n<td><code>string</code></td>\n<td></td>\n<td>接口请求成功时的 toast 提示文字</td>\n</tr>\n<tr>\n<td>messages.fetchFailed</td>\n<td><code>string</code></td>\n<td><code>&quot;初始化失败&quot;</code></td>\n<td>接口请求失败时 toast 提示文字</td>\n</tr>\n<tr>\n<td>interval</td>\n<td><code>number</code></td>\n<td></td>\n<td>轮询时间间隔(最低 3000)</td>\n</tr>\n<tr>\n<td>silentPolling</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>配置轮询时是否显示加载动画</td>\n</tr>\n<tr>\n<td>stopAutoRefreshWhen</td>\n<td><a href=\"../concepts/expression\">表达式</a></td>\n<td></td>\n<td>配置停止轮询的条件</td>\n</tr>\n</tbody></table>\n</div>",
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
          "label": "展示列表",
          "fragment": "%E5%B1%95%E7%A4%BA%E5%88%97%E8%A1%A8",
          "fullPath": "#%E5%B1%95%E7%A4%BA%E5%88%97%E8%A1%A8",
          "level": 2
        },
        {
          "label": "动态渲染页面",
          "fragment": "%E5%8A%A8%E6%80%81%E6%B8%B2%E6%9F%93%E9%A1%B5%E9%9D%A2",
          "fullPath": "#%E5%8A%A8%E6%80%81%E6%B8%B2%E6%9F%93%E9%A1%B5%E9%9D%A2",
          "level": 2
        },
        {
          "label": "接口联动",
          "fragment": "%E6%8E%A5%E5%8F%A3%E8%81%94%E5%8A%A8",
          "fullPath": "#%E6%8E%A5%E5%8F%A3%E8%81%94%E5%8A%A8",
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
