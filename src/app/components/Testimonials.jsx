"use client";

import { InfiniteMovingCards } from './ui/Cards.jsx'
import React, { useEffect, useState } from "react";
import Heading from './ui/Heading';

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="absolute top-[79.9rem] h-[40rem] rounded-md flex flex-col antialiased items-center justify-center overflow-hidden">
      <Heading className="absolute top-[2rem] mi:text-5xl text-6xl sm:text-7xl md:text-8xl">Testimonials</Heading>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "TeddyBuddy has been a lifesaver for our son after his surgery. It gave him comfort when we couldn't, and helped him express his feelings in a way we never imagined.",
    name: "Emily Thompson",
    title: "Mother of 5-year-old patient",
  },
  {
    quote:
      "As a pediatrician, I see children struggling with post-surgery trauma all the time. TeddyBuddy provides the emotional support that is so crucial during recovery.",
    name: "Dr. Sarah Williams",
    title: "Pediatrician at Hope Children's Hospital",
  },
  {
    quote:
      "My daughter talks to TeddyBuddy every night before bed. It’s like having a friend who always understands her. We've seen a noticeable improvement in her mood and confidence.",
    name: "Michael Davis",
    title: "Father of 4-year-old patient"
  },
  {
    quote:
      "TeddyBuddy is a game-changer for child therapy. It’s an incredible tool that helps children open up about their fears and anxieties in a safe and comforting way.",
    name: "Mrs. Amanda Green",
    title: "Child Psychologist"
  },
  {
    quote:
      "I’ve never seen a product that connects with children on such a deep emotional level. TeddyBuddy is more than a toy; it's a friend and a healer.",
    name: "Rebecca Carter",
    title: "CEO of Children's Health Foundation",
  },
];