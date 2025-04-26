import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="text-center space-y-8">
          <h1 className="text-8xl font-bold tracking-tight text-primary">
            CA PHÈ 1
          </h1>
          <p className="text-xl text-muted-foreground max-w-md">
            Experience the perfect blend of tradition and innovation
          </p>
        </div>
      </main>
    </div>
  );
}
