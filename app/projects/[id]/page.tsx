import { notFound } from 'next/navigation';
import { projects } from '../../../assets/data/projects';
import { ProjectHero } from '@/components/project-details-sections/project-hero';
import { AdaptiveShowcase } from '@/components/project-details-sections/adaptive-showcase';
import { ProjectShowcaseSplit } from '@/components/project-details-sections/full-page-reveal';
import { ProjectResults } from '@/components/project-details-sections/project-results';
import { ProjectDetails } from '@/components/project-details-sections/project-details';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const projectId = Number(id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return {
      title: 'Проєкт не знайдено | Професійна веб-розробка',
      description: 'Деталі проєкту відсутні.',
    };
  }

  const imageUrl =
    typeof project.image === 'string'
      ? project.image
      : (project.image as any).src;

  const seoDescription = `Кейс ${project.projectName}: ${project.about}. Професійна розробка високоефективних сайтів на чистому коді.`;

  return {
    title: `Професійна веб-розробка | Кейс ${project.projectName}`,
    description: seoDescription,
    openGraph: {
      title: project.projectName,
      description: seoDescription,
      images: [imageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      description: seoDescription,
      images: [imageUrl],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const projectId = Number(id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="bg-night">
      <ProjectHero project={project} />
      <ProjectShowcaseSplit project={project} />
      <ProjectDetails details={project.details} />
      <AdaptiveShowcase
        desktopImg={project.desktopImg}
        tabletImg={project.tabletImg}
        mobileImg={project.mobileImg}
      />
      <ProjectResults project={project} nextProject={nextProject} />
    </main>
  );
}
