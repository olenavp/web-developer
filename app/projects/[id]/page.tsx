import { notFound } from 'next/navigation';
import { projects } from '../../../assets/data/projects';
import { ArrowBigLeft, Link2 } from 'lucide-react';
import { ProjectHero } from '@/components/project-details-sections/project-hero';
import { AdaptiveShowcase } from '@/components/project-details-sections/adaptive-showcase';
import { ProjectShowcaseSplit } from '@/components/project-details-sections/full-page-reveal';
import { ProjectResults } from '@/components/project-details-sections/project-results';
import { ExtraPagesGrid } from '@/components/project-details-sections/extra-pages-grid';

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

      <ProjectShowcaseSplit project={project} />
      {project.extraImages && <ExtraPagesGrid images={project.extraImages} />}
      <AdaptiveShowcase
        desktopImg={project.desktopImg}
        tabletImg={project.tabletImg}
        mobileImg={project.mobileImg}
      />

      <ProjectResults project={project} nextProject={nextProject} />
    </main>
  );
}