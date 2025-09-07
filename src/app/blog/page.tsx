import { allPosts } from "content-collections";
import Link from "next/link";

export default function Posts() {
  return (
    <div className="w-full p-5">
      <h1 className="text-3xl mb-4 font-bold">Blog</h1>
      <ul className="flex flex-col gap-3">
        {allPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
              <div className="bg-zinc-100 hover:bg-zinc-200 p-3">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p>{post.summary}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
