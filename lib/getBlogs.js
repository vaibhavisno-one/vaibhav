import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export async function getBlogs() {
    // Check if directory exists
    if (!fs.existsSync(blogsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(blogsDirectory);
    const allBlogsData = fileNames.map((fileName) => {
        // Remove ".mdx" from file name to get slug
        const slug = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(blogsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { data } = matter(fileContents);

        return {
            slug,
            ...data,
        };
    });

    // Sort blogs by date
    return allBlogsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getBlogBySlug(slug) {
    const fullPath = path.join(blogsDirectory, `${slug}.mdx`);

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

export async function getRelatedBlogs(currentSlug, tags = []) {
    const allBlogs = await getBlogs();

    // Filter out current blog
    const otherBlogs = allBlogs.filter(blog => blog.slug !== currentSlug);

    // If no tags provided, just return most recent
    if (!tags || tags.length === 0) {
        return otherBlogs.slice(0, 2);
    }

    // Simple relevance score based on matching tags
    const scoredBlogs = otherBlogs.map(blog => {
        let score = 0;
        if (blog.tags) {
            blog.tags.forEach(tag => {
                if (tags.includes(tag)) score++;
            });
        }
        return { ...blog, score };
    });

    // Sort by score (descending) then date
    scoredBlogs.sort((a, b) => b.score - a.score || (a.date < b.date ? 1 : -1));

    return scoredBlogs.slice(0, 2);
}

export async function getAllTags() {
    const blogs = await getBlogs();
    const tags = {};

    blogs.forEach(blog => {
        if (blog.tags) {
            blog.tags.forEach(tag => {
                tags[tag] = (tags[tag] || 0) + 1;
            });
        }
    });

    // Convert to array and sort by count
    return Object.entries(tags)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);
}
