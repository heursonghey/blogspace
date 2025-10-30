import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function CardDetail({thumbnail, content,bio,profileUrl,username,categories,title}) {




  
  return (
    <div className="grid place-items-center mt-30  ml-5  md:ml-50  lg:ml-40 gap-4  sm:ml-120 ">
      <Card className="lg:w-200 md:w-200 sm:w-150 w-90">
        <div className=" flex items-center space-x-4 rtl:space-x-reverse mt-4">
          <img
            className="mb-3 rounded-full h-10 w-10 object-cover shadow-lg"
            src={profileUrl}
            alt="profile"
          />
          <div>
            <div className="flex items-center space-x-1 rtl:space-x-reverse ">
              <p className="font-bold text-gray-900 dark:text-white ">{username}</p>
              <p className="text-sm text-gray-500"> Post an Artice</p>
            </div>
            {/* category */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {bio}
            {categories}
            </p>
          </div>
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <img
          src={thumbnail}
        />
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {content}
        </p>
      </Card>
    </div>
  );
}
