import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export async function getProjects() {
    // Check if directory exists
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjectsData = fileNames.map((fileName) => {
        // Remove ".mdx" from file name to get id
        const slug = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { data } = matter(fileContents);

        return {
            slug,
            ...data,
        };
    });

    // Sort projects by date if available, or just keeping them in order
    // For now, let's sort by "status" priority (Completed first? or just alphabetical?)
    // Let's just return them. The user didn't specify sort order, but typically newest/featured first.
    // We'll rely on the order they are read or add a 'order' field if needed.
    return allProjectsData;
}

export async function getProjectBySlug(slug) {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        content,
        ...data,
    };
}

export async function getRelatedProjects(currentSlug) {
    const allProjects = await getProjects();
    return allProjects.filter((project) => project.slug !== currentSlug).slice(0, 2);
}
