import React from "react";
import OwlCarousel from "react-owl-carousel2";
import useMembers from "../../../../hooks/query/movie/useMembers";
import Loading from "../../Loading";

export default function AboutMovie({ id }) {
  const members = useMembers(id);
  const options = {
    items: 2,
    dots: true,
    stagePadding: 15,
    loop: true,
    mergeFit: false,
  };
  if (members.isLoading) {
    return <Loading />;
  }
  return (
    <>
      <OwlCarousel options={options}>
        {members.data.cast?.map((member) => (
          <div key={member.credit_id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${member.profile_path}`}
            />
          </div>
        ))}
      </OwlCarousel>
    </>
  );
}
