<template>
  <nav
    class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-blue-400 shadow sm:items-baseline w-full"
  >
    <div class="mb-2 sm:mb-0">
      <router-link to="/">
        <a class="text-2xl no-underline text-white hover:text-yellow-400"
          >Peramalan PMB UBP Karawang</a
        >
      </router-link>
    </div>
    <div>
      <router-link to="/ses">
        <a class="text-md no-underline text-white hover:text-yellow-400 mr-3"
          >SES</a
        >
      </router-link>
      <router-link to="/des-brown">
        <a class="text-md no-underline text-white hover:text-yellow-400 mr-3"
          >DES Brown</a
        >
      </router-link>
      <router-link to="/des-holt">
        <a class="text-md no-underline text-white hover:text-yellow-400 mr-3"
          >DES Holt</a
        >
      </router-link>
    </div>
  </nav>
  <router-view />

  <div class="text-center font-hairline text-gray-600 p-5">
    Created By
    <a href="https://github.com/ysfwicaksana" class="hover:underline"
      >Yusuf Eka Wicaksana</a
    >
    &copy; 2021
  </div>
</template>


