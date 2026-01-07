"use client";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

export default function CtaButton() {
    const scrollToContact = () => {
        const el = document.getElementById("contact");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Button 
            onClick={scrollToContact} 
            variant="default" 
            size="lg"
            className="group relative overflow-hidden"
        >
            <span className="relative flex items-center gap-3">
                Обговорити задачу
                <Send className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
        </Button>
    );
}