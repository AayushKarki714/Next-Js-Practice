import matter from "gray-matter";
import { marked } from "marked";
import { readFile, readdir } from "fs/promises";

export async function getPost(slug) {
  const data = await readFile(`content/posts/${slug}.md`, "utf-8");
  const {
    data: { title },
    content,
  } = matter(data);
  const body = marked.parse(content);
  return { body, title };
}

export async function getSlugs() {
  const suffix = ".md";
  const files = await readdir("content/posts");
  return files
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
}

export async function getPosts() {
  const res = [];
  const slugs = await getSlugs();
  for (let slug of slugs) {
    const post = await getPost(slug);
    res.push({ ...post, slug });
  }
  return res;
}
