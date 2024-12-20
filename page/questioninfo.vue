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
      :row="[{ height: 0.15 }, { height: 0.7 }, { height: 0.15 }]"
      :column="[{ width: 1 }]"
    >
      <StackPanel
        horizontalAlignment="left"
        :isHighlighted="true"
        :isVertical="false"
        rowIndex="0"
        columnIndex="0"
        paddingLeft="40px"
      >
        <Image height="26px" width="26px" :source="backBtn"></Image>
        <TextBlock
          paddingLeft="40px"
          width="300px"
          height="40px"
          color="#FFFFFF"
          fontSize="25"
          text="「历史长廊」测试题"
        ></TextBlock>
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
            height="122px"
            paddingTop="5px"
            paddingBottom="5px"
            paddingLeft="10px"
            paddingRight="10px"
          >
            <Grid
              :isHighlighted="false"
              :row="[{ height: 4 }, { height: 3 }, { height: 3 }]"
              :column="[{ width: 1 }]"
              horizontalAlignment="center"
            >
              <TextBlock
                rowIndex="0"
                columnIndex="0"
                width="300px"
                height="40px"
                color="#FFFFFF"
                fontSize="20px"
                text="「历史长廊」测试题"
                horizontalAlignment="left"
              ></TextBlock>
              <StackPanel
                horizontalAlignment="left"
                :isHighlighted="true"
                :isVertical="false"
                rowIndex="1"
                columnIndex="0"
                width="100%"
                height="30px"
              >
                <TextBlock
                  height="30px"
                  color="#FFFFFF"
                  fontSize="16px"
                  text="选项1-2"
                  width="25%"
                ></TextBlock>
                <TextBlock
                  height="30px"
                  color="#FFFFFF"
                  fontSize="16px"
                  text="选项1-2"
                  width="25%"
                ></TextBlock>
                <TextBlock
                  height="30px"
                  color="#FFFFFF"
                  fontSize="16px"
                  text="选项1-2"
                  width="25%"
                ></TextBlock>
                <TextBlock
                  height="30px"
                  color="#FFFFFF"
                  fontSize="16px"
                  text="选项1-2"
                  width="25%"
                ></TextBlock>
              </StackPanel>
              <TextBlock
                horizontalAlignment="left"
                rowIndex="2"
                columnIndex="0"
                width="25%"
                height="40px"
                color="#FFFFFF"
                fontSize="16px"
                text="选项1-1"
              ></TextBlock>
            </Grid>
          </Rectangle>
        </StackPanel>
      </ScrollViewer>
      <Rectangle
        :cornerRadius="8"
        color="#000000"
        background="#313131"
        height="36px"
        width="90px"
      >
        <Image height="36px" width="90px" :source="btnPx"> </Image>
        <TextBlock
          horizontalAlignment="left"
          color="#ffffff"
          fontSize="15"
          text="发布"
          rowIndex="2"
          columnIndex="0"
        ></TextBlock>
      </Rectangle>
    </Grid>
  </Rectangle>
</template>
