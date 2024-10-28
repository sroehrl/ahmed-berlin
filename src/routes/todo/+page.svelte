<script lang="ts">
    // Import necessary components and functions
    import {Button, Checkbox, Hr, Input, Search} from "flowbite-svelte";
    import {tasks} from "$lib/stores/tasks";
    import {onMount} from "svelte";
    import {GridPlusOutline, TrashBinOutline} from "flowbite-svelte-icons";
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
    
    <div >
        <div class="flex flex-col items-center space-y-4 h-[40vh] overflow-y-auto">
            <!-- Input for adding new tasks -->
            <form on:submit|preventDefault={addTask} class="flex space-x-4 w-full sm:w-1/2">
                <Input
                        class="flex-grow"
                        required
                        minlength="3"
                        placeholder="Enter your task"
                        bind:value={newTask}
                />
                <Button class="flex-shrink-0" >
                    <GridPlusOutline class="w-4 h-4 me-2" />
                    Add Task
                </Button>
            </form>

            <!-- List of tasks -->
            <ul class="w-full sm:w-1/2 mt-8 space-y-4">
                {#each $tasks.filter(t => t.text.toLowerCase().includes(searchQuery.toLowerCase())) as task (task.id)}
                    <li class="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm" in:fly={{duration: 900}}>
                        <div>
                            <Checkbox bind:checked={task.completed} />
                        </div>
                        <div class="text-lg font-medium text-gray-700 dark:text-gray-300 flex-1">{task.text}</div>
                        <div class="flex space-x-4">
                            <Button color="red" on:click={() => deleteTask(task.id)}>
                                <TrashBinOutline class="w-4 h-4" />
                            </Button>
                        </div>
                    </li>
                {/each}
            </ul>
        </div>
        <div class="flex flex-col gap-3 items-center">
            <Hr hrClass="w-1/3"/>
            <!-- Message when no tasks are available -->
            {#if $tasks.length === 0}
                <p class="text-gray-500 dark:text-gray-400">No tasks available. Add a new task to get started!</p>
            {:else}
                <p class="text-gray-500 dark:text-gray-400">Total tasks: {$tasks.filter(task => task.text.toLowerCase().includes(searchQuery.toLowerCase())).length}</p>
            {/if}

            <!-- Search input for filtering tasks -->
            {#if $tasks.length > 0}
                <div class="relative w-full sm:w-1/2">
                    <Search bind:value={searchQuery} />
                </div>
            {/if}

            <!-- Button to clear all tasks -->
            <div class="w-full sm:w-1/2 mt-8">
                <Button class="w-full" on:click={clearAllTasks}>Clear All</Button>
            </div>
        </div>

    </div>
</main>