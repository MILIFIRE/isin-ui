<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { CheckboxDefaultProps, ControlProps } from "../controls_props";
import useCheckbox from "./useCheckbox";
import { compareAndset } from "../../../util";


export interface CheckboxProps extends /* @vue-ignore */ ControlProps {
  thickness?: number;
  checkSizeRatio?: number;
  background?: string;
  isChecked?: boolean;
}
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