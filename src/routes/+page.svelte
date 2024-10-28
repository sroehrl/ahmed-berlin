<script lang="ts">
    import { Button, Input } from "flowbite-svelte";
    import {get} from "$lib/api";

    let name = '';
    let ageData = { age: null };
    let loading = false;
    let errorMessage = '';

    async function fetchAge() {
        if (!name.trim()) {
            errorMessage = 'Name cannot be empty.';
            return;
        }

        loading = true;
        errorMessage = '';
        try {

            ageData = await get(`?name=${name}`)
        } catch (error) {
            console.error(error.message);
            errorMessage = error.message;
            ageData.age = null;
        } finally {
            loading = false;
        }
    }

    function handleInput(event) {
        name = event.target.value;
        ageData.age = null;
        errorMessage = '';
    }
</script>

<main class="container mx-auto p-4 text-center">
    <h1 class="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Predict Your Age with AI.</h1>
    <div class="flex space-x-4 justify-center">
        <Input 
            class="w-full sm:w-1/2" 
            bind:value={name} 
            on:input={handleInput} 
            placeholder="Enter your name" 
            on:keypress={(e) => e.key === 'Enter' && fetchAge()} 
        />
        <Button on:click={fetchAge}>Predict Age</Button>
    </div>

    {#if loading && ageData.age !== null}
        <p class="text-lg font-medium text-gray-700 dark:text-gray-300 mt-4">Loading...</p>
    {:else if name && ageData.age !== null}
        <p class="text-lg font-medium text-gray-700 dark:text-gray-300 mt-4">The predicted age for <span class="font-bold text-gray-900 dark:text-white">{name}</span> is <span class="font-bold text-gray-900 dark:text-white">{ageData.age}</span> years old.</p>
    {/if}

    {#if errorMessage}
        <p class="text-lg font-medium text-red-600 dark:text-red-400 mt-4">{errorMessage}</p>
    {/if}

    <footer class="mt-8">
        <p class="text-sm text-gray-500 dark:text-gray-400">Powered by <a href="https://agify.io" class="text-blue-600 dark:text-blue-400" target="_blank" rel="noopener noreferrer">Agify.io</a></p>
    </footer>
</main>