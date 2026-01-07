import { notFound } from "next/navigation"
import Image from "next/image"
import { projects } from "../../../assets/project-data"
import Link from "next/link"
import { ArrowBigLeft, Link2 } from "lucide-react"

export default async function ProjectPage({ params }: { params: { id: string } }) {
    const resolvedParams = await params
    const projectId = Number(resolvedParams.id)

    const project = projects.find(p => p.id === projectId)

    if (!project) notFound()

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
            <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
                <ArrowBigLeft className="w-4 h-4" />
                Назад
            </Link>
            <div className="max-w-4xl mx-auto space-y-10">
                <div>
                    <h1 className="text-3xl md:text-4xl font-semibold">
                        {project.projectName}
                    </h1>
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
            </div>
        </section>
    )
}
