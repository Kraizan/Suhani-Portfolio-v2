/* eslint-disable @next/next/no-html-link-for-pages */
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <div className="header-bg p-16 border-r-[3px] border-black min-h-screen">
      <div className="flex flex-col justify-between h-full">
        <div className="flex-flex-col">
          <div className="flex flex-col items-center">
            <motion.div
              whileTap={{
                scale: 0.9,
                cursor: "grabbing",
                transition: {
                  duration: 0.1,
                },
              }}
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.1,
                },
                cursor: "grab",
              }}
            >
              <Image
                className="rounded-full border-[3px] border-black p-1"
                src="/images/profile.jpeg"
                alt="profile"
                width={200}
                height={200}
              ></Image>
            </motion.div>
            <div className="text-[6rem] brand -translate-x-6 effect-shine px-4 scale-x-125 hover:cursor-pointer">
              Suhani
            </div>
          </div>
          <a href="/">
            <div className="text-lg title font-bold link-underline w-fit">
              Digital Artist
            </div>
          </a>
          <div className="mt-4 font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
            illo ipsum. Laudantium libero maxime quod numquam, sapiente sint id
            dolorem tenetur ex fugiat esse iure dignissimos est nihil qui
            pariatur?
          </div>
        </div>
        <div className="flex items-center">
          <a className="mr-4 text-lg link-underline" href="/">
            Connect with me ➡
          </a>
          <a href="/" className="mr-4 hover:scale-110 hover:transition-all">
            <Image
              src="/images/instagram.svg"
              alt="instagram"
              width={30}
              height={30}
            ></Image>
          </a>
          <a href="/" className="hover:scale-110 hover:transition-all">
            <Image
              src="/images/mail.svg"
              alt="gmail"
              width={30}
              height={30}
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
}
