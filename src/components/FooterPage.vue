<template>
  <div class="footer bg-black border-t-2 border-t-white">
    <div
      class="container text-white max-w-screen-xl flex flex-wrap items-center mx-auto lg:px-6"
    >
      <div class="content-left flex items-center py-6">
        <div class="mr-3">
          <img
            src="../assets/images/logo/logo-05.png"
            alt="logo"
            width="50"
            class="rotating-logo"
          />
        </div>
        <div>
          <p class="text-[#0FEFB4]">
            @<span id="current-year"></span> - powered by Aziz DIOMANDE
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rotating-logo {
  animation: spin 4s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("current-year");
  yearElement.textContent = currentYear;
});
</script>
