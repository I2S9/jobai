export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Job<span className="text-indigo-600 dark:text-indigo-400">AI</span>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          AI-powered interview preparation platform
        </p>
      </div>
    </main>
  );
}
