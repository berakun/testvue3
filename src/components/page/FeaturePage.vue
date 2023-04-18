<script setup>

</script>

<template>
  <div class="container mx-auto py-10">
    <ol>
      <div>
        <li class="text-2xl font-bold">Lore Ipsum
          <div class="text-xs font-normal">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim
          </div>
        </li>
      </div>
      <div>
        <li class="text-2xl font-bold">Lore Ipsum
          <div class="text-xs font-normal">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim
          </div>
        </li>
      </div>
      <div>
        <li class="text-2xl font-bold">Lore Ipsum
          <div class="text-xs font-normal">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim
          </div>
        </li>
      </div>
      <div>
        <li class="text-2xl font-bold">Lore Ipsum
          <div class="text-xs font-normal">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim
          </div>
        </li>
      </div>
      <div>
        <li class="text-2xl font-bold">Lore Ipsum
          <div class="text-xs font-normal">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim
          </div>
        </li>
      </div>
      <div>
        <li class="text-2xl font-bold">Lore Ipsum
          <div class="text-xs font-normal">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim
          </div>
        </li>
      </div>
    </ol>
  </div>
</template>

<style scoped>
ol {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 0 0 40px;
  list-style: none;
  background: #fff;
  overflow: hidden;
  counter-reset: numList;
}

ol li {
  width: 176px;
  margin-right: 44px;
  float: left;
  position: relative
}

ol li:before {
  counter-increment: numList;
  content: counter(numList);

  float: left;
  position: absolute;
  left: -40px;

  font: bold 18px sans-serif;
  text-align: center;
  color: #000000;
  line-height: 30px;

  width: 34px;
  height: 34px;
  border: 2px solid black;
  background: rgb(255, 255, 255);

  -moz-border-radius: 999px;
  border-radius: 999px
}
</style>
