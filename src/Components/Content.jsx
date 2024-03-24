import { useLoaderData } from "react-router-dom";
import placeHolderImg from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
const Content = () => {
  const blog = useLoaderData();
  const { cover_image, title, body_html, tags } = blog;
  return (
    <div>
      <div
        rel="noopener noreferrer"
        href="#"
        className="mx-auto max-w-full overflow-hidden transition border-2  border-gray-400  border-opacity-30 group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || placeHolderImg}
        />
        <div className="p-2">
          {tags.map((tag) => (
            <a
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
            >
              #{tag}
            </a>
          ))}
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
        
      </div>
      
    </div>
  );
};

export default Content;
