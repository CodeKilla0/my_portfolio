<template>
  <div class="IringMe bg-zinc-200 dark:bg-black">
    <section class="relative text-center">
      <!-- Image d'arrière-plan -->
      <div class="relative parallax object-cover">
        <div
          class="pointer-events-none absolute inset-0 bg-black/50 dark:bg-black/30"
        ></div>
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-white"
        >
          <h1 class="text-5xl font-bold mb-10">
            Je suis disponible pour travailler en free-lance
          </h1>
          <button
            class="relative h-[45px] w-40 overflow-hidden bg-zinc-900 font-black text-white transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-black hover:before:w-2/4 hover:before:bg-emerald-400 hover:after:w-2/4 hover:after:bg-emerald-400 dark:bg-black"
          >
            <a href="#contact" class="relative z-10">Ecrivez moi</a>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IringMe",
};
</script>

<style>
.title {
  position: relative;
  top: -80px;
  font-family: "Poppins";
}

.police {
  font-family: "Poppins";
}

.parallax {
  height: 500px;
  background-image: url("../assets/images/16215980_rm405-b03-mockup.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
