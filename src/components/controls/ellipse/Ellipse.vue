<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import {  EllipseDefaultProps,EllipseProps } from "../controlsProps";
import useEllipse from "./useEllipse";
import { compareAndset } from "../../../util";


const props = withDefaults(
  defineProps<EllipseProps>(),
    EllipseDefaultProps
);
const { node } = useEllipse<EllipseProps>(props);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, EllipseProps>(
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
../containers./useEllipse
../props/containers./useEllipse