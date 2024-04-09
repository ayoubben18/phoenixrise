/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TT2wT0xrfEe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function ConnectWithUs() {
  return (
    <section className="w-full py-6 md:py-12">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Connect with Us
          </h2>
          <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Follow us on social media.
          </p>
        </div>
        <div className="grid grid-cols-3 items-center justify-center gap-4 md:gap-8">
          <Link
            target="_blank"
            className="flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="https://www.linkedin.com/company/phoenixriseteam"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            target="_blank"
            className="flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="https://www.instagram.com/phoenixrise.team/"
          >
            <InstagramIcon className="w-10 h-4" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            target="_blank"
            className="flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="mailto:phoenixriseteam@gmail"
          >
            <MailIcon className="w-4 h-4" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
