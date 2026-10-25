import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="font-hand text-3xl text-accent">oops!</p>
      <h1 className="mt-2 text-5xl font-extrabold tracking-tight">This page isn’t part of the work.</h1>
      <Link
        href="/"
        className="lift mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent"
      >
        Back to the homepage
      </Link>
    </Container>
  );
}
