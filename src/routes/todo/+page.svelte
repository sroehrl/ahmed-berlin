<script lang="ts">
    // Import necessary components and functions
    import { Button, Input } from "flowbite-svelte";
    import {tasks} from "$lib/stores/tasks";

    // Initialize variables
    let newTask = '';
    let searchQuery = '';
    let storedTasks = JSON.parse(localStorage.getItem('todo_tasks') || '[]');

    // Set default tasks if none are stored
    if (!Array.isArray(storedTasks) || storedTasks.length === 0) {
        storedTasks = [
            { id: 1, text: 'Learn Svelte', completed: true },
            { id: 2, text: 'Get a job @ retech', completed: false }
        ];
    }

    // Create a writable store for tasks

    // Function to add a new task
    function addTask() {
        document.startViewTransition(async () => {
            if (newTask.trim()) {
                tasks.update(currentTasks => {
                    const updatedTasks = [
                        ...currentTasks,
                        { id: Date.now(), text: newTask, completed: false }
                    ];
                    localStorage.setItem('todo_tasks', JSON.stringify(updatedTasks));
                    return updatedTasks;
                });
                newTask = '';
            }
        });
    }

    // Function to delete a task by id
    function deleteTask(id) {
        tasks.update(currentTasks => {
            const updatedTasks = currentTasks.filter(task => task.id !== id);
            localStorage.setItem('todo_tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    }

    // Function to clear all tasks
    function clearAllTasks() {
        tasks.set([]);
        localStorage.setItem('todo_tasks', JSON.stringify([]));
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
    tasks.subscribe(value => {
        localStorage.setItem('todo_tasks', JSON.stringify(value));
    });
</script>

<main class="container mx-auto p-4 text-center">
    <h1 class="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Todo List</h1>
    
    <div class="flex flex-col items-center space-y-4">
        
        <!-- Input for adding new tasks -->
        <div class="flex space-x-4 w-full sm:w-1/2">
            <Input 
                class="flex-grow" 
                placeholder="Enter your task" 
                bind:value={newTask} 
                on:keydown={(e) => {
                    if (e.key === 'Enter') {
                        addTask();
                    }
                }} 
            />
            <Button class="flex-shrink-0" on:click={addTask}>
                <svg class="w-6 h-6 me-2" viewBox="0 0 24 24"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="none">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 17h6m-3 3v-6M4.857 4h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 9.143V4.857C4 4.384 4.384 4 4.857 4Zm10 0h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857h-4.286A.857.857 0 0 1 14 9.143V4.857c0-.473.384-.857.857-.857Zm-10 10h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 19.143v-4.286c0-.473.384-.857.857-.857Z"/>
                </svg>              
                Add Task
            </Button>
        </div>
        
        <!-- List of tasks -->
        <ul class="w-full sm:w-1/2 mt-8 space-y-4">
            {#each $tasks as task (task.id)}
            {#if task.text.toLowerCase().includes(searchQuery.toLowerCase())}
                <li class="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
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
            {/if}
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