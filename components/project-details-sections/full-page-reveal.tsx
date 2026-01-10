export function ProjectShowcaseSplit({ project }: { project: any }) {
  return (
    <section className="py-24 bg-night relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          <div className="lg:sticky lg:top-32 space-y-16">
            <div className="space-y-6">
              <span className="text-accent font-mono text-[12px] uppercase tracking-[0.4em] font-bold">[ Концепція ]</span>
              <h2 className="text-4xl font-serif italic text-cream leading-tight">Проблема та рішення</h2>
              <div className="space-y-8 text-cream/60 font-light leading-relaxed text-lg">
                <p>{project.challenge}</p>
                <div className="h-px w-full bg-white/5" />
                <p>{project.solution}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
             <span className="text-accent/30 font-mono text-[12px] uppercase tracking-[0.4em] block text-right">
               [ Desktop view ]
             </span>
             <div className="group relative w-full h-[700px] overflow-hidden rounded-[2rem] border border-white/5 bg-surface shadow-2xl">
                <div className="absolute top-0 inset-x-0 h-8 bg-surface/90 backdrop-blur-md border-b border-white/5 z-20 flex items-center px-4 gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-white/10" />
                   <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                
                <div className="w-full transition-transform duration-[10s] ease-in-out group-hover:-translate-y-[calc(100%-700px)] pt-8">
                   <img 
                     src={typeof project.desktopImg === 'string' ? project.desktopImg : project.desktopImg.src} 
                     alt="Full view" 
                     className="w-full h-auto"
                   />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-night/10">
                   <span className="bg-night/80 backdrop-blur-md px-5 py-2 rounded-full text-[12px] text-accent uppercase tracking-widest border border-accent/20">
                     Hover to scroll
                   </span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}