<script setup>
import {ref, reactive, onBeforeMount, onMounted, onUnmounted} from 'vue';
// Lifecycle component
// các giai đoạn mà 1 component trải qua từ khi được tạo ra cho đến khi bị hủy
// Một vài hook thường đươc dùng: onMounted, onUpdate, on UnMounted
// 1. onMounted: Được gọi đến ngay khi component được gắn vào DOM. Đây là
// 1 hook phổ biến để thực hiện tác vụ gọi API
// 2. onUpdate: Component được cập nhật khi có dữ liệu thay đổi
// 3. onUnmounted: Component bị xóa khỏi DOM và bị hủy
let items = ref([]);
let loading = ref(false);
let error = ref();
// Hook gọi trước khi component được mount
onBeforeMount(() => {
    console.log("Compnent sắp được mount");
});
// Hook gọi khi component được mount
onMounted(async() => {
    console.log("Component đã được mount");
    await fetchData();
});
// Hook gọi trước khi component bị hủy
onBeforeMount(() => {
    console.log("Component sắp bị hủy");
}); 
// hook gọi khi component bị hủy
onUnmounted(() => {
    console.log("Component đã bị hủy");
})
// Hàm lấy dữ liệu từ API
const fetchData = async () => {
    loading.value = true;
    error.value = null;
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos");
        let data = await response.json();
        items.value = data.slice(0, 10); // Chỉ lấy 10 item đầu
        console.log(items);
    } catch (error) {
        error.value = "Có lỗi xảy ra khi lấy dữ liệu"
    } finally {
        loading.value = false;
    }
}
// Hàm xóa dữ liệu
const clearItems = () => {
    items.value = [];
}
</script>
<template>
    <h1>Demo Lifecycle with API</h1>
    <button @click="fetchData">Lấy dữ liệu</button>
    <p v-if="loading">Đang tải dữ liệu....</p>
    <p v-if="error">{{ error }}</p>
    <ul>
        <li v-for="it in items" :key="it.id"> {{ it.title }}</li>
    </ul>
    <button @click="clearItems">Xóa dữ liệu</button>
</template>
<style scoped></style>