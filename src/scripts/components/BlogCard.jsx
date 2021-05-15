import react from "react";
function BlogCard({title,description, name}) {
  return (

          <div className="card blogCard my-3 mx-auto">
            <div className="card-body">
              <h6 className="blogCardTitle px-3 py-1">{title}</h6>
              <div className="card-text px-2 my-3 cardText">
              {description}
              </div>
                <div className="font-weight-bold px-2">{name}</div>
              <div className="cardText px-2">a few second ago</div>
            </div>
          </div>
       
  );
}

export default BlogCard;
