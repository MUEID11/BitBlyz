import { Link } from "react-router-dom";
import placeHolderImg from "../assets/404.jpg";
import { GoBookmarkSlashFill } from "react-icons/go";

const BlogCard = ({ blog, deleteable, handleDelete }) => {
  const { cover_image, title, description, published_at, id } = blog;

  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
        rel="noopener noreferrer"
        href="#"
        className="mx-auto max-w-sm max-h-96 overflow-hidden transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 group hover:no-underline focus:no-underline dark:bg-gray-50 sm:block"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || placeHolderImg}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deleteable && (
        <div className="absolute bg-primary rounded-full p-3 bg-opacity-80 hover:bg-opacity-90 hover:scale-105 lg:left-1 lg:-top-5">
          <GoBookmarkSlashFill
            onClick={() => handleDelete(id)}
            className=" text-secondary hover:text-red-500 cursor-pointer"
            size={20}
          />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
