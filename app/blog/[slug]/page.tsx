"use client";
import { GraphQLClient, gql } from "graphql-request";
import { useEffect, useState } from "react";

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_SERVER_API_KEY!);

const GET_QUERY = gql`
  query {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;
export async function generateStaticParams() {
  const posts: any = await graphcms.request(SLUGLIST);
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await graphcms
          .request(GET_QUERY, { slug })
          .then((response) => setBlogs(response));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (blogs.length === 0) {
    return <div>No data available</div>;
  }
  const post_items = Object.values(blogs);
  const posts = post_items[0];
  const post = posts.find((post: any) => post.slug === slug);
  if (!post) {
    return <div className="text-center">Post not found</div>;
  }

  return (
    <div data-theme="dark">
      <div
        className="container w-10/12 flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 "
        data-theme="dark"
      >
        <section>
          <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
              <div className="w-full mx-auto">
                <div>
                  <h1 className="font-bold text-4xl mb-7">{post.title}</h1>
                  <h2 className="mb-3 text-gray-500 underline underline-offset-4">
                    Published on {post.datePublished}
                  </h2>
                  <p
                    className="mb-2 text-justify"
                    dangerouslySetInnerHTML={{ __html: post.content.html }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
        <h2 className="text-whitefont-medium title-font tracking-wider text-sm">
          JOB MONARI
        </h2>
        <p className="text-gray-500">Junior Software Engineer</p>
      </div>
    </div>
  );
}
