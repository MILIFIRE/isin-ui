<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { GridDefaultProps, ContainersProps } from "../controls_props";
import useGrid from "./useGrid";
import { compareAndset } from "../../../util";

export interface GridProps extends /* @vue-ignore */  ContainersProps {
    row: Array<{height:number,isPixel?:boolean}>;
    column:  Array<{width:number,isPixel?:boolean}>;
  }

const props = defineProps(GridDefaultProps);
let prevRow: GridProps["row"] | undefined = undefined;
let prevColumn: GridProps["column"] | undefined = undefined;
const { node } = useGrid<GridProps>(props as unknown as GridProps);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, GridProps>(node, newValue as unknown as GridProps, oldVale as unknown  as GridProps);
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
defineExpose({inode:node})

</script>

<template>
  <slot></slot>
</template>

<style lang="less"></style>
../controls_props