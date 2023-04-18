<template>
  <nav class="bg-gray-700">
    <div class="mx-auto px-auto sm:px-6 lg:px-8">
      <div class="relative items-center h-16">
        <!-- Menu -->
        <div class="text-center text-white pt-5">
          Lorem Ipsum
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

import { reactive } from 'vue';
import fb from '../../assets/logo/fb.svg';
import ig from '../../assets/logo/ig.svg';
import linkedin from '../../assets/logo/linkedin.svg';
import wa from '../../assets/logo/wa.svg';

const data = reactive({
  item: [

    { fb: fb, },
    { ig: ig, },
    { linkedin: linkedin, },
    { wa: wa }

  ]
})

</script>
