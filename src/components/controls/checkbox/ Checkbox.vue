<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { CheckboxDefaultProps, CheckboxProps } from "../controlsProps";
import useCheckbox from "./useCheckbox";
import { compareAndset } from "../../../util";

const props = withDefaults(
  defineProps<CheckboxProps>(),
  CheckboxDefaultProps
);
const { node } = useCheckbox<CheckboxProps>(props);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, CheckboxProps>(node, newValue, oldVale);
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
./useCheckbox