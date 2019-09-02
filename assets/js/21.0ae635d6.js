(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{106:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("本文档以向导的方式引导用户使用material-admin系统做二次开发，\nmaterial-admin项目本身有readme文件，如果你有使用spring boot的和beetl的经验，那么基本上你是用不上本文档了，\n有什么问题直接看代码即可。大多数功能都可以参考代码，即使找不到的google和百度也能帮到你。")]),t._v(" "),r("p",[t._v("但是考虑到有的开发者可能初次使用上述组件，有的甚至刚接触java不久，那么本文当将引导你一步步使用本系统搭建一个后台管理系统，并做二次开发。")]),t._v(" "),t._m(1),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/enilu/material-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("materail-admin"),r("OutboundLink")],1),t._v(" 是一个通用的基础的后台管理系统，它基于"),r("a",{attrs:{href:"https://spring.io/projects/spring-boot/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot2"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://www.bootcss.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootstrap"),r("OutboundLink")],1),t._v("实现。它使用了当下流行的java 框架Spring Boot和基于Materail Design风格的组件构建。内置了权限管理，配置管理，组织机构，用户，定时任务，消息管理等后台常用的基础功能。提炼了典型的业务模型，可以帮助你快速搭建企业级中后台产品系统。")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://material.enilu.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线预览"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://gitee.com/enilu/material-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee地址"),r("OutboundLink")],1)])]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("你需要下载JAVA IDE :Eclipse或者Intellij IDEA")]),t._v(" "),r("p",[t._v("你需要在开发环境中安装Lombook插件，用以生成java entity的set get方法。")]),t._v(" "),r("p",[t._v("你需要在本地安装JDK1.8 ,MySQL5.5+，Maven")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),r("p",[r("a",{attrs:{href:"http://material.enilu.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线 Demo"),r("OutboundLink")],1)]),t._v(" "),t._m(11),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/enilu/material-admin/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Copyright (c) 2017-present enilu")]),t._v(" "),t._m(12),t._v(" "),r("ul",[r("li",[t._v("Bugs: "),r("a",{attrs:{href:"https://github.com/enilu/material-admin/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Issues"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("QQ: 欢迎加入qq交流群 625246117")]),t._v(" "),r("li",[t._v("Gitter: "),r("a",{attrs:{href:"https://gitter.im/material-admin/community",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitter channel"),r("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 简介")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[this._v("#")]),this._v(" 准备")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("如有问题请，欢迎 issue 和 pr")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"技术选型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术选型","aria-hidden":"true"}},[this._v("#")]),this._v(" 技术选型")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("核心框架：spring boot")]),t._v(" "),r("li",[t._v("数据库层：spring data jpa")]),t._v(" "),r("li",[t._v("安全框架：Shiro")]),t._v(" "),r("li",[t._v("数据库连接池：Druid")]),t._v(" "),r("li",[t._v("缓存：Ehcache")]),t._v(" "),r("li",[t._v("前端：Beetl模版+Bootstrap")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能","aria-hidden":"true"}},[this._v("#")]),this._v(" 功能")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("部门管理")]),t._v(" "),r("li",[t._v("用户管理")]),t._v(" "),r("li",[t._v("角色管理")]),t._v(" "),r("li",[t._v("菜单管理")]),t._v(" "),r("li",[t._v("权限分配")]),t._v(" "),r("li",[t._v("参数管理")]),t._v(" "),r("li",[t._v("数据字典")]),t._v(" "),r("li",[t._v("定时任务")]),t._v(" "),r("li",[t._v("业务日志")]),t._v(" "),r("li",[t._v("登录日志")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发","aria-hidden":"true"}},[this._v("#")]),this._v(" 开发")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("克隆本项目")]),t._v(" "),r("li",[t._v("导入idea或者eclipse，确保开发工具安装了lombok插件，如果不了解该插件，请自行搜索")]),t._v(" "),r("li",[t._v("创建数据库："),r("div",{staticClass:"language-sql extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sql"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" material "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),t._v(" utf8 "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLLATE")]),t._v(" utf8_general_ci"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USER")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'material'")]),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'%'")]),t._v(" IDENTIFIED "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'material123'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GRANT")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALL")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("privileges")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" material"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'material'")]),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'%'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nflush "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("privileges")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])]),t._v(" "),r("li",[t._v("更改配置文件中相应数据库配置")]),t._v(" "),r("li",[t._v("material-manage启动的时候会自动创建表并导入src/main/resources/import.sql到数据库中，无需开发手动初始化表结构")]),t._v(" "),r("li",[t._v("启动material-manage中的类：cn.enilu.material.admin.AdminApplication")]),t._v(" "),r("li",[t._v("访问 http://localhost:8085，")]),t._v(" "),r("li",[t._v("登录，用户名密码:admin/admin")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"online-demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#online-demo","aria-hidden":"true"}},[this._v("#")]),this._v(" Online Demo")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"交流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#交流","aria-hidden":"true"}},[this._v("#")]),this._v(" 交流")])}],!1,null,null,null);e.default=s.exports}}]);