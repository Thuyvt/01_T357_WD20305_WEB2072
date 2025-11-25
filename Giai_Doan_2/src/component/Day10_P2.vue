<script setup>
    import {ref, onMounted} from "vue";
    import instanceAxios from "@/ultis/configAxios";
    let products = ref();
    
    // Hàm lấy danh sách
    const fetchData = async() => {
        const response = await instanceAxios.get("products");
        products.value = response.data;
    } 
    // Gọi khi component vừa load xong
    onMounted(() => {
        fetchData();
    })
</script>
<template>
     <h2>Danh sách sản phẩm</h2>
    <table class="table">
        <thead>
            <tr>
                <td>ID</td>
                <td>Tên</td>
                <td>Danh mục</td>
                <td>Mô tả</td>
                <td>Giá</td>
                <td>Số lượng</td>
                <td>Trạng thái</td>
                <td>Hành động</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(p,index) in products" :key="p.id">
                <td>{{ p.id }}</td>
                <td>{{ p.name }}</td>
                <td>{{ p.category_id }}</td>
                <td>{{ p.description }}</td>
                <td>{{ p.price }}</td>
                <td>{{ p.quantity }}</td>
                <td>{{ p.status }}</td>
                <td>
                    <button class="btn btn-danger me-2" @click="deleteProduct(index)">Xóa</button>
                    <button class="btn btn-info" @click="showProduct(p.id)">Xem</button>

                </td>
            </tr>
        </tbody>
    </table>
</template>
<style scoped></style>