"use client";

import { useState } from "react";
import { Footer } from "./_components/Footer";
import { Form } from "./_components/Form";
import { Gallery } from "./_components/Gallery";
import Header from "./_components/Header";
import { Hero } from "./_components/Hero";
import Invitation from "./_components/Invitation";
import { Schedule } from "./_components/Schedule";
import Loading from "./_components/Loading";

export const dynamic = "force-static";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Invitation />
      <Schedule />
      <Gallery />
      <Form />
      <Footer />
    </main>
  );
}
