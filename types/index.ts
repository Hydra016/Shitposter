export interface Post {
    id: string,
    title: string,
    content: string,
    image?: string,
    userId: string | undefined
}

export interface User {
    id: string,
    name: string,
    username: string,
    password: string,
    photo?: string
}