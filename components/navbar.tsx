"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const pathname = usePathname();
  const { setTheme } = useTheme();

  return (
    <nav className="bg-background">
      <div className="mx-auto flex h-16 w-full items-center justify-end gap-5 px-5">
        <div className="flex items-center gap-2 text-secondary font-bold relative">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator />
    </nav>
  );
}
