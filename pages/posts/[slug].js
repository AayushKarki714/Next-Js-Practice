import Head from "next/head";
import { getPost, getSlugs } from "../../lib/post";

function PostPage({ post }) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1></h1>
      <article dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
}

export async function getStaticPaths() {
  console.log("[getStaticPaths] render");
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log({ slug });
  console.log("[getStaticProps()] render");
  const { title, body } = await getPost(slug);
  return {
    props: {
      post: {
        title,
        body,
      },
    },
  };
}

export default PostPage;
