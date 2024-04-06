<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { RadioButtonDefaultProps, RadioButtonProps } from "../controlsProps";
import useRadioButton from "./useRadioButton";
import { compareAndset } from "../../../util";

const props = withDefaults(
  defineProps<RadioButtonProps>(),
  RadioButtonDefaultProps
);
const { node } = useRadioButton<RadioButtonProps>(props);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, RadioButtonProps>(node, newValue, oldVale);
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