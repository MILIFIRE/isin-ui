<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { ContainersProps, StackPanelDefaultProps } from "../controls_props";
import useStackPanel from "./stackPanel";
import { compareAndset } from "../../../util";
export interface StackPanelProps extends /* @vue-ignore */ ContainersProps {
  isVertical?: boolean;
}
const props = 
  defineProps(StackPanelDefaultProps);
const { node } = useStackPanel<StackPanelProps>(props as StackPanelProps);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, StackPanelProps>(
     node,
      newValue as StackPanelProps,
      oldVale as StackPanelProps
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
../props/containers
../controls_props