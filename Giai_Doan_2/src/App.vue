<script setup></script>

<template>
  <!-- <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p> -->
  <header>
       <div class="text-center bg-light p-4">
          <nav class="navbar narbar-expand-sm">
              <div class="container">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <RouterLink to="/list">Danh sách sản phẩm</RouterLink>
                      </li>
                      <li class="nav-item">
                          <RouterLink to="/create">Tạo mới sản phẩm</RouterLink>
                      </li>
                  </ul>
              </div>
          </nav>
       </div>
  </header>
  <main>
      <router-view></router-view>
  </main>
  <footer>ĐÂY LÀ FOOTER</footer>
</template>

<style scoped></style>
