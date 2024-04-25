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

const props = 
  defineProps(InputTextAreaDefaultProps);
  
const { node } = useInputTextArea<InputTextAreaProps>(props as InputTextAreaProps);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, InputTextAreaProps>(node, newValue as InputTextAreaProps, oldVale as  InputTextAreaProps);
  },
  { immediate: true }
);
onUnmounted(() => {
  node.dispose();
});
defineExpose({inode:node})

</script>

<template>
  <slot></slot>
</template>

<style lang="less"></style>../controls_props