export type INavLink = {
  imgURL: string
  route: string
  label: string
}

export type IUpdateUser = {
  userId: string
  name: string
  bio: string
  imageId: string
  imageUrl: URL | string
  file: File[]
}

export type INewPost = {
  userId: string
  caption: string
  file: File[]
  location: string
  tags?: string
}

export type IUpdatePost = {
  postId: string
  caption: string
  location: string
  tags?: string
  file: File[]
  imageId: string
  imageUrl: URL
}

export type IUser = {
  id: string
  name: string
  username: string
  email: string
  bio: string
  imageUrl: string
}

export type INewUser = {
  name: string
  username: string
  email: string
  password: string
}
