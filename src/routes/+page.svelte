<script lang="ts">
    import {Button, Input, Spinner} from "flowbite-svelte";
    import {get} from "$lib/api";
    import {fly} from 'svelte/transition';

    let name = '';
    let ageData = { age: null };
    let loading = false;
    let errorMessage = '';

    async function fetchAge() {
        // resets hier
        ageData.age = null;
        errorMessage = '';
        loading = true;
        try {
            ageData = await get(`?name=${name}`)
        } catch (error) {
            errorMessage = error.message;
        } finally {
            loading = false;
        }
    }

</script>

<main class="container mx-auto p-4 text-center">
    <h1 class="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Predict Your Age with AI.</h1>
    <form class="flex space-x-4 justify-center" on:submit|preventDefault={fetchAge}>
        <Input
                required
                class="w-full sm:w-1/2"
                bind:value={name}
                placeholder="Enter your name"
        />
        <Button type="submit">Predict Age</Button>
    </form>

    {#if loading || ageData.age !== null}
        <p class="text-lg font-medium text-gray-700 dark:text-gray-300 mt-4" in:fly={{ y: 20, duration: 300 }}>
            {#if loading}
                <Spinner />
            {:else}
                The predicted age for <span class="font-bold text-gray-900 dark:text-white">{name}</span> is <span class="font-bold text-gray-900 dark:text-white">{ageData.age}</span> years old.
            {/if}
        </p>
    {:else if errorMessage.length > 0 }
        <p class="text-lg font-medium text-red-600 dark:text-red-400 mt-4">{errorMessage}</p>
    {/if}
    <footer class="mt-8">
        <p class="text-sm text-gray-500 dark:text-gray-400">Powered by <a href="https://agify.io" class="text-blue-600 dark:text-blue-400" target="_blank" rel="noopener noreferrer">Agify.io</a></p>
    </footer>
</main>