<script setup >
    import {reactive} from 'vue';
    // Mảng đối tượng
    let list_foods = reactive([
        {id: "F01", name: "Bún bò huế", quantity: 10, price: 55000},
        {id: "F02", name: "Cơm rang dưa bò", quantity: 12, price: 35000},
        {id: "F03", name: "Trà sữa mochi", quantity: 2, price: 25000},
        {id: "F04", name: "Lẩu ếch măng cay", quantity: 5, price: 250000},
    ]);
</script>

<template>
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
                        <input type="text" class="form-control" v-model="food.quantity">
                    </td>
                    <td>{{ (food.price * food.quantity).toFixed(2) }}</td>
                </tr>
            </tbody>
        </table>
</template>