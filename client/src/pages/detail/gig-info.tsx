import React, { type FC } from "react";
import type { Gig } from "../../types";
import { getProfilePic } from "../../utils/helpers";
import Rating from "../../components/card/rating";
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
//@ts-ignore
import "@splidejs/splide/css";

interface Props {
  gig: Gig;
}

const GigInfo: FC<Props> = ({ gig }) => {
  const images = [gig.coverImage, ...(gig.images || [])];

  return (
    <div className="flex-1 flex flex-col gap-5">
      <h1 className="font-bold text-xl md:text-2xl">{gig.title}</h1>

      <div className="flex gap-3 items-center">
        <img
          src={getProfilePic(gig.user?.profilePicture)}
          alt={gig.user?.username || "User"}
          className="size-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold">{gig.user?.username}</h4>
          <Rating rating={gig.starCount} reviews={gig.reviewCount} />
        </div>
      </div>

      {/* Splide Slider Entegrasyonu */}
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
          perPage: 1,
          pagination: true,
          arrows: true,
        }}
        aria-label="Gig Images"
      >
        {images.map((imgUrl, index) => (
          <SplideSlide key={index}>
            <img
              src={imgUrl}
              alt={`${gig.title} - ${index + 1}`}
              className="w-full h-[350px] md:h-[400px] object-cover rounded-xl"
            />
          </SplideSlide>
        ))}
      </Splide>
      <div>
        <h1 className="font-bold text-xl mt-5 mb-2">Bu Hizmet Hakkında</h1>
        <p className="text-gray-500"> {gig.description}</p>
      </div>
    </div>
  );
};

export default GigInfo;
