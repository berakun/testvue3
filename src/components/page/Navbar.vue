<script setup>

import fb from '/src/assets/logo/fb.svg'
import wa from '/src/assets/logo/wa.svg'
import linkedin from '/src/assets/logo/linkedin.svg'
import ig from '/src/assets/logo/ig.svg'
import logotest from '/src/assets/logo/LogoTest.svg'

</script>

<template>
    <nav class="bg-gray-800 fixed top-0 left-0 z-50 w-full">
        <div class="mx-auto px-auto sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center">
                    <img class="hidden lg:block h-8 w-auto" :src="logotest" alt="Logo" />
                </div>
                <!-- Menu -->
                <div class="flex flex-wrap items-center justify-between mx-2 logo">
                    <div class="hidden sm:block sm:ml-6">
                        <div class="flex space-x-4">
                            <a href="https://www.google.com"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <img class="text-white" :src="fb" alt="Logo Facebook" />
                            </a>
                            <a href="https://www.google.com"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <img class="text-white" :src="ig" alt="Logo Instagram" />
                            </a>
                            <a href="https://www.google.com"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <img class="text-white" :src="linkedin" alt="Logo Linkedin" />
                            </a>
                            <a href="https://www.google.com"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <img class="text-white" :src="wa" alt="Logo Whatsapp" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>