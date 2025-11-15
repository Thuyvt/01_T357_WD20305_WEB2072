
<script setup>
    import {ref, reactive} from 'vue';

    let product = reactive({
        id : "",
        name: "",
        category_id: "",
        description: "",
        price: 0,
        quantity: 0,
        status: ""
    }); 
    let list_products = reactive([]);
    let errors = reactive({});
    const submitFrom = () => {
        // validate form
        let isValid = validate();
        console.log(product);
        if (isValid) {
            // đẩy giữ liệu vào list
        // list_products.push(product); tất cả các giá trị product được push vào đều tham chiếu tới object product
        // Không lưu trực tiếp product vào mảng
        // Lưu lần lượt giá trị của product
            list_products.push({
                id: list_products.length + 1,
                name: product.name,
                category_id: product.category_id,
                descrition: product.description,
                price: product.price,
                quantity: product.quantity,
                status: product.status == "" ? false: true
            })
        }
       
    }

    // validate 
    const validate = () => {
        let result = true;
        if (product.name != "") {
            errors.name = '';
            result = true;
        } else {
            result = false;
            errors.name = 'Tên bắt buộc nhập';
        }
        if (product.price == "" || product.price <= 0) {
            errors.price = "Giá là bắt buộc và phải lớn hơn 0";
            result = false;
        } else {
            errors.price = '';
            result = true;
        }
        return result;
    }
    // Hàm xóa đối tượng
    const deleteProduct = (index) => {
        list_products.splice(index, 1);
    }
</script>
<template>
    <div class="container">
        <h2>Tạo mới sản phẩm</h2>
        <!-- @submit: bắt sự kiện submit form
            .prevent: ngăn chặn hành động mặc định của sự kiện, với sự kiện submit, hành động
            mặc định là làm mới trang hoặc điều hướng đến một url khác
        -->
        <form @submit.prevent="submitFrom">
            <div class="mb-3 mt-3">
                <label class="form-label">Tên:</label>
                <input type="text" class="form-control" v-model.trim="product.name">
                <span v-if="errors.name" class="text-danger">{{ errors.name }}</span>
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
            </div>
            <div class="mb-3 mt-3">
                <label class="form-label">Giá:</label>
                <input type="number" class="form-control" v-model.number="product.price">
                <span v-if="errors.price" class="text-danger">{{ errors.price }}</span>
            </div>
            <div class="mb-3 mt-3">
                <label class="form-label">Số lượng:</label>
                <input type="number" class="form-control" v-model.number="product.quantity">
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" name="remember"> Còn hàng
            </div>
            <button type="submit" class="btn btn-primary">Tạo mới</button>
        </form>
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
                <tr v-for="(p,index) in list_products" :key="p.id">
                    <td>{{ p.id }}</td>
                    <td>{{ p.name }}</td>
                    <td>{{ p.category_id }}</td>
                    <td>{{ p.description }}</td>
                    <td>{{ p.price }}</td>
                    <td>{{ p.quantity }}</td>
                    <td>{{ p.status }}</td>
                    <td>
                        <button style="submit" class="btn btn-danger" @click="deleteProduct(index)">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
   
</template>
