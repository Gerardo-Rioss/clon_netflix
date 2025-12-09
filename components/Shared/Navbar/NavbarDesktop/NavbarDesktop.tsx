import { cn } from "@/lib/utils";

const NavbarDesktop = () => {
    return (
        <div
            className={cn(
                "z-30 left-0 right-0 top-0 h-16 fixed w-full transition-all duration-300"
            )}
        >
            <div className="px-[4%] mx-auto h-full">
                <div className="flex gap-4 justify-between h-full items-center">
                    <div className="flex gap-2 items-center">
                        <p>Logo GeraRioss</p>
                        <div className="ml-10 flex gap-4">
                            <p>Home</p>
                            <p>Movies</p>
                            <p>Series</p>
                            <p>Profile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NavbarDesktop;
