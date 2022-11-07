import React from "react";

function Card({ article }) {
  return (
    <div className="@container">
      <div className="relative mt-16  gap-8 @3xl:flex">
        <div className="flex-none @3xl:w-2/4">
          <div className="aspect-square rounded-2xl bg-gray-200" />
        </div>
        <div className="mt-2 flex flex-col">
          <div>
            <p className="text-sm font-semibold text-gray-600">
              {article.date}
            </p>
            <p className="mt-2 text-2xl font-semibold leading-8 tracking-tight @md:text-3xl @md:leading-9">
              {article.title}
            </p>
            <p className="mt-3 text-lg leading-7 text-gray-600  @md:text-xl @md:leading-8">
              {article.summary}
            </p>
          </div>
          <div className="mt-6 flex items-center @3xl:mt-12">
            <div className="h-12 w-12 rounded-full bg-gray-200 @md:h-14 @md:w-14" />
            <div className="pl-5">
              <p className="text-sm font-semibold @md:text-base">
                {article.author.name}
              </p>
              <p className="text-sm text-gray-600">{article.author.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
