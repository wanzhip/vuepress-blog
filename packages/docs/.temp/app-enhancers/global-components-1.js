import Vue from 'vue'
Vue.component("OtherComponent", () => import("/Users/zhiepngwan/Desktop/vuepress/packages/docs/docs/.vuepress/components/OtherComponent"))
Vue.component("UpgradePath", () => import("/Users/zhiepngwan/Desktop/vuepress/packages/docs/docs/.vuepress/components/UpgradePath"))
Vue.component("demo-1", () => import("/Users/zhiepngwan/Desktop/vuepress/packages/docs/docs/.vuepress/components/demo-1"))
Vue.component("diagram-markdown-slot-relationship", () => import("/Users/zhiepngwan/Desktop/vuepress/packages/docs/docs/.vuepress/components/diagram-markdown-slot-relationship"))
Vue.component("svg-container", () => import("/Users/zhiepngwan/Desktop/vuepress/packages/docs/docs/.vuepress/components/svg-container"))
Vue.component("Foo-Bar", () => import("/Users/zhiepngwan/Desktop/vuepress/packages/docs/docs/.vuepress/components/Foo/Bar"))

Vue.component("Badge", () => import("/Users/zhiepngwan/Desktop/vuepress/packages/@vuepress/theme-default/global-components/Badge"))
Vue.component("CodeBlock", () => import("/Users/zhiepngwan/Desktop/vuepress/packages/@vuepress/theme-default/global-components/CodeBlock"))
Vue.component("CodeGroup", () => import("/Users/zhiepngwan/Desktop/vuepress/packages/@vuepress/theme-default/global-components/CodeGroup"))


export default {}