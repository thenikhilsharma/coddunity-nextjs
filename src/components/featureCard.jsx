"use client";
import { cn } from "@/lib/utils";

export default function FeatureCard() {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXFtbW9hbTJxZjl5YXMzYXlpYjdjbXo0eGg5eDNrMjJ4ZjFpa2lwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wwg1suUiTbCY8H8vIA/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXFtbW9hbTJxZjl5YXMzYXlpYjdjbXo0eGg5eDNrMjJ4ZjFpa2lwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wwg1suUiTbCY8H8vIA/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Coddunity
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            This a coddunity feature card
            This a coddunity feature card
          </p>
        </div>
      </div>
    </div>
  );
}