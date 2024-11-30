const Song1: App.Song = {
    title: "고백극장",
    album: "환상의 나라",
    artist: "잔나비",
    description: "잔나비의 3집 앨범 '환상의 나라' 수록곡",
    tags: [],
    imageSource: "https://image.yes24.com/goods/102946682/XL"
}

export const getSongs: () => App.Song[] = () => [Song1];