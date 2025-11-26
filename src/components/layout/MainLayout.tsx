import { Outlet, Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; //

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            {/* Ganti 'img' dengan logo dari store jika perlu */}
            <span className="font-bold">Desa Sukamaju</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Beranda
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/profil" className={navigationMenuTriggerStyle()}>
                  Profil Desa
                </Link>
              </NavigationMenuItem>
              {/* Tambahkan link lain (Berita, Potensi) di sini nanti */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Konten Halaman */}
      <main className="flex-1">
        <Outlet /> {/* Ini mirip @yield('content') di Laravel */}
      </main>

      {/* Footer */}
      <footer className="py-6 md:px-8 md:py-0 border-t">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © {new Date().getFullYear()} Desa Sukamaju. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
