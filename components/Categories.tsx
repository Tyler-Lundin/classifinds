
import { Category } from '@prisma/client'
import Image from 'next/image';
import Link from 'next/link';
import slugify from 'slugify'


async function getCategories() {
  const res = await fetch('http:/localhost:3000/api/categories', { method: 'GET', });
  if (!res.ok) throw new Error(res.statusText);
  return await res.json() as Category[];
}

const slug = (str: string) => slugify(str, { lower: true, remove: /[*+~.()'"!:@]/g, replacement: '_' });
const srcDark = (str: string) => `/images/categories/${slug(str)}_dark_${oneOrTwo()}.jpg`;
const srcLight = (str: string) => `/images/categories/${slug(str)}_light_${oneOrTwo()}.jpg`;
const oneOrTwo = () => Math.random() > 0.5 ? 1 : 2;

async function Categories() {
  const categories = await getCategories();
  const parentCategories = categories.filter((category) => !category.parentId);
  const childCategories = categories.filter((category) => category.parentId);

  return (
    <div className="w-full h-fit px-6 dark:text-white">
      <h2 className="text-4xl font-bold pb-6">Categories</h2>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4">
        {parentCategories.map((parentCategory) => (
          <Link key={parentCategory.id} className="flex flex-col gap-2 group p-4 h-40 relative border border-black dark:border-gray-500 overflow-hidden rounded-md" href={`/category/${slug(parentCategory.name)}`}>
            <Image src={srcDark(parentCategory.name)} alt={srcDark(parentCategory.name)} quality={100} fill className="z-0 transition-all duration-500 group-hover:scale-110 absolute object-cover hidden dark:block" />
            <Image src={srcLight(parentCategory.name)} alt={srcLight(parentCategory.name)} quality={100} fill className="z-0 transition-all duration-500 group-hover:scale-110 absolute object-cover dark:hidden" />
            <h2 className="absolute line-clamp-2 w-full left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-2xl  bg-white/80 backdrop-blur-sm dark:bg-black/80 shadow px-2 font-light"> {parentCategory.name}</h2>
            <div className=" flex-col gap-2 hidden">
              {childCategories.filter((childCategory) => childCategory.parentId === parentCategory.id).map((childCategory) => (
                <Link key={childCategory.id} href={`/category/${slug(childCategory.name)}`}>
                  {childCategory.name}
                </Link>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories;
