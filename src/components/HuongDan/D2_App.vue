<!-- Code logic js -->
<script setup>
// C1: Option API
// C2: Composition API: dùng ref, reactive
    import {ref, reactive} from "vue";
    // 1. Dùng ref với kiểu dữ liệu nguyên thủy
    let studentName = ref('FE Framework Vue 3');
    let studentEmail = ref("thuyvt66@fe.edu.vn");
    let studentAge = ref(18);
    let studentIsActive = ref(true);

    let count = ref(0);
    // 2. Dùng reactive với kiểu dữ liệu đối tượng
    let state = reactive({amount: 0, name: 'abc'});
    // C1: Viết hàm
    function increamentCount() {
        // tăng giá trị của count
        count.value++;
    }
    console.log(state);
    const increamentAmount = () => {
        // tăng giá trị amount
        state.amount++;
    }
    // 2 way data binding
    let hoVaTen = ref("Vũ Thị Thúy");

    // Event binding
    const onClickDangKy = () => {
        alert("Đăng ký thành công");
    } 
    const onBlurInput = () => {
        alert("Gọi hàm onBlurInput");
    }
</script>
<!-- Code html -->
<template>
    <!-- DATA BINDING -->
    <h1>Thông tin:</h1>
    <ul class="list-group">
        <li class="list-group-item">Tên sinh viên: {{ studentName }}</li>
        <li class="list-group-item">Email: {{ studentEmail }}</li>
        <li class="list-group-item">Tuổi: {{ studentAge }}</li>
        <li class="list-group-item"> 
            Trạng thái: {{ studentIsActive ? 'Đang học' : 'Đang bảo lưu' }}
        </li>
    </ul>
    <!-- EVENT BINDING -->
    COUNT: {{ count }} 
    <button class="btn btn-primary" @click="increamentCount">Increament count</button>
    <!-- Hiển thị giá trị thuộc thính của đối tượng: [tên đối tượng].[tên thuộc tính] -->
    AMOUNT: {{ state.amount }}
    <button class="btn btn-success" @click="increamentAmount">Increament amount</button>
    
    <hr>
    <h3>2 Way data binding</h3>
    <p>Sử dụng đồng bộ dữ liệu từ code js và html</p>
    <div>
        <label for="" class="form-label"></label>
        <input type="text" class="form-control" v-model="hoVaTen">
        <p>Xin chào {{ hoVaTen }}</p>
    </div>
    <hr>
    <h3>Event Binding</h3>
    <p>Sử dụng để bắt sự kiện người dùng tương tác với html</p>
    <div>
        <h6>Bắt sự kiện click</h6>
        <button class="btn btn-primary" @click="onClickDangKy()">Đăng ký</button>
        <h6>Bắt sự kiện blur</h6>
        <input type="text" class="form-control" @blur="onBlurInput()">
    </div>
</template>
<!-- code css -->
<style scoped></style>