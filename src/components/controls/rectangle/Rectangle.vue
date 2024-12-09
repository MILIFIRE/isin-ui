<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { RectangleDefaultProps, ContainersProps } from "../controls_props";
import useRectangle from "./useRectangle";
import { compareAndset } from "../../../util";

export interface RectangleProps extends /* @vue-ignore */ ContainersProps {
    thickness?: number;
    cornerRadius?: number;
  }
const props = 
  defineProps(RectangleDefaultProps);
const { node } = useRectangle<RectangleProps>(props as RectangleProps);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, RectangleProps>(node, newValue as RectangleProps, oldVale as RectangleProps);
  },
  { immediate: true }
);
onUnmounted(() => {
  node.dispose();
});
defineExpose({inode:node})

</script>

<template>
  <slot></slot>
</template>

<style lang="less"></style>