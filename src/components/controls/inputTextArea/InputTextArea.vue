<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { InputTextAreaDefaultProps, InputTextProps } from "../controls_props";
import useInputTextArea from "./useInputTextArea";
import { compareAndset } from "../../../util";
export interface InputTextAreaProps extends /* @vue-ignore */ InputTextProps {
    outlineWidth?: number;
    outlineColor?: string;
    autoStretchHeight?: boolean;
    height?: string | number;
    maxHeight?: string | number;
}

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

<style lang="less"></style>../controls_props