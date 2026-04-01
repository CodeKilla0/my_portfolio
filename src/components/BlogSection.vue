<template>
  <div class="relative overflow-hidden bg-zinc-100/90 py-16 dark:bg-zinc-950/45">
    <div
      class="pointer-events-none absolute inset-0 bg-mesh-light opacity-25 dark:bg-mesh-dark dark:opacity-30"
      aria-hidden="true"
    />
    <div class="relative container mx-auto max-w-screen-xl">
        <!-- Titre de la section -->
        <h2 class="police mb-8 text-center text-5xl font-bold text-zinc-900 dark:text-white">Mon Blog</h2>
        <h1 class="title mb-8 text-center text-9xl font-black text-zinc-200/70 dark:text-slate-300 dark:text-opacity-20">Blog</h1>

        <!-- Grille des articles de blog -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Article 1 -->
            <div class="rounded-2xl border border-zinc-200/90 bg-gradient-to-br from-white to-zinc-50 p-4 shadow-soft-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950 dark:shadow-glow-mint-sm">
                <img src="https://via.placeholder.com/400x300" alt="Article Image 1" class="rounded-lg mb-4">
                <p class="text-yellow-500 text-sm mb-2">Juin 21, 2019 <span class="mx-2">|</span> ADMIN <span class="mx-2">|</span> 3</p>
                <h2 class="mb-2 text-2xl font-semibold text-zinc-900 dark:text-white">Pourquoi la génération de leads est essentielle pour la croissance des entreprises</h2>
                <p class="text-zinc-600 dark:text-gray-400">Une petite rivière nommée Duden coule par leur place et leur fournit les régalia nécessaires.</p>
            </div>
            <!-- Article 2 -->
            <div class="rounded-2xl border border-zinc-200/90 bg-gradient-to-br from-white to-zinc-50 p-4 shadow-soft-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950 dark:shadow-glow-mint-sm">
                <img src="https://via.placeholder.com/400x300" alt="Article Image 2" class="rounded-lg mb-4">
                <p class="text-yellow-500 text-sm mb-2">Juin 21, 2019 <span class="mx-2">|</span> ADMIN <span class="mx-2">|</span> 3</p>
                <h2 class="mb-2 text-2xl font-semibold text-zinc-900 dark:text-white">Pourquoi la génération de leads est essentielle pour la croissance des entreprises</h2>
                <p class="text-zinc-600 dark:text-gray-400">Une petite rivière nommée Duden coule par leur place et leur fournit les régalia nécessaires.</p>
            </div>
            <!-- Article 3 -->
            <div class="rounded-2xl border border-zinc-200/90 bg-gradient-to-br from-white to-zinc-50 p-4 shadow-soft-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950 dark:shadow-glow-mint-sm">
                <img src="https://via.placeholder.com/400x300" alt="Article Image 3" class="rounded-lg mb-4">
                <p class="text-yellow-500 text-sm mb-2">Juin 21, 2019 <span class="mx-2">|</span> ADMIN <span class="mx-2">|</span> 3</p>
                <h2 class="mb-2 text-2xl font-semibold text-zinc-900 dark:text-white">Pourquoi la génération de leads est essentielle pour la croissance des entreprises</h2>
                <p class="text-zinc-600 dark:text-gray-400">Une petite rivière nommée Duden coule par leur place et leur fournit les régalia nécessaires.</p>
            </div>
        </div>
    </div>
  </div>
</template>