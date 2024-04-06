<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { InputTextAreaDefaultProps, InputTextAreaProps } from "../controlsProps";
import useInputTextArea from "./useInputTextArea";
import { compareAndset } from "../../../util";

const props = withDefaults(
  defineProps<InputTextAreaProps>(),
  InputTextAreaDefaultProps
);
const { node } = useInputTextArea<InputTextAreaProps>(props);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, InputTextAreaProps>(node, newValue, oldVale);
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