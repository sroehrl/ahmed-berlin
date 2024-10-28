
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const ALLUSERSPROFILE: string;
	export const APPDATA: string;
	export const ChocolateyInstall: string;
	export const ChocolateyLastPathUpdate: string;
	export const ChocolateyToolsLocation: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const DriverData: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const IDEA_INITIAL_DIRECTORY: string;
	export const INIT_CWD: string;
	export const JETBRAINS_INTELLIJ_COMMAND_END_MARKER: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const NODE: string;
	export const NODE_ENV: string;
	export const npm_config_argv: string;
	export const npm_config_bin_links: string;
	export const npm_config_ignore_optional: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_init_license: string;
	export const npm_config_init_version: string;
	export const npm_config_registry: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const npm_config_user_agent: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_config_version_git_message: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_version_git_tag: string;
	export const npm_config_version_tag_prefix: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_author_name: string;
	export const npm_package_author_url: string;
	export const npm_package_bin_svelte_flowbite_boilerplate: string;
	export const npm_package_dependencies_classnames: string;
	export const npm_package_dependencies_command_exists: string;
	export const npm_package_dependencies_cross_spawn: string;
	export const npm_package_dependencies_dayjs: string;
	export const npm_package_dependencies_flowbite: string;
	export const npm_package_dependencies_flowbite_svelte: string;
	export const npm_package_dependencies_flowbite_svelte_icons: string;
	export const npm_package_dependencies_flowbite_typography: string;
	export const npm_package_dependencies_local_storage: string;
	export const npm_package_dependencies_svelte_i18n: string;
	export const npm_package_dependencies_tailwind_merge: string;
	export const npm_package_dependencies_values_js: string;
	export const npm_package_dependencies__floating_ui_dom: string;
	export const npm_package_dependencies__popperjs_core: string;
	export const npm_package_dependencies__sveltejs_adapter_static: string;
	export const npm_package_description: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies_postcss_load_config: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_license: string;
	export const npm_package_name: string;
	export const npm_package_private: string;
	export const npm_package_readmeFilename: string;
	export const npm_package_scripts_build: string;
	export const npm_package_scripts_check: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_type: string;
	export const npm_package_version: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const OneDrive: string;
	export const OneDriveConsumer: string;
	export const OS: string;
	export const Path: string;
	export const PATHEXT: string;
	export const PhpStorm: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSExecutionPolicyPreference: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const SESSIONNAME: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
	export const TERMINAL_EMULATOR: string;
	export const TERM_SESSION_ID: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VBOX_MSI_INSTALL_PATH: string;
	export const windir: string;
	export const YARN_WRAP_OUTPUT: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_API_PATH: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		ALLUSERSPROFILE: string;
		APPDATA: string;
		ChocolateyInstall: string;
		ChocolateyLastPathUpdate: string;
		ChocolateyToolsLocation: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		DriverData: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		IDEA_INITIAL_DIRECTORY: string;
		INIT_CWD: string;
		JETBRAINS_INTELLIJ_COMMAND_END_MARKER: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		NODE: string;
		NODE_ENV: string;
		npm_config_argv: string;
		npm_config_bin_links: string;
		npm_config_ignore_optional: string;
		npm_config_ignore_scripts: string;
		npm_config_init_license: string;
		npm_config_init_version: string;
		npm_config_registry: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		npm_config_user_agent: string;
		npm_config_version_commit_hooks: string;
		npm_config_version_git_message: string;
		npm_config_version_git_sign: string;
		npm_config_version_git_tag: string;
		npm_config_version_tag_prefix: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_author_name: string;
		npm_package_author_url: string;
		npm_package_bin_svelte_flowbite_boilerplate: string;
		npm_package_dependencies_classnames: string;
		npm_package_dependencies_command_exists: string;
		npm_package_dependencies_cross_spawn: string;
		npm_package_dependencies_dayjs: string;
		npm_package_dependencies_flowbite: string;
		npm_package_dependencies_flowbite_svelte: string;
		npm_package_dependencies_flowbite_svelte_icons: string;
		npm_package_dependencies_flowbite_typography: string;
		npm_package_dependencies_local_storage: string;
		npm_package_dependencies_svelte_i18n: string;
		npm_package_dependencies_tailwind_merge: string;
		npm_package_dependencies_values_js: string;
		npm_package_dependencies__floating_ui_dom: string;
		npm_package_dependencies__popperjs_core: string;
		npm_package_dependencies__sveltejs_adapter_static: string;
		npm_package_description: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies_postcss_load_config: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_vite: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_license: string;
		npm_package_name: string;
		npm_package_private: string;
		npm_package_readmeFilename: string;
		npm_package_scripts_build: string;
		npm_package_scripts_check: string;
		npm_package_scripts_check_watch: string;
		npm_package_scripts_dev: string;
		npm_package_scripts_preview: string;
		npm_package_type: string;
		npm_package_version: string;
		NUMBER_OF_PROCESSORS: string;
		OneDrive: string;
		OneDriveConsumer: string;
		OS: string;
		Path: string;
		PATHEXT: string;
		PhpStorm: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROMPT: string;
		PSExecutionPolicyPreference: string;
		PSModulePath: string;
		PUBLIC: string;
		SESSIONNAME: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
		TERMINAL_EMULATOR: string;
		TERM_SESSION_ID: string;
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VBOX_MSI_INSTALL_PATH: string;
		windir: string;
		YARN_WRAP_OUTPUT: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_API_PATH: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
