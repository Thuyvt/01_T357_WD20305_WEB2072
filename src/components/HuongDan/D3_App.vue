<script setup>
    import {ref, reactive} from 'vue';
    let age = ref(20);
    let score = ref(80);
    // Khai báo biến theo dõi trangj thái điểm danh
    let isAbsent = ref(true);
    // Hàm để chuyển đổi trạng thái hiển thị
    const toggleAbsent = () => {
        isAbsent.value = !isAbsent.value;
    }
    // Mảng đối tượng
    let list_foods = reactive([
        {id: "F01", name: "Bún bò huế", quantity: 10, price: 55000},
        {id: "F02", name: "Cơm rang dưa bò", quantity: 12, price: 35000},
        {id: "F03", name: "Trà sữa mochi", quantity: 2, price: 25000},
        {id: "F04", name: "Lẩu ếch măng cay", quantity: 5, price: 250000},
    ]);

    const totalCartValue = () => {
        // Cách viết hàm call back: giá trị trước, giá trị item hiện tại
        return list_foods.reduce((total, item) => {
            return total + item.price *item.quantity;
        }, 0);
        // let total = 0;
        // for(item in list_foods) {
        //     total += item.price * item.quantity;
        // }
    }

    // Tăng giảm số lượng
    const inCreamentQuantity = (index) => {
        list_foods[index].quantity++;
    } 
</script>
<template>
    <div class="container">
        <h3>V-IF/ V-ELSE</h3>
        <div v-if="age>=18" class="alert alert-success mt-4"> Bạn đã đủ tuổi</div>
        <div v-else class="alert alert-danger mt-4"> Bạn chưa đủ tuổi</div>
        <div>
            <p>Thông báo xếp hạng</p>
            <span v-if="score>= 90">Xuất sắc</span>
            <span v-else-if="score>=80">Giỏi</span>
            <span v-else-if="score>=70">Khá</span>
            <span v-else-if="score>=60">Trung bình</span>
            <span v-else>Yếu</span>
        </div>
        <h3>v-show: check điểm danh</h3>
        <div v-show="!isAbsent" class="alert alert-success">Có mặt</div>
        <div v-show="isAbsent" class="alert alert-warning">Vắng mặt</div>
        <button @click="toggleAbsent" :class="isAbsent ? 'btn btn-danger' : 'btn btn-primary'">
            {{ isAbsent ? 'Vắng mặt' : 'Có mặt' }}
        </button>
        <h3>List rendering</h3>
        <p>Danh sách món ăn</p>
        <ul v-for="a in list_foods" :key="item">
            <li>{{ a }}</li>
        </ul>
        <p>Danh sách món ăn kèm món, kèm theo index</p>
        <ul v-for="(item, index) in list_foods" :key="index">
            <li>{{ index }} - {{ item.price * item.quantity }}</li>
        </ul>
        <!-- Giỏ hàng -->
        <table class="table">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Tên</td>
                    <td>Đơn giá</td>
                    <td>Số lượng</td>
                    <td>Số tiền</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(food, index) in list_foods" :key="food.id">
                    <td>{{ food.id }}</td>
                    <td>{{ food.name }}</td>
                    <td>{{ food.price }}</td>
                    <td>
                        <button type="submit" class="btn" @click="food.quantity--"> - </button>
                        <input type="text" class="form-control" v-model="food.quantity">
                        <button type="submit" class="btn" @click="inCreamentQuantity(index)"> + </button>
                    </td>
                    <td>{{ (food.price * food.quantity).toFixed(2) }}</td>
                </tr>
            </tbody>
        </table>
        <h2>Tổng tiền giỏ hàng: {{ totalCartValue() }} </h2>

    </div>
</template>
