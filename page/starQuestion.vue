<script setup lang="ts">
import * as BABYLON from "@babylonjs/core";
import * as GUI from "@babylonjs/gui";
import Rectangle from "../src/components/controls/rectangle/Rectangle.vue";
import StackPanel from "../src/components/controls/stackPanel/StackPanel.vue";
import TextBlock from "../src/components/controls/textBlock/TextBlock.vue";
import Image from "../src/components/controls/image/Image.vue";
import ScrollViewer from "../src/components/controls/scrollViewer/ScrollViewer.vue";
import Button from "../src/components/controls/button/button.vue";
import { onMounted, ref } from "vue";
import Grid from "../src/components/controls/grid/Grid.vue";
import btnPx from "../src/assets/btn_bg_px.png";
import backBtn from "../src/assets/back_btn.png";
import questionIcon from "../src/assets/question_icon.png";
const ary = [
  "历史长廊测试题",
  "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
];
const props = defineProps({
  list: {
    type: Array,
    required: false,
    default: () => {
      return [];
    },
  },
});

let questionIndex = ref(-1);

const EnterObservable = function (index: number) {
  // questionIndex = index;
  console.log("Enter");
  return function () {
    questionIndex.value = index;
  };
};
const OutObservable = function (index: number) {
  // questionIndex = index;
  console.log("Out");
  return function () {
    questionIndex.value = -1;
  };
};
const ClickObservable = function (index: number) {
  // questionIndex = index;
  // return  function()
};
let flag = false;

const name = ref();
const sceneInstance = ref(null);
</script>

<template>
  <Rectangle
    :cornerRadius="20"
    color="#000000"
    background="#313131"
    width="690px"
    height="500px"
  >
    <!-- <Image height="100%" width="100%" :source="bgblack"> </Image> -->
    <StackPanel
                :isHighlighted="true"
                :isVertical="true"
                width="200px"
                height="250px"
    >
      <Image
        rowIndex="0"
        columnIndex="0"
        height="120px"
        width="120px"
        :source="questionIcon"
      >
      </Image>
      <Rectangle
        :cornerRadius="8"
        color="#000000"
        background="#313131"
        height="90px"
        width="120px"
        rowIndex="1"
        columnIndex="0"
        paddingTop="40px"
      >
        <Image height="50px" width="120px" :source="btnPx"> </Image>
        <TextBlock
          horizontalAlignment="left"
          color="#ffffff"
          fontSize="15"
          text="开始答题"
        ></TextBlock>
      </Rectangle>
    </StackPanel>
  </Rectangle>
</template>
