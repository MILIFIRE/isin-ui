<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { ContainersDefaultProps, RectangleProps } from "../controlsProps";
import useButton from "./button";
import { compareAndset } from "../../../util";
// todo
interface ButtonProps extends RectangleProps {
  thickness?: number;
  cornerRadius?: number;
}
const props = withDefaults(defineProps<ButtonProps>(), ContainersDefaultProps);
const { node } = useButton<ButtonProps>(props);
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
