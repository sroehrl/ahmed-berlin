<script lang="ts">
    // Import necessary components and functions
    import { Button, Input } from "flowbite-svelte";
    import {tasks} from "$lib/stores/tasks";
    import {onMount} from "svelte";
    import {GridPlusOutline} from "flowbite-svelte-icons";
    import {fly} from 'svelte/transition';

    // Initialize variables
    let newTask = '';
    let searchQuery = '';


    // Function to add a new task
    function addTask() {
        $tasks = [...$tasks, { id: Date.now(), text: newTask, completed: false }];
        newTask = '';

    }

    // Function to delete a task by id
    function deleteTask(id) {
        $tasks = [...$tasks.filter(task => task.id !== id)];
    }

    // Function to clear all tasks
    function clearAllTasks() {
        $tasks = []
    }

    // Function to toggle the completion status of a task
    function toggleTaskCompletion(id) {
        tasks.update(currentTasks => {
            const updatedTasks = currentTasks.map(task => 
                task.id === id ? { ...task, completed: !task.completed } : task
            );
            localStorage.setItem('todo_tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    }

    // Subscribe to tasks store and update local storage on change
    // NOTE: This already takes care of storing to localStorage. No need to set localStorage.setItem('tasks', JSON.stringify(tasks)) anywhere else
    tasks.subscribe(value => {
        localStorage.setItem('todo_tasks', JSON.stringify(value));
    });

    onMount(() => {
        if($tasks.length === 0){
            $tasks = [
                { id: 1, text: 'Learn Svelte', completed: true },
                { id: 2, text: 'Get a job @ retech', completed: false }
            ]
        }
    })
</script>

<main class="container mx-auto p-4 text-center">
    <h1 class="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Todo List</h1>
    
    <div class="flex flex-col items-center space-y-4">
        
        <!-- Input for adding new tasks -->
        <form on:submit|preventDefault={addTask} class="flex space-x-4 w-full sm:w-1/2">
            <Input 
                class="flex-grow"
                required
                minlength="3"
                placeholder="Enter your task" 
                bind:value={newTask} 
            />
            <Button class="flex-shrink-0" on:click={addTask}>
                <GridPlusOutline class="w-6 h-6 me-2" />
                Add Task
            </Button>
        </form>
        
        <!-- List of tasks -->
        <ul class="w-full sm:w-1/2 mt-8 space-y-4">
            {#each $tasks.filter(t => t.text.toLowerCase().includes(searchQuery.toLowerCase())) as task (task.id)}
                <li class="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm" in:fly={{duration: 900}}>
                    <div>
                        <input 
                            id="default-checkbox" 
                            type="checkbox" 
                            value="" 
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-3"
                            checked={task.completed}
                            on:change={() => toggleTaskCompletion(task.id)}
                        >
                        <span class="text-lg font-medium text-gray-700 dark:text-gray-300">{task.text}</span>
                    </div>
                    <div class="flex space-x-4">
                        <Button on:click={() => deleteTask(task.id)}>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                            </svg>
                        </Button>
                    </div>
                </li>
            {/each}
        </ul>

        <!-- Message when no tasks are available -->
        {#if $tasks.length === 0}
            <p class="text-gray-500 dark:text-gray-400">No tasks available. Add a new task to get started!</p>
        {:else}
            <p class="text-gray-500 dark:text-gray-400">Total tasks: {$tasks.filter(task => task.text.toLowerCase().includes(searchQuery.toLowerCase())).length}</p>
        {/if}

        <!-- Search input for filtering tasks -->
        {#if $tasks.length > 0}
            <div class="relative w-full sm:w-1/2">
                <Input class="w-full" placeholder="Search tasks" bind:value={searchQuery} />
                {#if searchQuery}
                    <Button class="absolute right-0 top-0 mt-2 mr-2" on:click={() => searchQuery = ''}>
                        Clear
                    </Button>
                {/if}
            </div>
        {/if}

        <!-- Button to clear all tasks -->
        <div class="w-full sm:w-1/2 mt-8">
            <Button class="w-full" on:click={clearAllTasks}>Clear All</Button>
        </div>
    </div>
</main>