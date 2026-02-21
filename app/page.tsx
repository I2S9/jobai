import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-6rem)] flex-col items-center px-4 pt-32">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl dark:text-white">
          Your AI-Powered Career<br />Preparation Platform
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Practice with realistic AI interviewers, build standout resumes,<br />and land the job you deserve.
        </p>
        <div className="mt-10">
          <Link
            href="/signup"
            className="inline-block rounded-full bg-black px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
