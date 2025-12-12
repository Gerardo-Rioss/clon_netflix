import { itemsNavbar } from "@/components/data/itemsNavbar"
import { BellRing, Menu, Search } from "lucide-react"
import Logo from "@/components/Shared/Logo/Logo"
import Link from "next/link"
import {Sheet,SheetContent,SheetTrigger} from "@/components/ui/sheet"


const NavbarMobile = () => {
  return (
    <div className="p-4 flex justify-between">
      <Logo/>
      <Sheet>
  <SheetTrigger>
    <Menu/>
  </SheetTrigger>
  <SheetContent side="left" className="bg-black">
    <div className="flex flex-col gap-4 mt-1 ml-1">
      {itemsNavbar.map((item)=>(
        <Link key={item.name} href={item.Link} className="hover:text-gray-300 transition-all duration-300">
          {item.name}
        </Link>
      ))}
    </div>
    <div className="border-[1px] border-white/70 my-5"/>
    <div className="flex justify-between gap-6 mt-4 ml-1 mr-1">
      <Search className="cursor-pointer"/>
      <BellRing className="cursor-pointer"/>
      
      <p>User</p>
      {/* TODO: add user profile */}

    </div>
  </SheetContent>
</Sheet>
    </div>
  )
}

export default NavbarMobile
