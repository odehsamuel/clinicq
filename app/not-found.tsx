export default function Notfound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-white">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="mb-8 text-xl">Page Not Found</p>
      <a
        href="/"
        className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700"
      >
        Return to Home
      </a>
    </div>
  );
}
