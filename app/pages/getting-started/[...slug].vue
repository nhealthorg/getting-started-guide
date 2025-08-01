<template>
  <UPage v-if="page" class="px-8 py-8">
    <UPageBody>
      <ContentRenderer
        :value="page"
      />
    </UPageBody>
  </UPage>
</template>
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>