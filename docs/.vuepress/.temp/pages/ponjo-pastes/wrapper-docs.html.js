import comp from "/Users/benpetrillo/GitHub/Personal/ponjo-docs/docs/.vuepress/.temp/pages/ponjo-pastes/wrapper-docs.html.vue"
const data = JSON.parse("{\"path\":\"/ponjo-pastes/wrapper-docs.html\",\"title\":\"Ponjo Pastes Wrapper\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"ponjo-pastes/wrapper-docs.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}