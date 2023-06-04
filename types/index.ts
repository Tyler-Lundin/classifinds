

type ICategory = {
  id: String,
  name: String,
  branches: ICategory[],
  keywords: String[],
}

type ILocation
