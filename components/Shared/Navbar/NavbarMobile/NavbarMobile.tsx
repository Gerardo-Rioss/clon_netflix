import { itemsNavbar } from "@/components/data/itemsNavbar"
import Logo from "@/components/Shared/Logo/Logo"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"


const NavbarMobile = () => {
  return (
    <div className="p-4 flex justify-between">
      <Logo/>
      <Sheet>
  <SheetTrigger>
    <Menu/>
  </SheetTrigger>
  <SheetContent side="left" className="bg-black">
    <div className="flex flex-col gap-4">
      {itemsNavbar.map((item)=>(
        <Link key={item.name} href={item.Link} className="hover:text-gray-300 transition-all duration-300">
          {item.name}
        </Link>
      ))}
    </div>
    <div className="border-[1px] border-white/70 my-5"/>
  </SheetContent>
</Sheet>
    </div>
  )
}

export default NavbarMobile
