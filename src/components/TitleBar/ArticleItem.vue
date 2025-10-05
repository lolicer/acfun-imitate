<script lang="ts" setup>
import { ArticleHistoryInfo } from '@/types/HistoryInfo';

const props = defineProps<{
  data: ArticleHistoryInfo;
}>();
console.log(props.data)
</script>

<template>
    
</template>

<style scoped></style>