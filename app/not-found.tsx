import { TLink as Link } from "@/components/Transition";
export default function NotFound() {
  return (<section className="grid min-h-screen place-items-center px-6 text-center"><div>
    <p className="font-display text-8xl grad-text">404</p><h1 className="mt-4 font-display text-3xl">This page does not exist.</h1>
    <Link href="/" className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-black">Back to home</Link></div></section>);
}
