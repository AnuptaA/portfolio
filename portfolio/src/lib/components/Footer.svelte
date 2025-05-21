<!-- Footer.svelte -->
<script lang="ts">
	// Function to handle smooth scrolling for the footer links
	function handleFooterNavClick(section: string): void {
		// Scroll to the section
		const sectionElement = document.getElementById(section);
		if (sectionElement) {
			sectionElement.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<footer class="bg-primary border-tertiary border-t px-3 pb-8 pt-12 md:px-6 lg:px-12">
	<div class="mx-auto max-w-6xl">
		<!-- Main Footer Content -->
		<div class="mb-10 grid grid-cols-1 gap-8 md:grid-cols-12">
			<!-- Left - Bio & Contact -->
			<div class="md:col-span-5">
				<div class="mb-4">
					<div class="inline-block">
						<h2 class="text-dark text-xl font-bold">Anupta Argo</h2>
					</div>
					<p class="text-dark mt-1 max-w-md text-sm opacity-80">
						I learned basic Svelte while designing this website :)
					</p>
				</div>

				<div class="space-y-2">
					<div class="flex items-center">
						<div
							class="bg-tertiary mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="text-accent h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div>
							<p class="text-dark text-xs opacity-60">Email</p>
							<a
								href="mailto:anupta22@gmail.com"
								class="text-navbar text-navbar-hover text-sm transition-colors"
								>anupta22@gmail.com</a
							>
						</div>
					</div>

					<div class="flex items-center">
						<div
							class="bg-tertiary mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="text-accent h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</div>
						<div>
							<p class="text-dark text-xs opacity-60">Location</p>
							<p class="text-dark text-sm">Princeton, NJ</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Center - Navigation -->
			<div class="md:col-span-3">
				<h3 class="text-dark mb-1 text-base font-bold">Navigation</h3>
				<ul class="space-y-1 text-sm">
					<li>
						<a
							href="#about"
							on:click|preventDefault={() => handleFooterNavClick('about')}
							class="text-navbar text-navbar-hover transition duration-300"
						>
							About
						</a>
					</li>
					<div class="border-tertiary border-t"></div>
					<li>
						<a
							href="#experience"
							on:click|preventDefault={() => handleFooterNavClick('experience')}
							class="text-navbar text-navbar-hover transition duration-300"
						>
							Experience
						</a>
					</li>
					<div class="border-tertiary border-t"></div>
					<li>
						<a
							href="#projects"
							on:click|preventDefault={() => handleFooterNavClick('projects')}
							class="text-navbar text-navbar-hover transition duration-300"
						>
							Projects
						</a>
					</li>
					<div class="border-tertiary border-t"></div>
					<li>
						<a
							href="#coursework"
							on:click|preventDefault={() => handleFooterNavClick('coursework')}
							class="text-navbar text-navbar-hover transition duration-300"
						>
							Coursework
						</a>
					</li>
					<div class="border-tertiary border-t"></div>
					<li>
						<a
							href="#skills"
							on:click|preventDefault={() => handleFooterNavClick('skills')}
							class="text-navbar text-navbar-hover transition duration-300"
						>
							Skills
						</a>
					</li>
				</ul>
			</div>

			<!-- Right - Subscribe & Social -->
			<div class="md:col-span-4">
				<h3 class="text-dark mb-1 text-base font-bold">Connect With Me</h3>
				<!-- Social Links -->
				<div>
					<p class="text-dark mb-4 text-sm opacity-80">
						Here are some platforms where I am active!
					</p>
					<div class="flex space-x-3">
						<a
							href="https://www.github.com/anuptaa"
							target="_blank"
							class="bg-tertiary text-dark text-navbar-hover flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 hover:text-white"
							aria-label="GitHub Link"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
								/>
							</svg>
						</a>
						<a
							href="https://www.LinkedIn.com/in/anupta-argo"
							target="_blank"
							class="bg-tertiary text-dark text-navbar-hover flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 hover:text-white"
							aria-label="LinkedIn Link"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Divider -->
		<div class="border-tertiary mb-4 border-t"></div>

		<!-- Bottom Footer -->
		<div class="flex flex-col items-center text-xs md:flex-row md:justify-between">
			<div class="m-auto flex flex-col items-center md:flex-row">
				<p class="text-dark flex items-center opacity-70">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="text-accent mr-1 h-3 w-3"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					Last updated: <span class="ml-1 font-medium">{new Date().toLocaleDateString()}</span>
				</p>
			</div>
		</div>

		<!-- Apple-inspired signature -->
		<div class="text-dark mt-4 flex flex-col items-center text-center text-xs opacity-50">
			<p>
				Inspired by Apple. Developed while unaware of wrist fracture that led to bench press hiatus.
			</p>
			<div class="mt-1 flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mr-1 h-3 w-3"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
					/>
				</svg>
				<span class="text-xs">Feedback appreciated</span>
			</div>
		</div>
	</div>
</footer>
