export const shortenDesc = (desc) => {
    if (desc.length > 100) {
        return desc.slice(0, 100) + '...';
    }
    return desc;
};