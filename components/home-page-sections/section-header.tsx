'use client';
import FadeIn from '../FadeIn';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <FadeIn delay={0.1}>
      <div
        className={`mb-20 space-y-6 ${
          isCenter ? 'text-center flex flex-col items-center' : 'text-left'
        }`}
      >
        <div
          className={`flex items-center gap-3 ${
            isCenter ? 'justify-center' : 'justify-start'
          }`}
        >
          {!isCenter && <div className="w-12 h-[1px] bg-accent" />}
          <span className="text-[16px] font-mono text-accent uppercase tracking-[0.3em] font-bold">
            [ {label} ]
          </span>
          {isCenter && <div className="w-12 h-[1px] bg-accent" />}
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-cream leading-[1.1] tracking-tight font-serif italic">
          {title}
          {subtitle && (
            <>
              <br />
              <span className="font-sans not-italic text-cream/20 block mt-2">
                {subtitle}
              </span>
            </>
          )}
        </h2>
      </div>
    </FadeIn>
  );
}
