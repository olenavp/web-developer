export function ProjectShowcaseSplit({ project }: { project: any }) {
  return (
    <section className="py-16 md:py-24 bg-graphite relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-start">      
          <div className="md:sticky md:top-32 space-y-10 lg:space-y-16">
            <div className="space-y-6">
              <span className="text-accent/90 font-mono text-[11px] lg:text-[12px] uppercase tracking-[0.4em] font-bold">
                [ Концепція ]
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif italic text-cream leading-tight">
                Проблема та рішення
              </h2>
              <div className="space-y-6 lg:space-y-8 text-cream/75 font-light leading-relaxed text-base lg:text-lg">
                <p>{project.challenge}</p>
                <div className="h-px w-full bg-white/10" />
                <p>{project.solution}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-accent/50 font-mono text-[10px] lg:text-[12px] uppercase tracking-[0.4em] block text-left md:text-right">
              [ Desktop view ]
            </span>

            <div className="group relative w-full h-[450px] md:h-[500px] lg:h-[700px] overflow-hidden rounded-[1rem] lg:rounded-[1.5rem] border border-white/50 bg-surface shadow-2xl transition-all duration-500">
              <div className="absolute top-0 inset-x-0 h-8 bg-surface/90 backdrop-blur-md border-b border-white/10 z-30 flex items-center px-4 gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>

              <div className="w-full h-full overflow-y-auto md:overflow-hidden scrollbar-hide custom-touch-scroll">
                <div className="w-full transition-transform duration-[2s] ease-in-out md:group-hover:-translate-y-[calc(100%-500px)] lg:group-hover:-translate-y-[calc(100%-700px)]">
                  <img
                    src={
                      typeof project.desktopImg === 'string'
                        ? project.desktopImg
                        : project.desktopImg.src
                    }
                    alt="Full view"
                    className="w-full h-auto pt-8"
                  />
                </div>
              </div>

              <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-night/20">
                <span className="bg-night/80 backdrop-blur-md px-5 py-2 rounded-full text-[11px] text-accent uppercase tracking-widest border border-accent/50 shadow-2xl">
                  Наведіть для перегляду
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}