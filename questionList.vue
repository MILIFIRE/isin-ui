<script setup lang="ts">
import * as BABYLON from "@babylonjs/core";
import * as GUI from "@babylonjs/gui";
import Rectangle from "./src/components/controls/rectangle/Rectangle.vue";
import StackPanel from "./src/components/controls/stackPanel/StackPanel.vue";
import TextBlock from "./src/components/controls/textBlock/TextBlock.vue";
import Image from "./src/components/controls/image/Image.vue";
import ScrollViewer from "./src/components/controls/scrollViewer/ScrollViewer.vue";
import Button from "./src/components/controls/button/button.vue";
import { onMounted, ref } from "vue";
import Grid from "./src/components/controls/grid/Grid.vue";
import btnPx from "./src/assets/btn_bg_px.png";
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
      <Grid
        background="#333333"
        height="500px"
        :isHighlighted="true"
        :row="[{ height: 0.15 }, { height: 0.85 }]"
        :column="[{ width: 1 }]"
      >
        <StackPanel
          horizontalAlignment="left"
          :isHighlighted="true"
          :isVertical="false"
          rowIndex="0"
          columnIndex="0"
        >
          <TextBlock
            width="100px"
            height="40px"
            horizontalAlignment="left"
            color="#FFFFFF"
            fontSize="25"
            text="题库"
          ></TextBlock>

          <!-- <Image height="26px" width="57px" :source="img"></Image> -->
        </StackPanel>

        <ScrollViewer :width="1" :height="1" rowIndex="1" columnIndex="0">
          <StackPanel
            horizontalAlignment="left"
            :isHighlighted="true"
            :isVertical="true"
          >
            <Rectangle
              v-for="(item, index) in ary"
              :key="item"
              :cornerRadius="15"
              width="100%"
              height="60px"
              paddingTop="5px"
              paddingBottom="5px"
              paddingLeft="10px"
              paddingRight="10px"
            >
              <Image
                :isVisible="index === questionIndex"
                height="100%"
                width="100%"
                :source="btnPx"
              >
              </Image>
              <Grid
                :isHighlighted="false"
                :row="[{ height: 1 }]"
                :column="[{ width: 0.8 }, { width: 0.2 }]"
              >
                <TextBlock
                  horizontalAlignment="left"
                  color="#FFFFFF"
                  fontSize="20"
                  text="历史长廊测试题"
                  rowIndex="0"
                  columnIndex="0"
                  width="200px"
                  :onPointerClickObservable="ClickObservable"
                  :onPointerEnterObservable="EnterObservable(index)"
                  :onPointerOutObservable="OutObservable(index)"
                ></TextBlock>
                <Rectangle
                  :cornerRadius="10"
                  width="60px"
                  background="#FFFFFF"
                  height="40px"
                  v-if="index === questionIndex"
                >
                  <TextBlock
                    horizontalAlignment="left"
                    color="#D31145"
                    fontSize="15"
                    text="发布"
                    rowIndex="0"
                    columnIndex="1"
                  ></TextBlock>
                </Rectangle>
              </Grid>
            </Rectangle>
          </StackPanel>
        </ScrollViewer>
      </Grid>
    </Rectangle>
</template>
