# yunnanunicom

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1、配置less文件
npm install less  less-loader --save-dev

2、编译打包，删除部分打包后的文件(以.map结尾的)，减小上线文件的大小
 npm run build

3、配置less文件,
npm install less less-loader --save-dev(--save-dev表示不上线)
1、直接下载即可
2、在style样式里边添加<style type="text/css" lang="less" scoped>

<!-- 页面 -->
1、ITree我要种树
2、WePlantTrees我们种树