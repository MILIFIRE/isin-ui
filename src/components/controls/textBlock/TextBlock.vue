<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { TextBlockDefaultProps,TextBlockProps } from "../controlsProps";
import useTextBlock from "./textBlock";
import { compareAndset } from "../../../util";


const props = withDefaults(
  defineProps<TextBlockProps>(),
    TextBlockDefaultProps
);
const { node } = useTextBlock<TextBlockProps>(props);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, TextBlockProps>(
     node,
      newValue,
      oldVale
    );
  },
  { immediate: true }
);
onUnmounted(() => {
  node.dispose();
});
</script>

<template>
  <slot></slot>
</template>

<style lang="less"></style>
