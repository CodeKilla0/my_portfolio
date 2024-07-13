<template>
  <div class="skillPage bg-black">
    <div class="title pt-20 mb-20 ">
      <h2 class="text-center text-4xl text-white">
        My
        <span class="font-extrabold">Skills</span>
      </h2>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 lg:gap-16 sm:gap-4 max-w-screen-xl mx-auto px-10 pt-20 pb-32"
    >
      <div
        class="bg-white text-center hover:shadow-2xl rounded-md transition duration-150 ease-in-out"
      >
        <div id="skills" class="py-6">
          <div class="text-5xl text-center font-medium text-gray-900">
            <font-awesome-icon icon="fa-brands fa-git-alt" />
          </div>
        </div>
        <div class="py-6">
          <a href="#" class="font-medium text-2xl">Git</a>
        </div>
      </div>
      <div
        class="bg-white text-center hover:shadow-2xl rounded-md transition duration-150 ease-in-out"
      >
        <div class="py-6">
          <div class="text-5xl text-center font-medium text-gray-900">
            <font-awesome-icon icon="fa-brands fa-js" />
          </div>
        </div>
        <div class="py-6">
          <a href="#" class="font-medium text-2xl">Javascript</a>
        </div>
      </div>
      <div
        class="bg-white text-center hover:shadow-2xl rounded-md transition duration-150 ease-in-out"
      >
        <div class="py-6">
          <div class="text-5xl text-center font-medium text-gray-900">
            <font-awesome-icon icon="fa-brands fa-laravel" />
          </div>
        </div>
        <div class="py-6">
          <a href="#" class="font-medium text-2xl">Laravel</a>
        </div>
      </div>
      <div
        class="bg-white text-center hover:shadow-2xl rounded-md transition duration-150 ease-in-out"
      >
        <div class="py-6">
          <div class="text-5xl text-center font-medium text-gray-900">
            <font-awesome-icon icon="fa-brands fa-php" />
          </div>
        </div>
        <div class="py-6">
          <a href="#" class=" font-medium text-2xl">Php</a>
        </div>
      </div>
      <div
        class="bg-white text-center hover:shadow-2xl rounded-md transition duration-150 ease-in-out"
      >
        <div class="py-6">
          <div class="text-5xl text-center font-medium text-gray-900">
            <font-awesome-icon icon="fa-brands fa-vuejs" />
          </div>
        </div>
        <div class="py-6">
          <a href="#" class=" font-medium text-2xl">Vuejs</a>
        </div>
      </div>
      <div
        class="bg-white text-center hover:shadow-2xl rounded-md transition duration-150 ease-in-out"
      >
        <div class="py-6">
          <div class="text-5xl text-center font-medium text-gray-900">
            <font-awesome-icon icon="fa-brands fa-android" />
          </div>
        </div>
        <div class="py-6">
          <a href="#" class=" font-medium text-2xl">Android</a>
        </div>
      </div>
      <div
        class="bg-white text-center hover:shadow-2xl rounded-md transition duration-150 ease-in-out"
      >
        <div class="py-6">
          <div class="text-5xl text-center font-medium text-gray-900">
            <font-awesome-icon icon="fa-brands fa-react" />
          </div>
        </div>
        <div class="py-6">
          <a href="#" class=" font-medium text-2xl">Reactjs</a>
        </div>
      </div>
      <div
        class="bg-white text-center hover:shadow-2xl rounded-md transition duration-150 ease-in-out"
      >
        <div class="py-6">
          <div class="text-5xl text-center font-medium text-gray-900">
            <font-awesome-icon icon="fa-brands fa-python" />
          </div>
        </div>
        <div class="py-6">
          <a href="#" class=" font-medium text-2xl">Python</a>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "MySkills"
}
</script>

<style>
.skillPage {
  margin-top: 2%;
}
</style>
