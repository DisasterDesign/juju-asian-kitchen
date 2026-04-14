import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-juju-dark-bg text-white px-6">
      <h1 className="text-6xl md:text-8xl font-black text-juju-coral mb-4">404</h1>
      <p className="text-xl mb-8">הדף לא נמצא / Page not found</p>
      <Link
        href="/"
        className="px-6 py-3 bg-juju-coral text-white rounded-full font-semibold hover:bg-juju-coral-dark transition-colors"
      >
        חזרה לדף הבית / Back home
      </Link>
    </div>
  );
}
