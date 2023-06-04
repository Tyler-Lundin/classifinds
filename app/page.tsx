import Image from 'next/image'
import Link from 'next/link'
import { Roboto_Serif } from "next/font/google"
import { BsSearch } from 'react-icons/bs'


const RS = Roboto_Serif({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Banner />
      <LookingForBarDesktop />
      <LookingForBarMobile />
      <div className="grid relative mt-3 w-screen h-screen grid-cols-12 gap-3">
        <SideBar />
        <Categories />
      </div>
    </div>
  )
}

function Banner() {
  return (
    <div className={`${RS.className} relative w-full h-44 bg-gray-400`}>
      <Image alt="banner" src="/images/banner.jpg" className="object-cover opacity-60" fill />
      <div className="absolute shadow-black top-4 text-white left-8">
        <span className="flex bg-black/30 px-1 rounded-md items-center gap-2">
          <h5 className="text-lg font-bold">classifinds</h5>
          <h5 className="text-sm">|</h5>
          <h5 className="text-md">Spokane, WA</h5>
        </span>
        <Link href="/change-location" className="bg-black/30 px-1 rounded-md underline"><small> change location</small> </Link>
      </div>
    </div>
  )
}

function LookingForBarDesktop() {
  return (
    <div className="w-full bg-gray-200 hidden lg:flex h-16 gap-6 items-center justify-center">
      <div className="flex gap-2 items-center w-full justify-around  mx-8 ">
        <h5 className="text-lg font-bold text-gray-700 whitespace-nowrap">I&apos;m Looking for</h5>
        <input type="text" className="rounded-none w-full max-w-sm bg-none border-b border-black bg-transparent px-2 py-1" placeholder="bike, desktop, poodle, couch, etc." />
        <h5 className="text-lg font-bold text-gray-700 whitespace-nowrap">Within</h5>
        <input type="text" className="rounded-none w-full max-w-xs bg-none border-b border-black bg-transparent px-2 py-1" placeholder="any distance, 10 mi" />
        <h5 className="text-lg font-bold text-gray-700 whitespace-nowrap">of</h5>
        <input type="text" className="rounded-none w-full max-w-xs bg-none border-b border-black bg-transparent px-2 py-1" placeholder="any location, Spokane, WA" />
        <button className="aspect-square p-2 bg-black border-none flex place-items-center hover:opacity-50 focus:scale-125  rounded-lg  z-10">
          <BsSearch className="text-white" />
        </button>

      </div>
    </div>
  )
}

function LookingForBarMobile() {
  return (
    <div className="lg:hidden flex w=full bg-gray-200 h-16 gap-6">
      <div className="flex gap-2 items-center w-full mx-8 relative">
        <input type="text" className="rounded-lg w-full bg-white border-black border px-2 py-1" placeholder="bike, mobile phone, poodle, etc." />
        <button className="aspect-square p-2 bg-black border-none flex place-items-center hover:opacity-50 focus:scale-125 absolute right-0 rounded-r-lg top-1/2 -translate-y-1/2 z-10">
          <BsSearch className="text-white" />
        </button>
      </div>
    </div>
  )
}

function SideBar() {

  return (
    <aside className="lg:flex hidden w-full h-full bg-gray-200 col-span-2">

    </aside>
  )
}

function Categories() {

  return (
    <div className="w-full h-full bg-gray-200 col-span-12 lg:col-span-10">

    </div>
  )
}
