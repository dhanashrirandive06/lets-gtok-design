import react, { Fragment } from "react";
import BlogCard from "./BlogCard";
function Blog() {
  return (
      <div id="blogs">

      <div className="d-flex my-4" >
        <h2 className=" d-inline mx-auto mx-2 text-center ">
          A community to spread positivity
        </h2>
      </div>

      <div className="d-flex blog mt-5 justify-content-between">
        <div className="blogCol mr-lg-1">
          <BlogCard
            title="Current feeling"
            description="So excited to finally get my hands on the latest PS5."
            name="@josh"
          ></BlogCard>
          <BlogCard
            title="Current feeling"
            description="So excited to finally get my hands on the latest PS5."
            name="@josh"
          ></BlogCard>

          <div className="d-flex flex-column px-lg-5 mx-auto my-5">
            <div className="mx-auto  px-md-5 text-center">
              Share what's on your mind with the community
            </div>
            <div className="mx-auto">
              <button className="btn btnShare my-3">Share feelings</button>
            </div>
          </div>
        </div>
        <div className="blogCol mt-3 mt-md-0 ml-lg-1 ">
          <BlogCard
            title="Watching"
            description="The wolf of Wall Street. A must watch."
            name="@lily"
          ></BlogCard>
          <BlogCard
            title="Watching"
            description="The wolf of Wall Street. A must watch."
            name="@lily"
          ></BlogCard>

          <div className="d-flex flex-column px-lg-5 mx-auto my-5">
            <div className="mx-auto px-lg-5 text-center">
              Share what's on your mind with the community
            </div>
            <div className="mx-auto">
              <button className="btn btnShare my-3">Share activity</button>
            </div>
          </div>
        </div>
      </div>
   
      </div> 
  );
}

export default Blog;
