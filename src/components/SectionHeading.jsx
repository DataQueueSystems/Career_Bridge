import Reveal from './Reveal.jsx';

export default function SectionHeading({ title, children, light = false, left = false, compact = false }) {
  return (
    <Reveal className={`${compact ? 'mb-7 sm:mb-14' : 'mb-12 sm:mb-14'} max-w-3xl ${left ? '' : 'mx-auto text-center'}`}>
      <h2 className={`text-3xl font-bold sm:text-4xl lg:text-5xl ${light ? '!text-white' : ''}`}>{title}</h2>
      {children && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-blue-100' : 'text-slate-600'}`}>{children}</p>}
      <span className={`mt-5 block h-1 w-14 rounded-full bg-gradient-to-r from-brand to-leaf ${left ? '' : 'mx-auto'}`} />
    </Reveal>
  );
}
