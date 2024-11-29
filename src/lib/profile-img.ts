export function getProfileImagePaths(): string[] {
	const modules = import.meta.glob('/src/lib/assets/profile_image/*');
	return Object.keys(modules);
}
