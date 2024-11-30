export function formatContents(text: string[], maxLength: number = 200): string {
    let joined = text.join(' ');
    if (joined.length <= maxLength) {
        return joined;
    }
    return joined.slice(0, maxLength) + '...';
}