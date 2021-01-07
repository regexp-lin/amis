amis.define('docs/zh-CN/components/form/select.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Select 选择器",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "Select 选择器",
    "icon": null,
    "order": 48,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2><p>参考 <a href=\"/amis./options\">Options</a></p>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>options</td>\n<td><code>Array&lt;object&gt;</code>或<code>Array&lt;string&gt;</code></td>\n<td></td>\n<td><a href=\"./options#%E9%9D%99%E6%80%81%E9%80%89%E9%A1%B9%E7%BB%84-options\">选项组</a></td>\n</tr>\n<tr>\n<td>source</td>\n<td><a href=\"../../types/api\">API</a> 或 <a href=\"../../concepts/data-mapping\">数据映射</a></td>\n<td></td>\n<td><a href=\"./options#%E5%8A%A8%E6%80%81%E9%80%89%E9%A1%B9%E7%BB%84-source\">动态选项组</a></td>\n</tr>\n<tr>\n<td>autoComplete</td>\n<td><a href=\"../../types/api\">API</a></td>\n<td></td>\n<td><a href=\"./options#%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8-autocomplete\">自动提示补全</a></td>\n</tr>\n<tr>\n<td>delimeter</td>\n<td><code>string</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E6%8B%BC%E6%8E%A5%E7%AC%A6-delimiter\">拼接符</a></td>\n</tr>\n<tr>\n<td>labelField</td>\n<td><code>string</code></td>\n<td><code>&quot;label&quot;</code></td>\n<td><a href=\"./options#%E9%80%89%E9%A1%B9%E6%A0%87%E7%AD%BE%E5%AD%97%E6%AE%B5-labelfield\">选项标签字段</a></td>\n</tr>\n<tr>\n<td>valueField</td>\n<td><code>string</code></td>\n<td><code>&quot;value&quot;</code></td>\n<td><a href=\"./options#%E9%80%89%E9%A1%B9%E5%80%BC%E5%AD%97%E6%AE%B5-valuefield\">选项值字段</a></td>\n</tr>\n<tr>\n<td>joinValues</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td><a href=\"./options#%E6%8B%BC%E6%8E%A5%E5%80%BC-joinvalues\">拼接值</a></td>\n</tr>\n<tr>\n<td>extractValue</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E6%8F%90%E5%8F%96%E5%A4%9A%E9%80%89%E5%80%BC-extractvalue\">提取值</a></td>\n</tr>\n<tr>\n<td>checkAll</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否支持全选</td>\n</tr>\n<tr>\n<td>checkAllLabel</td>\n<td><code>string</code></td>\n<td><code>全选</code></td>\n<td>全选的文字</td>\n</tr>\n<tr>\n<td>defaultCheckAll</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>默认是否全选</td>\n</tr>\n<tr>\n<td>creatable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E5%89%8D%E7%AB%AF%E6%96%B0%E5%A2%9E-creatable\">新增选项</a></td>\n</tr>\n<tr>\n<td>multiple</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#多选-multiple\">多选</a></td>\n</tr>\n<tr>\n<td>searchable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#检索-searchable\">检索</a></td>\n</tr>\n<tr>\n<td>createBtnLabel</td>\n<td><code>string</code></td>\n<td><code>&quot;新增选项&quot;</code></td>\n<td><a href=\"./options#%E6%96%B0%E5%A2%9E%E9%80%89%E9%A1%B9\">新增选项</a></td>\n</tr>\n<tr>\n<td>addControls</td>\n<td>Array&lt;<a href=\"./formitem\">表单项</a>&gt;</td>\n<td></td>\n<td><a href=\"./options#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%B0%E5%A2%9E%E8%A1%A8%E5%8D%95%E9%A1%B9-addcontrols\">自定义新增表单项</a></td>\n</tr>\n<tr>\n<td>addApi</td>\n<td><a href=\"../types/api\">API</a></td>\n<td></td>\n<td><a href=\"./options#%E9%85%8D%E7%BD%AE%E6%96%B0%E5%A2%9E%E6%8E%A5%E5%8F%A3-addapi\">配置新增选项接口</a></td>\n</tr>\n<tr>\n<td>editable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E5%89%8D%E7%AB%AF%E7%BC%96%E8%BE%91-editable\">编辑选项</a></td>\n</tr>\n<tr>\n<td>editControls</td>\n<td>Array&lt;<a href=\"./formitem\">表单项</a>&gt;</td>\n<td></td>\n<td><a href=\"./options#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BC%96%E8%BE%91%E8%A1%A8%E5%8D%95%E9%A1%B9-editcontrols\">自定义编辑表单项</a></td>\n</tr>\n<tr>\n<td>editApi</td>\n<td><a href=\"../types/api\">API</a></td>\n<td></td>\n<td><a href=\"./options#%E9%85%8D%E7%BD%AE%E7%BC%96%E8%BE%91%E6%8E%A5%E5%8F%A3-editapi\">配置编辑选项接口</a></td>\n</tr>\n<tr>\n<td>removable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E5%88%A0%E9%99%A4%E9%80%89%E9%A1%B9\">删除选项</a></td>\n</tr>\n<tr>\n<td>deleteApi</td>\n<td><a href=\"../types/api\">API</a></td>\n<td></td>\n<td><a href=\"./options#%E9%85%8D%E7%BD%AE%E5%88%A0%E9%99%A4%E6%8E%A5%E5%8F%A3-deleteapi\">配置删除选项接口</a></td>\n</tr>\n<tr>\n<td>autoFill</td>\n<td><code>object</code></td>\n<td></td>\n<td><a href=\"./options#%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85-autofill\">自动填充</a></td>\n</tr>\n</tbody></table>\n</div>",
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
