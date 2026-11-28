import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { createContext } from "react";

gsap.registerPlugin(ScrollTrigger);

export const scrollTrigger=createContext()