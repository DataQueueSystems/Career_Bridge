import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-[4.25rem] text-center">
      <p className="font-display text-8xl font-bold text-brand">404</p>
      <h1 className="mt-2 text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-8 rounded-xl bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-navy-800">Back to home</Link>
    </section>
  );
}
