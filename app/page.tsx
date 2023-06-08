import Image from 'next/image'
import Link from 'next/link'
import { Roboto_Serif } from "next/font/google"
import { BsFilter, BsSearch } from 'react-icons/bs'
import Categories from '@/components/Categories'
import RecentListings from '@/components/RecentListings'


const RS = Roboto_Serif({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="h-full min-h-screen bg-gray-100 dark:bg-zinc-900 w-screen overflow-x-hidden">
      <Banner />
      <LookingForBarDesktop />
      <LookingForBarMobile />
      {/* @ts-expect-error - Promise JSK Element SUPPOSEDLY fixed with typescript update?!*/}
      <Categories />
      <RecentListings />
    </div>
  )
}

function Banner() {
  return (
    <div className={`${RS.className} relative w-full py-1 px-4 md:px-6 bg-gradient-to-r from-green-300 dark:from-green-700 via-blue-500 dark:via-blue-700 to-purple-300 dark:to-purple-700 text-black dark:text-white`}>
      <span className="flex gap-2 px-1 rounded-md items-center">
        <Link href="/" className="text-md md:text-lg font-bold">classifinds</Link>
        <h5 className="text-sm ">|</h5>
        <Link href="/change-location" className="text-sm md:text-md rounded-md hover:underline">Spokane, WA </Link>

        <div className="flex gap-2 w-fit font-light items-center justify-center absolute right-4 md:right-6">
          <Link href="/auth/signin" className=" hover:underline lowercase">Sign In</Link>
          <h5 className="text-sm">|</h5>
          <Link href="/auth/signup" className=" hover:underline lowercase">register</Link>
        </div>
      </span>
    </div>
  )
}

function LookingForBarDesktop() {
  return (
    <div className="w-full hidden lg:flex h-16 gap-6 items-center justify-center">
      <div className="flex gap-2 items-center w-full justify-around  mx-6 ">
        <h5 className="text-lg font-bold text-gray-700 dark:text-gray-100 whitespace-nowrap">I&apos;m Looking for</h5>
        <input type="text" className="rounded-none w-full max-w-sm bg-none border-b border-black dark:border-gray-100 bg-transparent px-2 py-1" placeholder="bike, desktop, poodle, couch, etc." />
        <h5 className="text-lg font-bold text-gray-700 dark:text-gray-100 whitespace-nowrap">Within</h5>
        <input type="text" className="rounded-none w-full max-w-xs bg-none border-b border-black dark:border-gray-100 bg-transparent px-2 py-1" placeholder="any distance, 10 mi" />
        <h5 className="text-lg font-bold text-gray-700 dark:text-gray-100 whitespace-nowrap">of</h5>
        <input type="text" className="rounded-none w-full max-w-xs bg-none border-b border-black dark:border-gray-100 bg-transparent px-2 py-1" placeholder="any location, Spokane, WA" />
        <button className="aspect-square p-2 bg-black dark:bg-gray-100 border-none flex place-items-center hover:opacity-50 focus:scale-125  rounded-lg  z-10">
          <BsSearch className="text-white dark:text-black" />
        </button>

      </div>
    </div>
  )
}

function LookingForBarMobile() {
  return (
    <div className="lg:hidden flex w-full  h-16 gap-4">
      <div className="flex gap-2 items-center w-full relative ml-8">
        <input type="text" className="rounded-lg w-full bg-white dark:bg-gray-900 border-black dark:border-gray-100 border px-2 py-1" placeholder="bike, mobile phone, poodle, etc." />
        <button className="aspect-square p-2 bg-black border-none flex place-items-center hover:opacity-50 focus:scale-125 absolute right-1 rounded-r-lg top-1/2 -translate-y-1/2 z-10">
          <BsSearch className="text-white" />
        </button>
      </div>
      <button className="flex items-center gap-2 bg-white dark:bg-black border border-black dark:border-gray-100 self-center h-fit mr-8 p-2 rounded-lg">
        <BsFilter className="text-black dark:text-white" />
      </button>
    </div>
  )
}

function FilterBar() {

  return (
    <aside className="filter-bar flex flex-col sm:flex-row gap-2 sm:gap-6 p-6 bg-gray-100 rounded-md">
      <form className="flex flex-col sm:flex-row gap-2 sm:gap-6">
        <div className="flex items-center gap-2">
          <label htmlFor="search" className="font-bold text-gray-700 dark:text-gray-100">Search:</label>
          <input type="text" id="search" name="search" className="p-2 rounded-md border border-gray-200" />
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="font-bold text-gray-700 dark:text-gray-100">Sort By:</label>
          <select id="sort" name="sort" className="p-2 rounded-md border border-gray-200">
            <option value="date">Date</option>
            <option value="name">Name</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="category" className="font-bold text-gray-700 dark:text-gray-100">Category:</label>
          <select id="category" name="category" className="p-2 rounded-md border border-gray-200">
            <option value="all">All</option>
            <option value="cat1">Category 1</option>
            <option value="cat2">Category 2</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input type="submit" value="Apply Filters" className="p-2 rounded-md border border-gray-200 bg-blue-500 text-white cursor-pointer hover:bg-blue-600" />
        </div>
      </form>
    </aside>
  )
}

