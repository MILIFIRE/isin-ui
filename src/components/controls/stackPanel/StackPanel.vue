<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { StackPanelProps, StackPanelDefaultProps } from "../controlsProps";
import useStackPanel from "./stackPanel";
import { compareAndset } from "../../../util";

const props = withDefaults(
  defineProps<StackPanelProps>(),
  StackPanelDefaultProps
);
const { node } = useStackPanel(props);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, StackPanelProps>(
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
../props/containers
