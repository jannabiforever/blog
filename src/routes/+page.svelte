<script lang="ts">
	import profile from '$lib/assets/profile.jpeg';

	const posts = [1];
</script>

<div class="relative mx-auto aspect-square w-full">
	<img src={profile} alt="profile" class="w-full" height="auto" />
	<div class="absolute top-5 left-5 flex flex-col gap-2">
		<a
			class="bg-black pt-1.5 pr-2 pb-1.5 pl-2 text-center text-4xl text-white hover:bg-white hover:text-black"
			href="https://github.com/jannabiforever"
		>
			Github
		</a>
		<a
			class="bg-black pt-1.5 pr-2 pb-1.5 pl-2 text-center text-4xl text-white hover:bg-white hover:text-black"
			href="https://instagram.com/4ortis_mane/"
		>
			Instagram
		</a>
	</div>

	<div class="absolute bottom-5 left-5 flex flex-col gap-2">
		<p class="bg-black pt-1.5 pr-2 pb-1.5 pl-2 text-left text-lg">03년생 개발자 유정인 블로그</p>
		<p class="bg-black pt-1.5 pr-2 pb-1.5 pl-2 text-left text-lg">Developer's Blog</p>
	</div>
</div>

<ul class="list-none p-0">
	{#each posts as post (post)}
		<li class="group cursor-pointer py-2 text-xl font-semibold hover:bg-white active:bg-white">
			<a href="/post?id={post}" class="flex w-full flex-wrap no-underline">
				<span
					class="mr-2 text-xl font-semibold break-keep text-white group-hover:text-black group-active:text-black"
				>
					Post {post}
				</span>
			</a>
		</li>
	{/each}
</ul>
