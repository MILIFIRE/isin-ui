<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { RectangleDefaultProps, ContainersProps } from "../controls_props";
import useRectangle from "./useRectangle";
import { compareAndset } from "../../../util";

export interface RectangleProps extends /* @vue-ignore */ ContainersProps {
    thickness?: number;
    cornerRadius?: number;
  }
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
../controls_props