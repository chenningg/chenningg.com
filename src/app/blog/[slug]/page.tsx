import { allPosts } from "content-collections";
import { notFound } from "next/navigation";

export default async function Post(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = allPosts.find((post) => post.slug === slug);
  if (!post) {
    return notFound();
  }

  const MdxContent = post.mdxContent;

  return (
    <div className="w-full">
      <h2>{post.title}</h2>
      <p>Written by {post.author}</p>
      <div>
        <MdxContent />
      </div>
    </div>
  );
}
