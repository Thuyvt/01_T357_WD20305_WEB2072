<script setup>
    import {ref, onMounted} from "vue";
    import {useRoute} from "vue-router";
    import instanceAxios from "@/ultis/configAxios";

    let product = ref({
        id: "",
        name: "",
        description: "",
        category_id: 0,
        price: 0,
        quantity: 0,
        status: false
    });
    let errors = ref()
    // Truy cập vào route params thông qua useRoute
    let route = useRoute();
    // Lấy giá trị para truyền lên bằng tên cấu hình trong route
    let proId = route.params.id;
    console.log("id:" +proId);
    // Lấy thông tin product bằng id
    const getProductDetail = async() => {
        let response = await instanceAxios.get(`products/${proId}`);
        product.value = response.data;
        console.log(product)
    }
    // Load component xong lấy thông tin chi tiết sp hiển thị
    onMounted(() => { getProductDetail();})

</script> 
<template>
    <div class="container">
        <h2>Xem thông tin sản phẩm</h2>
        <form>
            <!-- <div class="mb-3 mt-3">
                <label class="form-label">ID:</label>
                <input type="text" class="form-control" v-model.trim="product.id">
            </div> -->
            <div class="mb-3 mt-3">
                <label class="form-label">Tên:</label>
                <input type="text" class="form-control" v-model.trim="product.name" disabled>
                <span v-if="errors" class="text-danger">{{ errors }}</span>
            </div>
            <div class="mb-3 mt-3">
                <label class="form-label">Danh mục:</label>
                <select name="" id="" class="form-control" v-model="product.category_id" disabled>
                    <option value="1">Danh mục 1</option>
                    <option value="2">Danh mục 2</option>
                </select>
            </div>
            <div class="mb-3 mt-3">
                <label class="form-label">Mô tả:</label>
                <textarea class="form-control" v-model.trim="product.description" disabled></textarea>
                <span v-if="errors" class="text-danger">{{ errors }}</span>

            </div>
            <div class="mb-3 mt-3">
                <label class="form-label">Giá:</label>
                <input type="number" class="form-control" v-model.number="product.price" disabled>
                <span v-if="errors" class="text-danger">{{ errors }}</span>
            </div>
            <div class="mb-3 mt-3">
                <label class="form-label">Số lượng:</label>
                <input type="number" class="form-control" v-model.number="product.quantity" disabled>
                <span v-if="errors" class="text-danger">{{ errors }}</span>

            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" name="remember" v-model="product.status" disabled> Còn hàng
            </div>
            <!-- <button type="reset" class="btn btn-success me-3">Làm mới</button> -->
            <!-- <button type="submit" class="btn btn-primary me-3">Cập nhật</button> -->
        </form>
</div>
</template>
<style scope></style>