<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { RadioButtonDefaultProps, ControlProps } from "../controls_props";
import useRadioButton from "./useRadioButton";
import { compareAndset } from "../../../util";

export interface RadioButtonProps extends /* @vue-ignore */ ControlProps {
  thickness?: number;
  group?: string;
  checkSizeRatio?: number;
  background?: string;
  isChecked?: boolean;
}

const props = defineProps(RadioButtonDefaultProps);

const { node } = useRadioButton<RadioButtonProps>(props as RadioButtonProps);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, RadioButtonProps>(node, newValue as RadioButtonProps, oldVale as RadioButtonProps);
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
