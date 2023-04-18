<script setup>
import SinglePage from '../components/page/SinglePage.vue'
import Navbar from '../components/page/Navbar.vue'
import Sliding from '../components/page/Sliding.vue';
import FeaturePage from '../components/page/FeaturePage.vue';
import TestiPage from '../components/page/TestiPage.vue';
import BottomNavbar from '../components/page/BottomNavbar.vue';

</script>

<template>
    <div>
        <div>
            <Navbar />
        </div>
        <div>
            <SinglePage />
        </div>
        <hr class="container mx-auto bg-gray-100" style="border-top: 1px solid #bbb">
        <div>
            <Sliding />
        </div>
        <hr class="container mx-auto bg-gray-100" style="border-top: 1px solid #bbb">
        <div>
            <FeaturePage />
        </div>
        <hr class="container mx-auto bg-gray-100" style="border-top: 1px solid #bbb">
        <div>
            <TestiPage />
        </div>
        <div>
            <BottomNavbar />
        </div>
    </div>
</template>

