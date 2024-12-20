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
      :row="[
        { height: 0.15 },
        { height: 0.07 },
        { height: 0.55 },
        { height: 0.2 },
      ]"
      :column="[{ width: 1 }]"
    >
      <TextBlock
        rowIndex="0"
        columnIndex="0"
        width="100%"
        height="50px"
        color="#FFFFFF"
        fontSize="26px"
        text="成绩列表"
        :textHorizontalAlignment="2"
        :textVerticalAlignment="2"
      ></TextBlock>
      <StackPanel
        rowIndex="1"
        columnIndex="0"
        :isHighlighted="true"
        :isVertical="false"
        width="100%"
        paddingLeft="15px"
        :alpha="0.4"
          height="33px"
        
      >
        <TextBlock
          :isHighlighted="true"
          paddingLeft="30px"
          width="70px"
          height="33px"
          color="#FFFFFF"
          fontSize="16px"
          text="序号"
          :textHorizontalAlignment="2"
        ></TextBlock>
        <TextBlock
          :isHighlighted="true"
          paddingLeft="30px"
          width="350px"
          height="33px"
          color="#FFFFFF"
          fontSize="16px"
          text="昵称"
          :textHorizontalAlignment="2"
        ></TextBlock>
        <TextBlock
          :isHighlighted="true"
          paddingLeft="30px"
          width="100px"
          height="33px"
          color="#FFFFFF"
          fontSize="16px"
          text="分数"
          :textHorizontalAlignment="2"
        ></TextBlock>
        <TextBlock
          :isHighlighted="true"
          paddingLeft="30px"
          width="150px"
          height="33px"
          color="#FFFFFF"
          fontSize="16px"
          text="用时"
          :textHorizontalAlignment="2"
        ></TextBlock>
      </StackPanel>
      <ScrollViewer :width="1" :height="1" rowIndex="2" columnIndex="0">
        <StackPanel :isHighlighted="true" :isVertical="true" width="100%">
          <Rectangle
            v-for="(item, index) in ary"
            :key="item"
            :cornerRadius="15"
            width="100%"
            height="33px"
            paddingTop="5px"
            paddingBottom="5px"
            paddingLeft="10px"
            paddingRight="10px"
            :background="index % 2 === 0 ? '#333333' : '#262626'"
            :thickness="0"
            :onPointerEnterObservable="EnterObservable(index)"
            :onPointerOutObservable="OutObservable(index)"
            horizontalAlignment="center"
          >
            <StackPanel :isHighlighted="true" :isVertical="false" width="100%">
              <TextBlock
                :isHighlighted="true"
                paddingLeft="30px"
                width="70px"
                height="33px"
                color="#FFFFFF"
                fontSize="20px"
                :text="index"
                :textHorizontalAlignment="2"
              ></TextBlock>
              <TextBlock
                :isHighlighted="true"
                paddingLeft="30px"
                width="350px"
                height="33px"
                color="#FFFFFF"
                fontSize="20px"
                text="小明"
                :textHorizontalAlignment="2"
              ></TextBlock>
              <TextBlock
                :isHighlighted="true"
                paddingLeft="30px"
                width="100px"
                height="33px"
                color="#FFFFFF"
                fontSize="20px"
                text="199"
                :textHorizontalAlignment="2"
              ></TextBlock>
              <TextBlock
                :isHighlighted="true"
                paddingLeft="30px"
                width="150px"
                height="33px"
                color="#FFFFFF"
                fontSize="20px"
                text="00:00:00"
                :textHorizontalAlignment="2"
              ></TextBlock>
            </StackPanel>
          </Rectangle>
        </StackPanel>
      </ScrollViewer>

      <Rectangle
        :cornerRadius="8"
        color="#000000"
        background="#313131"
        height="36px"
        width="100%"
        horizontalAlignment="center"
        rowIndex="3"
        columnIndex="0"
      >
        <StackPanel :isHighlighted="true" :isVertical="false" width="285px">
          <Rectangle
            :cornerRadius="8"
            color="#000000"
            background="#ffffff"
            height="36px"
            width="122px"
            horizontalAlignment="center"
          >
            <Image height="36px" width="122px" :source="btnPx"> </Image>

            <TextBlock
              color="#ffffff"
              fontSize="15"
              text="结束本次答题"
              rowIndex="2"
              columnIndex="0"
            ></TextBlock>
          </Rectangle>
          <Rectangle
            :cornerRadius="8"
            color="#ffffff"
            background="#313131"
            height="36px"
            width="142px"
            paddingLeft="20px"
          >
            <TextBlock
              color="#ffffff"
              fontSize="15"
              text="共享结果"
              rowIndex="2"
              columnIndex="0"
            ></TextBlock>
          </Rectangle>
        </StackPanel>
      </Rectangle>
    </Grid>
  </Rectangle>
</template>
