import React from "react";
import Image from "next/image";

export default function Home() {
  const loading = true;

  // const {data, loading} = useQuery(XXX);

  // const movies = ???
  // const tvShows = ???

  return (
    <div className="max-w-4xl mx-auto pt-12">
      <h1 className="font-bold text-3xl mb-4">Trending movies</h1>
      <div className="h-96">
        {loading ? (
          <div className="animate-pulse">Loading...</div>
        ) : (
          <div className="flex justify-between">
            {/* DISPLAY 5 TRENDING MOVIES */}
            {/* ex: movies.map(tvShow => <MediaComponent media={tvShow} />) */}
          </div>
        )}
      </div>

      <h1 className="font-bold text-3xl mb-4">Trending TVShows</h1>
      <div className="h-96">
        {loading ? (
          <div className="animate-pulse">Loading...</div>
        ) : (
          <div className="flex justify-between">
            {/* DISPLAY 5 TRENDING TVSHOWS */}
            {/* ex: tvhShows.map(tvShow => <MediaComponent media={tvShow} />) */}
          </div>
        )}
      </div>
    </div>
  );
}

function MediaComponent({ media }: { media: any }) {
  const klass = media.rating > 5 ? "text-green-500" : "text-red-500";

  return (
    <div className="w-1/5 text-center">
      <Image
        className="rounded-md"
        src={media.poster}
        alt={media.title}
        height={231}
        width={154}
      />
      <div className="font-bold text-sm w-100 truncate px-2">{media.title}</div>
      <div className={klass}>{media.rating}/10</div>
    </div>
  );
}
