<script setup>
    import Header from '@/components/layout/Header.vue';
    import Footer from '@/components/layout/Footer.vue';
    // B1. Tạo nội dung trang con
    // B2. Khai báo đường dẫn trong routes/index.js
    // B3. Thay thế thẻ a = RouterLink

</script>
<template>
    <header>
        <!-- Gọi layout đã nhúng -->
        <Header></Header>
    </header>
    <main>
        <!-- Sử dụng router view, nội dung sẽ thay đổi theo từng đường dẫn -->
        <router-view></router-view>
    </main>
    <footer>
        <!-- Gọi layout đã nhúng -->
        <Footer></Footer>
    </footer>
</template>
<style scoped></style>