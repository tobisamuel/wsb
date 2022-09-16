import Image from "next/image";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import BlogLayout from "../components/BlogLayout";

const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Blog = () => {
  return (
    <BlogLayout>
      <div className="px-[125px]">
        <div className="mt-24 flex">
          <div className="w-1/2 relative">
            <Image
              src="/179.png"
              alt="burnout"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="w-1/2 pl-8 pt-10 pr-44 bg-cyan-blue font-inter">
            <h2 className="text-4xl font-bold">
              Burnout - is it going to happen to you too?
            </h2>
            <span className="text-xs">August 2, 2022</span>
            <div className="mt-6 flex items-center gap-3">
              <Image
                src="/profile.png"
                alt="profile picture"
                width={42}
                height={42}
                className="rounded-full"
              />
              <span className="text-xs">Aleksandra Romel-Domarecka</span>
            </div>
            <p className="mt-14 mb-44 text-sm text-tabac">
              There has been a lot of talk lately about burnout. Currently, more
              and more people of all ages struggle with this condition, while a
              significant part of the society is afraid that burnout will also
              affect them. In relation with...
            </p>
          </div>
        </div>

        <div className="mt-9 mx-16 bg-greyblue flex justify-between py-4 px-7">
          <div>
            <label
              htmlFor="categories"
              className="text-xs text-tabac font-bold font-inter"
            >
              Category
            </label>
            <select
              id="categories"
              className="ml-7 w-72 py-3 px-1 text-tabac text-xs font-bold font-inter border rounded-[3px] border-border"
            >
              <option>All</option>
            </select>
          </div>
          <div className="flex items-center">
            <span className="text-xs font-inter">we are here:</span>
            <div className="flex items-center text-2xl space-x-8 ml-2">
              <span>
                <FiFacebook />
              </span>
              <span>
                <FiLinkedin />
              </span>
              <span>
                <FiTwitter />
              </span>
              <span>
                <FiInstagram />
              </span>
              <span>
                <FiYoutube />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 mx-16 grid grid-cols-3 gap-x-7 gap-y-12">
          {posts.map((post) => (
            <div key={post}>
              <div className="relative w-full h-60">
                <Image
                  src="/36.png"
                  alt="post"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="w-full font-inter">
                <div className="w-1/2 mt-5 h-full border-t-2 border-black"></div>
                <p className="block mt-3 text-sm font-bold">
                  Burnout - is it going to happen to you too?
                </p>
                <span className="text-xs">August 2, 2022</span>
                <div className="mt-2 flex items-center gap-3">
                  <Image
                    src="/profile.png"
                    alt="profile picture"
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                  <span className="text-xs">Aleksandra Romel-Domarecka</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 mb-6 flex justify-center">
          <div className="flex items-center gap-5 text-darkgray text-sm font-bold font-inter">
            <MdArrowBackIos />
            <span className="p-1 border-b-2 border-darkgray">1</span>
            <span className="p-1 text-midgray">2</span>
            <span className="p-1 text-midgray">3</span>
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default Blog;
