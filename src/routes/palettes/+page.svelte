<script>
	import Dummy from './Dummy.svelte';
</script>

<Dummy />

<Dummy
	title="#d08770"
	page="#2e3440"
	color="#eceff4"
	section="#d8dee9"
	experience="#d08770"
	company="#81a1c1"
	sidebar="#3b4252"
	sidebarColor="#eceff4"
	sidebarSection="#d8dee9"
	sidebarExperience="#d08770"
	sidebarCompany="#81a1c1"
/>

<Dummy
	title="#4c566a"
	page="#ffffff"
	color="#2e3440"
	section="#4c566a"
	experience="#bf616a"
	company="#8fbcbb"
	sidebar="#e5e9f0"
	sidebarColor="#2e3440"
	sidebarSection="#4c566a"
	sidebarExperience="#bf616a"
	sidebarCompany="#8fbcbb"
/>

<style lang="postcss">
	.page {
		width: 210mm;

		background-color: var(--page);
		box-shadow:
			var(--shadow) 0px 14px 28px,
			var(--shadow) 0px 10px 10px;
	}

	.page {
		--page: #ffffff; /* Page background */

		--sidebar: #000000; /* Sidebar background */
		--color: #000000; /* Text color */
		--title: #000000; /* Page title text color */
		--section: #000000; /* Section headline text color */
		--experience: #000000; /* Job title text color */
		--company: #000000; /* Company name text color */
	}
	/* Color settings for sidebar content, needs to contrast with the --sideabr color */
	.page .bg-sidebar {
		--color: #ffffff;
		--section: #ffffff;
		--experience: #ffffff;
		--company: #ffffff;

		color: var(--color);
	}

	.page.page--1 {
		--slate: oklch(0.3581 0.0102 253.97);
		--obsidian: oklch(0.1347 0.0662 286.09);
		--linen: oklch(0.9902 0.0171 67.62);
		/* --blood: oklch(0.5841 0.1896 22.11); */
		/* --blood: #dc434b; */
		--blood: oklch(0.5361 0.1896 21.92);

		--bone-on-slate: oklch(0.8433 0.0131 71.33);
		--linen-on-slate: oklch(0.9202 0.0171 67.62);
		/* --blood-on-slate: oklch(0.6341 0.1896 22.11); */
		/* --blood-on-slate: #dc434b; */
		--blood-on-slate: oklch(0.6761 0.1896 21.92);

		--page: var(--linen);

		--sidebar: var(--slate); /* Sidebar background */
		--color: var(--obsidian); /* Text color */
		--title: var(--obsidian); /* Page title text color */
		--section: oklch(0.5714 0.0488 31.14);
		--experience: var(--blood); /* Job title text color */
		--company: var(--obsidian); /* Company name text color */
	}
	/* Color settings for sidebar content, needs to contrast with the --sideabr color */
	.page.page--1 .bg-sidebar {
		--color: var(--linen-on-slate);
		--section: var(--linen-on-slate);
		--section: oklch(0.6214 0.0488 31.14);
		--experience: var(--blood-on-slate);
		--company: var(--linen-on-slate);

		color: var(--color);
	}

	.page.page--a {
		--page: #fffffb;

		--sidebar: #1f5195;
		--color: #1c1c1c;
		--title: #1c1c1c;
		--section: #1c1c1c;
		--experience: oklch(0.6435 0.1934 40.73);
		--company: #1c1c1c;
	}
	.page.page--a .bg-sidebar {
		--color: #fffffb;
		--section: #fffffb;
		--experience: oklch(0.7035 0.1934 40.73);
		--company: #fffffb;

		color: var(--color);
	}

	.page.page--b {
		--page: #f5f3ef;

		--sidebar: #393d42;
		--color: #1c1c1c;
		--title: #1c1c1c;
		--section: oklch(0.6659 0.0877 66.8);
		--experience: oklch(0.5504 0.1939 13.29);
		--company: #1c1c1c;
	}
	.page.page--b .bg-sidebar {
		--color: #fffffb;
		--section: oklch(0.6659 0.0877 66.8);
		--experience: oklch(0.6204 0.1939 13.29);
		--company: #fffffb;

		color: var(--color);
	}

	.page.page--c {
		--page: #f7f9fc;

		--sidebar: #1b2a41;
		--color: #1f1f1f;
		--title: #0e1e33;
		--section: #2b4d70;
		--experience: #1a3a5f;
		--company: #3b506d;
	}
	.page.page--c .bg-sidebar {
		--color: #ffffff;
		--section: #a3c4dc;
		--experience: #d0e2f2;
		--company: #ffffff;

		color: var(--color);
	}

	.page.page--d {
		--page: #fefbf6;

		--sidebar: #5d4037;
		--color: #3e2723;
		--title: #4e342e;
		--section: #6d4c41;
		--experience: #795548;
		--company: #8d6e63;
	}
	.page.page--d .bg-sidebar {
		--color: #ffffff;
		--section: #ffccbc;
		--experience: #ffe0b2;
		--company: #d7ccc8;

		color: var(--color);
	}

	.page.page--e {
		--page: #ffffff;

		--sidebar: #2c2c2c;
		--color: #333333;
		--title: #111111;
		--section: #444444;
		--experience: #555555;
		--company: #666666;
	}
	.page.page--e .bg-sidebar {
		--color: #eeeeee;
		--section: #bbbbbb;
		--experience: #cccccc;
		--company: #ffffff;

		color: var(--color);
	}

	.page.page--f {
		--page: #fafaf8;

		--sidebar: #00695c;
		--color: #263238;
		--title: #004d40;
		--section: #00796b;
		--experience: #009688;
		--company: #4db6ac;
	}
	.page.page--f .bg-sidebar {
		--color: #ffffff;
		--section: #b2dfdb;
		--experience: #80cbc4;
		--company: #ffffff;

		color: var(--color);
	}

	.page.page--g {
		--page: #fcf9f8;

		--sidebar: #4e2724;
		--color: #2c1b18;
		--title: #5c2c29;
		--section: #7b3e3a;
		--experience: #a94f48;
		--company: #d77a72;
	}
	.page.page--g .bg-sidebar {
		--color: #ffffff;
		--section: #fbbdb5;
		--experience: #fdd2cd;
		--company: #ffffff;

		color: var(--color);
	}

	.page.page--h {
		--page: #fdfdfd; /* Near white background for clarity */

		--sidebar: #2f3542; /* Cool slate gray */
		--color: #1e1e1e; /* Main text: very dark gray, not black */
		--title: #1a1a1a; /* Slightly bolder for name/title */
		--section: #6c757d; /* Muted gray-blue, understated section headers */
		--experience: #b22222; /* Deep crimson, vibrant but elegant */
		--company: #aa8800; /* Muted gold, complements crimson well */
	}
	.page.page--h .bg-sidebar {
		--color: #f1f2f6; /* Very light slate for sidebar text */
		--section: #dcdcdc; /* Soft gray for section headlines */
		--experience: #ff4c4c; /* Brighter crimson to pop on dark bg */
		--company: #ffcc00; /* Lighter gold for company name contrast */

		color: var(--color);
	}

	.page.page--i {
		--page: #995cd0;
		--sidebar: #201d30;

		--color: #201d30;
		--title: #8edf5f;
		--section: #8edf5f;
		--experience: #ec7744;
		--company: #201d30;
	}
	.page.page--i .bg-sidebar {
		--color: #978ded;
		--section: #8edf5f;
		--experience: #ec7744;
		--company: #978ded;

		color: var(--color);
	}

	.page.page--j {
		--page: #f6f5f2;
		--sidebar: #1b1b1b;
		--color: #2a2a2a;
		--title: #708090;
		--section: #708090;
		--experience: #708090;
		--company: #2a2a2a;
	}
	.page.page--j .bg-sidebar {
		--color: #f6f5f2;
		--section: #708090;
		--experience: #708090;
		--company: #f6f5f2;

		color: var(--color);
	}

	.page.page--k {
		--page: #e8d5d3;
		--sidebar: #b2adb4;
		--color: #1c1c1c;
		--title: #362022;
		--section: #708090;
		--experience: #9e2224;
		--company: #1c1c1c;
	}
	.page.page--k .bg-sidebar {
		--color: #1c1c1c;
		--section: #708090;
		--experience: #9e2224;
		--company: #1c1c1c;

		color: var(--color);
	}

	.page.page--l {
		--page: #e1d6f8;
		--sidebar: #052a6a;

		--color: #1c1c1c;
		--title: #052a6a;
		--section: #25629b;
		--experience: #e8786d;
		--company: #1c1c1c;
	}
	.page.page--l .bg-sidebar {
		--color: #c1c1c1;
		--section: #cdd3f4;
		--experience: #e8786d;
		--company: #c1c1c1;

		color: var(--color);
	}
</style>
