<template>
  <footer
    class="border-t border-zinc-200/80 bg-gradient-to-b from-zinc-100 to-zinc-200/50 text-zinc-600 shadow-[0_-8px_32px_-12px_rgba(15,23,42,0.06)] dark:border-white/[0.07] dark:from-zinc-950 dark:to-[#030305] dark:text-neutral-400 dark:shadow-[0_-12px_40px_-8px_rgba(0,0,0,0.45)]"
  >
    <div
      class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-4 px-4 py-8"
    >
      <div class="flex items-center gap-3">
        <img
          src="../assets/images/logo/logo-05.png"
          alt=""
          width="40"
          height="40"
          class="rounded-lg opacity-90"
        />
        <p class="text-sm">
          <span class="text-[#0FEFB4]">© {{ year }}</span>
          — Aziz Diomande
        </p>
      </div>
      <p class="text-xs text-zinc-500 dark:text-neutral-600">Portfolio · Full stack</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
