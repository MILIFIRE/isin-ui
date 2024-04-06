<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import {  ImageDefaultProps,ImageProps } from "../controlsProps";
import useImage from "./useImage";
import { compareAndset } from "../../../util";


const props = withDefaults(
  defineProps<ImageProps>(),
    ImageDefaultProps
);
const { node } = useImage<ImageProps>(props);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, ImageProps>(
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
../containers./useRectangle
../props/containers