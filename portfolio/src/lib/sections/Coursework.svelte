<script lang="ts">
	import CourseItem from '$lib/components/CourseItem.svelte';
	import SpecializedCourseItem from '$lib/components/SpecializedCourseItem.svelte';
	import TutorUcaCourse from '$lib/components/TutorUCACourse.svelte';
	const fundamentals = [
		{
			code: 'COS333',
			name: 'Advanced Programming Techniques',
			description: 'Software development with Agile methodology (PERN stack, Python)'
		},
		{
			code: 'COS226',
			name: 'Algorithms and Data Structures',
			description: 'Advanced algorithms and optimization techniques (Java)'
		},
		{
			code: 'COS240',
			name: 'Reasoning about Computation',
			description: 'Mathematical reasoning for computational problems'
		},
		{
			code: 'COS126',
			name: 'Computer Science: An Interdisciplinary Approach',
			description: 'Fundamental programming concepts (Java)'
		}
	];

	const systems = [
		{
			code: 'COS418',
			name: 'Distributed Systems',
			description: 'Principles and practices of distributed computing (Go)'
		},
		{
			code: 'COS375',
			name: 'Computer Architecture',
			description: 'Principles of modern computer hardware design (C++, MIPS Assembly)'
		},
		{
			code: 'COS306',
			name: 'Contemporary Logic Design',
			description: 'Digital circuit design and logic synthesis (C, Verilog)'
		},
		{
			code: 'COS217',
			name: 'Introduction to Programming Systems',
			description: 'Low-level programming and system software (C, ARM Assembly)'
		}
	];

	const ml = [
		{
			code: 'COS484',
			name: 'Natural Language Processing',
			description: 'NLP models and algorithmic language techniques (Python)'
		},
		{
			code: 'COS324',
			name: 'Introduction to Machine Learning',
			description: 'Intro to neural networks and predictive models (Python)'
		},
		{
			code: 'COS343',
			name: 'Algorithms for Computational Biology',
			description: 'Algorithms applied in bioinformatics (Python)'
		},
		{
			code: 'SML201',
			name: 'Introduction to Data Science',
			description: 'Data analysis and statistical modeling (R)'
		}
	];

	const specializedCourses = [
		{
			code: 'COS445',
			name: 'Economics and Computing',
			description: 'Game theory and economic principles in computational settings'
		},
		{
			code: 'COS350',
			name: 'Ethics of Computing',
			description: 'Ethical dilemmas and societal impacts of computing technologies'
		},
		{
			code: 'ORF307',
			name: 'Optimization',
			description: 'Linear programming and optimization techniques (Python)'
		},
		{
			code: 'ORF245',
			name: 'Fundamentals of Statistics',
			description: 'Probability, statistical inference, and regression models (R)'
		},
		{
			code: 'MAT202',
			name: 'Linear Algebra with Applications',
			description: 'Vector spaces, transformations, and applications in computing'
		},
		{
			code: 'MAT201',
			name: 'Multivariable Calculus',
			description: 'Calculus in multiple dimensions and its applications'
		}
	];
	const ucaPositions = [
		{
			course: "COS445: Economics and Computing (S '25)",
			description: 'Grading assignments and exams around algorithmic and computational game theory'
		},
		{
			course: "COS240: Reasoning About Computation (S '24, F '24)",
			description:
				'Grading assignments and exams on discrete math supporting advanced algorithms and data structures'
		}
	];

	const tutorPositions = [
		{
			course: 'ORF245: Multivariate Statistics',
			description:
				'One-on-one and group tutoring sessions focusing on statistical methods and data analysis techniques'
		},
		{
			course: 'COS126: Intro to Computer Science',
			description:
				'Helping students develop foundational programming skills and problem-solving approaches in Java'
		},
		{
			course: 'COS226: Algorithms and Data Structures',
			description:
				'Providing guidance on algorithm analysis, implementation, and optimization strategies in Java'
		}
	];
</script>

<section id="coursework" class="bg-primary animate-fade-in px-4 py-24 md:px-8 lg:px-16">
	<div class="mx-auto max-w-6xl">
		<h2 class="text-dark mb-8 text-4xl font-bold md:text-5xl">Relevant Coursework</h2>
		<p class="text-dark mb-12 max-w-3xl text-lg opacity-80">
			During my time at Princeton University, I've taken the following courses that have shaped my
			technical expertise and approach to problem-solving.
		</p>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<!-- Course Category 1: Computer Science Fundamentals -->
			<div class="bg-secondary h-full rounded-2xl p-6 md:p-8">
				<div class="mb-6 flex items-center">
					<div class="bg-tertiary mr-4 rounded-xl p-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-accent h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							/>
						</svg>
					</div>
					<h3 class="text-dark text-xl font-bold">Computer Science Fundamentals</h3>
				</div>
				<ul class="space-y-4">
					{#each fundamentals as course}
						<CourseItem {...course} />
					{/each}
				</ul>
			</div>

			<!-- Course Category 2: Systems & Architecture -->
			<div class="bg-secondary h-full rounded-2xl p-6 md:p-8">
				<div class="mb-6 flex items-center">
					<div class="bg-tertiary mr-4 rounded-xl p-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-accent h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h3 class="text-dark text-xl font-bold">Systems & Architecture</h3>
				</div>
				<ul class="space-y-4">
					{#each systems as course}
						<CourseItem {...course} />
					{/each}
				</ul>
			</div>

			<!-- Course Category 3: Machine Learning & Data Science -->
			<div class="bg-secondary h-full rounded-2xl p-6 md:p-8">
				<div class="mb-6 flex items-center">
					<div class="bg-tertiary mr-4 rounded-xl p-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-accent h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
							/>
						</svg>
					</div>
					<h3 class="text-dark text-xl font-bold">Machine Learning & Data Science</h3>
				</div>
				<ul class="space-y-4">
					{#each ml as course}
						<CourseItem {...course} />
					{/each}
				</ul>
			</div>

			<!-- Specialized Courses -->
			<div class="bg-secondary mt-6 rounded-2xl p-6 md:col-span-2 md:p-8 lg:col-span-3">
				<div class="mb-6 flex items-center">
					<div class="bg-tertiary mr-4 rounded-xl p-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-accent h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
							/>
						</svg>
					</div>
					<h3 class="text-dark text-xl font-bold">Specialized & Interdisciplinary Courses</h3>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each specializedCourses as course}
						<SpecializedCourseItem {...course} />
					{/each}
				</div>
			</div>
		</div>

		<!-- UCA & Tutor Positions -->
		<div class="mt-16">
			<h3 class="text-dark mb-6 text-2xl font-bold">UCA & Tutor Positions</h3>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<!-- UCA Positions -->
				<div class="bg-secondary rounded-2xl p-6 md:p-8">
					<div class="flex items-center">
						<div class="bg-tertiary mr-4 rounded-full p-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="text-accent h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<h4 class="text-dark text-xl font-bold">Undergraduate Course Assistant (UCA)</h4>
					</div>

					<ul class="mt-6 space-y-4">
						{#each ucaPositions as pos}
							<TutorUcaCourse {...pos} />
						{/each}
					</ul>
				</div>

				<!-- Tutor Positions -->
				<div class="bg-secondary rounded-2xl p-6 md:p-8">
					<div class="flex items-center">
						<div class="bg-tertiary mr-4 rounded-full p-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="text-accent h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
								/>
							</svg>
						</div>
						<h4 class="text-dark text-xl font-bold">Tutor Positions</h4>
					</div>

					<ul class="mt-6 space-y-4">
						{#each tutorPositions as pos}
							<TutorUcaCourse {...pos} />
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
