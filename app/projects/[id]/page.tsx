import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '../../../assets/data/projects';
import Link from 'next/link';
import { ArrowBigLeft, Link2 } from 'lucide-react';
import { ProjectHero } from '@/components/project-details-sections/project-hero';
import { AdaptiveShowcase } from '@/components/project-details-sections/adaptive-showcase';
import { DesktopScrollReveal } from '@/components/project-details-sections/full-page-reveal';
import { ProjectResults } from '@/components/project-details-sections/project-results';

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const resolvedParams = await params;
  const projectId = Number(resolvedParams.id);

  const currentIndex = projects.findIndex((p) => p.id === projectId);

  if (currentIndex === -1) notFound();

  const project = projects[currentIndex];

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="bg-night">
      <ProjectHero project={project} />

      <AdaptiveShowcase
        tabletImg={project.tabletImg}
        mobileImg={project.mobileImg}
      />

      <DesktopScrollReveal src={project.desktopImg} />

      {/* Передаємо об'єкт наступного проекту */}
      <ProjectResults project={project} nextProject={nextProject} />
    </main>
  );
}

{
  /* <div className="max-w-4xl mx-auto space-y-10">
          <div>
              <h2 className="text-3xl md:text-4xl font-semibold">
                  {project.projectName}
              </h2>
              <p className="text-lg text-muted-foreground">
                  {project.about}
              </p>
          </div>

          <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                  src={project.image}
                  alt={project.projectName}
                  fill
                  className="object-cover"
              />
          </div>

          <div className="space-y-6">
              <div>
                  <h2 className="text-xl font-semibold mb-3">
                      Що реалізовано
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {project.description.map(item => (
                          <li key={item}>{item}</li>
                      ))}
                  </ul>
              </div>

              <a
                  href={project.livePage}
                  target="_blank"
                  className="inline-block font-medium underline underline-offset-4"
              >
                  Переглянути живу версію
              </a>
          </div>
      </div> */
}
