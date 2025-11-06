<!-- Cấu hình viết code logic js-->
<script setup>
    // Khai báo các biến dạng chuỗi
    let courseName = "Framework Vue 3";
    let courseLevel = 'Nâng cao';
    // Khai báo biến dạng số
    let courseTime = 30;
    // Khai báo biến dạng boolean
    let courseIsActive = true;
</script>
<!-- Viết code HTML -->
<template>
    <div class="container">
        <h1 class="display-4 mb-3"> Thông tin:</h1>
        <ul class="list-group">
            <li class="list-grop-item">
                Tên khóa học: {{ courseName }}
            </li>
            <li class="list-grop-item"> Cấp độ: {{ courseLevel }}</li>
            <li class="list-grop-item">Thời gian: {{ courseTime }} giờ</li>
            <li class="list-grop-item">Trạng thái:
                {{ courseIsActive ? 'Đang mở' : 'Đã đóng' }}
            </li>
        </ul>
    </div>
</template>

<!-- Viết code css cho vue hiện tại -->
 <style scoped></style>