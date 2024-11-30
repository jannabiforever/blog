// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Post {
			title: string;
			content: string;
			createdAt: string;
			tags: string[];
			imageSource: string | null;
		}

		interface Song {
			title: string;
			album: string;
			artist: string;
			description: string;
			tags: string[];
			imageSource: string | null;
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
