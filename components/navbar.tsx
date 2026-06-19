"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="border-b border-primary bg-background">
      <div className="mx-auto flex h-16 w-full items-center justify-end gap-5 px-5">
        <div className="flex items-center gap-2 text-gray-600 font-bold relative">
          <Button
            variant={pathname === "/" ? "secondary" : "ghost"}
            className="hover:text-white px-3 py-3"
            asChild
          >
            <Link href={"/"}>Home</Link>
          </Button>
          <Button
            variant={pathname === "/about" ? "secondary" : "ghost"}
            className="hover:text-white px-3 py-3"
            asChild
          >
            <Link href={"/about"}>About</Link>
          </Button>
          <Button
            variant={pathname === "/projects" ? "secondary" : "ghost"}
            className="hover:text-white px-3 py-3"
            asChild
          >
            <Link href={"/projects"}>Projects</Link>
          </Button>
          <Button
            variant={pathname === "/contact" ? "secondary" : "ghost"}
            className="hover:text-white px-3 py-3"
            asChild
          >
            <Link href={"/contact"}>Contact</Link>
          </Button>
          <Button
            variant={pathname === "/more" ? "secondary" : "ghost"}
            className="hover:text-white px-3 py-3"
            asChild
          >
            <Link href={"/more"}>More</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
