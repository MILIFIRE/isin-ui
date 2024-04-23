<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import {  EllipseDefaultProps,ContainersProps } from "../controls_props";
import useEllipse from "./useEllipse";
import { compareAndset } from "../../../util";

export interface EllipseProps extends /* @vue-ignore */ ContainersProps {
    thickness?: number;
  }
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
