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
          <a
            href="https://wa.me/2250777099450?text=Bonjour%20Aziz%2C%20je%20vous%20contacte%20depuis%20votre%20portfolio%20concernant%20un%20projet%20freelance."
            target="_blank"
            rel="noopener noreferrer"
            class="relative z-10 inline-flex h-[45px] w-44 items-center justify-center overflow-hidden rounded-lg bg-[#25D366] font-black text-white shadow-lg transition hover:brightness-110"
          >
            WhatsApp
          </a>
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
