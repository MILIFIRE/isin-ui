<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { InputTextDefaultProps, InputTextProps } from "../controlsProps";
import useInputText from "./useInputText";
import { compareAndset } from "../../../util";

const props = withDefaults(
  defineProps<InputTextProps>(),
  InputTextDefaultProps
);
const { node } = useInputText<InputTextProps>(props);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, InputTextProps>(node, newValue, oldVale);
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
