<script setup lang="ts">
import * as BABYLON from "@babylonjs/core";
import * as GUI from "@babylonjs/gui";
import Rectangle from "../src/components/controls/rectangle/Rectangle.vue";
import StackPanel from "../src/components/controls/stackPanel/StackPanel.vue";
import TextBlock from "../src/components/controls/textBlock/TextBlock.vue";
import Image from "../src/components/controls/image/Image.vue";
import { onMounted, ref } from "vue";
import Grid from "../src/components/controls/grid/Grid.vue";

const props = defineProps({
  params: {
    type: Object,
    required: false,
    default: () => {
      return "";
    },
  },
});

const emit = defineEmits(["left", "right"]);
let questionIndex = ref(-1);

const left = function (index: number) {
  emit("left");
};
const right = function (index: number) {
  emit("left");
};
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
      height="250px"
      width="500px"
      :isHighlighted="true"
      :row="[{ height: 0.5 }, { height: 0.5 }]"
      :column="[{ width: 1 }]"
    >
      <TextBlock
        rowIndex="0"
        columnIndex="0"
        paddingLeft="40px"
        width="690px"
        height="40px"
        color="#FFFFFF"
        fontSize="25"
        :text="params.text"
      ></TextBlock>
      <StackPanel
        :isHighlighted="true"
        :isVertical="false"
        rowIndex="1"
        columnIndex="0"
      >
        <Rectangle
          :cornerRadius="20"
          color="#ffffff"
          background="#333333"
          width="220px"
          height="80px"
        >
          <TextBlock
            width="220px"
            height="40px"
            color="#FFFFFF"
            fontSize="25"
            :text="params.leftText"
            :onPointerClickObservable="left"
          ></TextBlock>
        </Rectangle>
        <Rectangle
          :cornerRadius="20"
          color="#333333"
          background="#333333"
          width="40px"
          height="80px"
        />
        <Rectangle
          :cornerRadius="20"
          color="#000000"
          background="#D31145"
          width="220px"
          height="80px"
        >
          <TextBlock
            width="220px"
            height="40px"
            color="#FFFFFF"
            fontSize="25"
            :text="params.rightText"
            :onPointerClickObservable="right"
          ></TextBlock>
        </Rectangle>
      </StackPanel>
    </Grid>
  </Rectangle>
</template>
