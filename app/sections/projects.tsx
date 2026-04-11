import Image from "next/image";

export default function Projects({ id }: { id: string }) {
  return (
    <section id={id} className="flex min-h-screen w-full flex-col items-center justify-center py-20">
      {/* Your Hero Content Here */}
      <h1 className="text-4xl font-bold">Welcome to the Future</h1>
    </section>
  );
}