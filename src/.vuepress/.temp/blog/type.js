export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-483fcde2","v-4f5506b0","v-77bca968","v-af4f6286","v-7b397e82","v-d385eef2","v-dad37eaa","v-0c493c66","v-da628350","v-1c3fc53b","v-2079e746","v-5800c8f8","v-34c938b0","v-2efb8564","v-50c6a042","v-503e4745","v-426f746a","v-05786844","v-c936af28","v-2c92bec8","v-59b347ce","v-0f4b698a","v-55302989","v-77de7e7a","v-4b613e86"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

