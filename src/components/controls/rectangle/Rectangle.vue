<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { RectangleDefaultProps, RectangleProps } from "../controlsProps";
import useRectangle from "./useRectangle";
import { compareAndset } from "../../../util";

const props = withDefaults(
  defineProps<RectangleProps>(),
  RectangleDefaultProps
);
const { node } = useRectangle<RectangleProps>(props);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, RectangleProps>(node, newValue, oldVale);
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
