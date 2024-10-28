<script>
  import "../app.postcss";
  import {DarkMode, Navbar, NavBrand, NavUl, NavLi, NavHamburger} from "flowbite-svelte";
  import {base} from "$app/paths";
</script>
<Navbar class="z-10" let:hidden let:toggle>
    <NavBrand>
        <DarkMode/>
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-3">
      <a href="{base}/">Age Prediction with Agify - Ahmed Bauer</a>
    </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="{base}/">Age Prediction</NavLi>
      <NavLi href="{base}/todo">ToDo List</NavLi>
    </NavUl>
</Navbar>
<div class="my-5">
  <slot />
</div>
