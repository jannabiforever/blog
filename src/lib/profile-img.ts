export function getProfileImagePaths(): string[] {
	const modules = import.meta.glob('$lib/assets/profile_image/*');
	return Object.keys(modules);
}
