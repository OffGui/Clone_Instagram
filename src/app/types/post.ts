export type Post = {
    id: string,
    author: {
        id: string,
        name: string,
        profilePic: string
    },
    title: string,
    images: string[],
    description: string,
    likes: {
        images: string[],
        first: string
    }
}