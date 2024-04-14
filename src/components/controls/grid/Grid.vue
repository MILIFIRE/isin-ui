<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { GridDefaultProps, GridProps } from "../controlsProps";
import useGrid from "./useGrid";
import { compareAndset } from "../../../util";

const props = withDefaults(defineProps<GridProps>(), GridDefaultProps);
let prevRow: GridProps["row"] | undefined = undefined;
let prevColumn: GridProps["column"] | undefined = undefined;
const { node } = useGrid<GridProps>(props);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, GridProps>(node, newValue, oldVale);
  },
  { immediate: true }
);
watch(
  () => props.row,
  (newValue) => {
    // todo 设置 行
    if (prevRow) {
      newValue.forEach((item, index) => {
        if (prevRow && item !== prevRow[index]) {
          node.setRowDefinition(index, item.height, item.isPixel===undefined?false:true);
        }
      });
      if (newValue.length < prevRow.length) {
        for (let i = newValue.length; i++; i < prevRow.length) {
          node.removeRowDefinition(i);
        }
      }
    } else {
      newValue.forEach((item) => {
        node.addRowDefinition(item.height, item.isPixel);
      });
    }

    prevRow = props.row.map((item) => item);
  },
  { immediate: true }
);
watch(
  () => props.column,
  (newValue) => {
    // todo 设置 列
    if (prevColumn) {
      newValue.forEach((item, index) => {
        if (prevColumn && item !== prevColumn[index]) {
          node.setRowDefinition(index, item.width, item.isPixel);
        }
      });
      if (newValue.length < prevColumn.length) {
        for (let i = newValue.length; i++; i < prevColumn.length) {
          node.removeRowDefinition(i);
        }
      }
    } else {

      newValue.forEach((item) => {
        node.addColumnDefinition(item.width, item.isPixel);
      });
    }
    prevColumn = props.column.map((item) => item);
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
