export function DesktopScrollReveal({ src }: { src: any }) {
  if (!src) return null;

  return (
    <section className="py-32 bg-night px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-accent font-mono text-[12px] uppercase tracking-[0.4em] mb-4 block">
            [ Full Layout Architecture ]
          </span>
          <h3 className="text-4xl font-serif italic text-cream">
            Масштабний погляд на проєкт
          </h3>
        </div>

        {/* Контейнер для довгого скріна */}
        <div className="group relative w-full h-[600px] md:h-[800px] overflow-hidden rounded-[3rem] border border-white/5 bg-surface shadow-2xl">
          {/* Браузерна плашка - фіксована зверху */}
          <div className="absolute top-0 inset-x-0 h-10 bg-surface/90 backdrop-blur-md border-b border-white/5 z-30 flex items-center px-6 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>

          {/* Внутрішній контейнер, який рухається */}
          <div className="w-full transition-transform duration-[10s] ease-in-out group-hover:-translate-y-[calc(100%-800px)] will-change-transform">
            <img
              src={typeof src === 'string' ? src : src.src}
              alt="Full Project Scroll"
              className="w-full h-auto display-block pt-10" // Відступ зверху, щоб не перекривати плашкою
              loading="lazy"
            />
          </div>

          {/* Підказка (Overlay) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-700 z-20 bg-night/20">
            <div className="bg-night/80 backdrop-blur-md border border-accent/20 px-8 py-4 rounded-full text-accent text-[12px] uppercase tracking-[0.4em] font-bold shadow-2xl">
              Наведіть, щоб прокрутити
            </div>
          </div>

          {/* Внутрішня тінь для глибини */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] z-10" />
        </div>
      </div>
    </section>
  );
}
