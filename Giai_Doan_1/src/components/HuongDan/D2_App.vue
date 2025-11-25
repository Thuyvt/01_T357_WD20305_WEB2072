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
    let state = reactive({amount: 0, name: 'abc', status: false});
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

    // Style binding
    let styleString = 'font-size: 20px; color: red';

    // Property binding
    let logoUrl = '/img/logo.png';
    // đường dẫn trực tiếp đến thư mục public
    let cauNoiYeuThich = "Muốn ngồi ở vị trí không ai ngồi được phải chịu được cảm giác không ai chịu được";
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
    <hr>
    <h3>Class binding</h3>
    <p>v-bind:class Dùng để binding các lớp css cho 1 phần tử</p>
    <p>Class binding - CHUỖI</p>
    <div v-bind:class="'active'">
        {{ hoVaTen }}
    </div>
    <p>Class binding - Đối tượng</p>
    <div :class="{active: state.amount >=3}">
        {{ state.amount }}
    </div>
    <!-- Style binding -->
     <hr>
     <h3>STYLE BINDING</h3>
     <p>Style chuỗi, đối tượng, điều kiện</p>
     <div :style="styleString"> This is a styled div</div>
     <h3> Kết hợp class binding và style binding</h3>
     <div :class="['card', state.status ? 'active-card': 'inactive-card']"
        :style="{backgroundColor: state.status? 'lightgreen': 'lightcoral'}"
     > {{ state.name }} - {{ state.status }}
     </div>
     <hr>
     <h3>PROPERTY BINDING</h3>
     <p>Sử dụng fill giá trị vào các property của thẻ html</p>
     <h6>Property value</h6>
     <input type="text" class="form-control" v-bind:value="cauNoiYeuThich">
     <h6>Property src</h6>
     <img v-bind:src="logoUrl" alt="" style="height: 100px;">
</template>
<!-- code css -->
<style scoped>
    .active {
        background-color: green;
        color: white;
        padding: 10px;
    }
    .deactive {
        background-color: red;
        color: white;
        padding: 10px;
    }
</style>