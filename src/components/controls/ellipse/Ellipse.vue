<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import {  EllipseDefaultProps,ContainersProps } from "../controls_props";
import useEllipse from "./useEllipse";
import { compareAndset } from "../../../util";

export interface EllipseProps extends /* @vue-ignore */ ContainersProps {
    thickness?: number;
  }
const props =defineProps(EllipseDefaultProps);
const { node } = useEllipse<EllipseProps>(props as EllipseProps);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, EllipseProps>(
     node,
      newValue as EllipseProps,
      oldVale as EllipseProps
    );
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

<style lang="less"></style>
