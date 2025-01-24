import React from "react";
import Button from "./ui/Button";

function Navbar() {
  const handleNavigation = (path: string) => {
    console.log(`Navigating to: ${path}`);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <button
          onClick={() => handleNavigation("/")}
          className="flex items-center gap-2"
        >
          <div className="relative h-8 w-8">
            <div className="absolute h-8 w-8 rounded-full bg-white/10" />
            <div className="absolute h-6 w-6 translate-x-1 translate-y-1 rounded-full bg-white" />
          </div>
          <span className="text-xl font-bold">Coddunity</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {["Product", "How it works", "Features", "Mission", "Company"].map(
            (item) => (
              <button
                key={item}
                onClick={() =>
                  handleNavigation(item.toLowerCase().replace(" ", "-"))
                }
                className="text-sm text-gray-300 hover:text-white"
              >
                {item}
              </button>
            )
          )}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNavigation("sign-in")}
            className="hidden md:block text-sm text-gray-300 hover:text-white"
          >
            Sign In
          </button>
          <Button
            onClick={() => handleNavigation("sign-up")}
            className="bg-white text-black hover:bg-gray-200"
          >
            Sign Up
          </Button>
        </div>
      </div>
      <div
        className="h-px bg-gray-600 mx-auto"
        style={{ width: "calc(100% - 2rem)" }}
      />
    </nav>
  );
}

export default Navbar;
