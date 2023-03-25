import React from "react";
import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/post";

function HomePage({ posts }) {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/usersearched.png" />
      </Head>
      <h1>Hello World is the New Norm</h1>
      <ul style={{ display: "flex", flexDirection: "column" }}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`}>
            {post.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

export default HomePage;
