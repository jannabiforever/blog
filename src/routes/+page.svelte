<script lang="ts">
	import { getProfileImagePaths } from '$lib/profile-img';
	import { OutboundLink, Accordion, AccordionItem } from 'carbon-components-svelte';
	import { onMount } from 'svelte';

	let profileImagePaths: string[] = getProfileImagePaths();
	let currentImageIndex = $state(0);
	let currentProfileImagePath = $derived(profileImagePaths[currentImageIndex]);

	const changeImage = () => {
		currentImageIndex = (currentImageIndex + 1) % profileImagePaths.length;
	};

	setInterval(changeImage, 10000);
</script>

<div class="main-container">
	<div class="main-content">
		<h1>Hi, I'm Jungin Yu!</h1>
		<div class="content">
			<p>
				I'm an enthusiastic professional based in Seoul, South Korea.
				<br />
				Here's a brief introduction about me.
			</p>
			<div class="bio">
				<Accordion>
					<AccordionItem title="What is this blog for?">
						<div>This blog is where I share my thoughts.</div>
						<div>
							I'll do my best to keep the posts in English,
							<br />
							but occasionally, I might write in Korean.
						</div>
					</AccordionItem>
					<AccordionItem title="Education">
						<div>
							I'm currently majoring in Physics and Astronomy at
							<OutboundLink href="http://www.snu.ac.kr">SNU</OutboundLink>.
						</div>
						<div>
							However, I consider myself more of a self-taught learner
							<br />
							than a traditional scholar.
						</div>
						<div>I've never completed a full year of university studies.</div>
						<div>
							I've studied QFT, cosmology, and a bit of string theory, as well as a slight deal of
							computer engineering knowledge on my own.
						</div>
					</AccordionItem>
					<AccordionItem title="Work">
						<div>
							I'm currently working in
							<OutboundLink href="http://www.instagram.com/sdij_broker">brokermath</OutboundLink>,
							<br />
							which is an academy company based in Gangnam, Seoul.
						</div>
						<div>
							I'm also a part-time instructor at
							<OutboundLink href="https://auraedu.me/">auraedu</OutboundLink>.
						</div>
						<div>
							These days, I spend most of my time running side projects,
							<br />
							which I'm deeply passionate about.
						</div>
						<div>
							I also enjoy contributing to open-source projects,
							<br />
							such as
							<OutboundLink href="https://surrealdb.com/">SurrealDB</OutboundLink>.
						</div>
					</AccordionItem>
					<AccordionItem title="Hobbies">
						<div>
							I enjoy playing the piano and guitar.
							<br />
							You can check out my videos on my 2nd
							<OutboundLink href="https://www.instagram.com/vivace_e_delicato">
								instagram
							</OutboundLink>,
							<br />
							but I'm not that good at it :(
						</div>
						<div>
							These days, I practice Brazilian Jiu-Jitsu and wrestling.
							<br />
							I'm currently a white belt Jiujiteiro.
						</div>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	</div>
	<div class="img-content">
		<img src={currentProfileImagePath} alt="profile" />
	</div>
</div>

<style>
	.main-container {
		display: flex;
		justify-content: space-between;
	}
	.main-content {
		width: 65%;
	}

	.main-content h1 {
		margin-bottom: 1rem;
	}

	.bio {
		margin-top: 1rem;
	}

	.bio div {
		margin-top: 0.5rem;
	}

	.img-content {
		width: 35%;
		height: auto;

		padding-left: 1rem;
	}

	.img-content img {
		width: 100%;
		height: auto;

		border-radius: 0.5rem;
	}
</style>
