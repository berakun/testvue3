<script setup>

const videoLink = 'https://botmaster-files.s3.ap-southeast-1.amazonaws.com/Content/3ccc20b2bea03dcfb85db1ba0c81b967b19d7713/pexels-artem-podrez-4884240-3840x2160-30fps.mp4'

</script>

<template>
    <div class="bg-white pb-[60px]">
        <div class="container mx-auto flex space-x-10 grid grid-col-2 grid-flow-col font-black">
            <div class="text-left text-5xl font-bold text-black">
                <div>Lorem Ipsum</div>
                <div class="pt-4">Dolor Sit Amet</div>
                <p class="text-xs pt-6 font-normal text-gray-600">
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
                </p>
                <div class="font-normal pt-6 text-2xl">
                    <button class="bg-gray-500 text-black font-normal py-4 px-6 rounded-lg w-full">Lorem ipsum</button>
                </div>
            </div>
            <div>
                <video autoplay loop muted class="video pr-8 w-full h-full max-w-[800px]">
                    <source :src="videoLink" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
</template>