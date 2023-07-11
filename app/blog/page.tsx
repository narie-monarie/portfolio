"use client";
import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

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

export default function() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await graphcms
          .request(GET_QUERY)
          .then((response) => setBlogs(response as any));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-2xl">Loading Content...</div>;
  }

  if (blogs.length === 0) {
    return <div>No data available</div>;
  }
  const post_items = Object.values(blogs);
  const posts = post_items[0];
  return (
    <div data-theme="dark" className="container mx-auto w-10/12">
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        {posts.map((post: any) => {
          return (
            <div key={post.id}>
              <div className="container px-5 py-4 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-800">
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-white">
                        CATEGORY
                      </span>
                      <span className="mt-1 text-gray-700 text-sm cursor-pointer hover:backdrop-blur">
                        #Programming
                      </span>
                      <span className="mt-1 text-gray-500 text-sm">
                        {post.datePublished}
                      </span>
                    </div>
                    <div className="md:flex-grow">
                      <Link
                        href={"/blog/" + post.slug}
                        className="text-2xl font-medium cursor-pointer text-white title-font mb-2 hover:underline underline-offset-2"
                      >
                        {post.title || <Skeleton />}
                      </Link>
                      <p
                        className="leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: post.content.html.slice(0, 200).concat("..."),
                        }}
                      ></p>
                      <a
                        href={"/blog/" + post.slug}
                        className="text-indigo-400 cursor-pointer inline-flex items-center"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
