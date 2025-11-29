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
    // Validate
    const checkValidate = () => {
        if(!product.value.name || !product.value.description || !product.value.price || !product.value.quantity) {
            errors.value = "Không được để trống tên, giá, số lượng, mô tả"; 
            return false;
        }
        return true;
    }
    // update data
    const onClickUpdate = async() => {
        // Validate
        if (!checkValidate) return;
        let response = await instanceAxios.put(`products/${proId}`, product.value);
        console.log(response);
        if (response && response.status == 200) {
            alert("Cập nhật thành công");
        }
    }
    // Load component xong lấy thông tin chi tiết sp hiển thị
    onMounted(() => { getProductDetail();})

</script> 
<template>
    <div class="container">
        <h2>Tạo mới sản phẩm</h2>
        <form @submit.prevent="onClickUpdate">
            <!-- <div class="mb-3 mt-3">
                <label class="form-label">ID:</label>
                <input type="text" class="form-control" v-model.trim="product.id">
            </div> -->
            <div class="mb-3 mt-3">
                <label class="form-label">Tên:</label>
                <input type="text" class="form-control" v-model.trim="product.name">
                <span v-if="errors" class="text-danger">{{ errors }}</span>
            </div>
            <div class="mb-3 mt-3">
                <label class="form-label">Danh mục:</label>
                <select name="" id="" class="form-control" v-model="product.category_id">
                    <option value="1">Danh mục 1</option>
                    <option value="2">Danh mục 2</option>
                </select>
            </div>
            <div class="mb-3 mt-3">
                <label class="form-label">Mô tả:</label>
                <textarea class="form-control" v-model.trim="product.description"></textarea>
                <span v-if="errors" class="text-danger">{{ errors }}</span>

            </div>
            <div class="mb-3 mt-3">
                <label class="form-label">Giá:</label>
                <input type="number" class="form-control" v-model.number="product.price">
                <span v-if="errors" class="text-danger">{{ errors }}</span>
            </div>
            <div class="mb-3 mt-3">
                <label class="form-label">Số lượng:</label>
                <input type="number" class="form-control" v-model.number="product.quantity">
                <span v-if="errors" class="text-danger">{{ errors }}</span>

            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" name="remember" v-model="product.status"> Còn hàng
            </div>
            <button type="reset" class="btn btn-success me-3">Làm mới</button>
            <button type="submit" class="btn btn-primary me-3">Cập nhật</button>
        </form>
</div>
</template>
<style scope></style>