<template>
  <div class="bg-blue-500 h-screen">
    <div class="container mx-auto h-full flex justify-center items-center">
      <div
        class="border-black p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg"
      >
        <h1
          class="text-gray-800 text-lg font-hairline mb-3 text-center font-sans"
        >
          Login Page
        </h1>

        <div class="mb-2">
          <label for="email" class="mb-2 block">Email</label>
          <input
            type="email"
            class="block appearance-none w-full bg-white border border-grey-500 focus:border-blue-500 rounded px-2 py-2 shadow"
            name="email"
            placeholder="Email"
          />
        </div>
        <div class="mb-2">
          <label for="pasword" class="mb-2 block">Password</label>
          <input
            type="password"
            class="block appearance-none w-full bg-white border border-grey-500 hover:border-blue-500 rounded px-2 py-2 shadow"
            name="password"
            placeholder="Password"
          />
        </div>
        <button
          class="bg-blue-500 w-full rounded p-2 mt-2 text-white hover:bg-blue-800"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>