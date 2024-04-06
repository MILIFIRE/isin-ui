<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import {  ScrollViewerDefaultProps,ScrollViewerProps } from "../controlsProps";
import useRectangle from "./useScrollViewer";
import { compareAndset } from "../../../util";


const props = withDefaults(
  defineProps<ScrollViewerProps>(),
    ScrollViewerDefaultProps
);
const { node } = useRectangle<ScrollViewerProps>(props);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, ScrollViewerProps>(
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
