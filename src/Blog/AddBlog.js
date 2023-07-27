import React, { useContext, useState } from "react";
import { MyContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

function AddBlog() {
  const { title, setTitle } = useContext(MyContext);
  const navigate = useNavigate();
  const [blog, setBlog] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    const title1 = event.target.title.value;

    const blog1 = event.target.blog.value;
    setTitle(
      (s) => (s = [...title, { id: Date.now(), title: title1, blog: blog1 }])
    );
    console.log(title);
    console.log(blog);
    navigate("/");
  };
  return (
    <div className="main">
      <form onSubmit={handleInputChange}>
        <input
          className="inp1"
          type="text"
          id="title"
          placeholder="Enter Title"
        />
        <br />
        <br />

        <textarea
          className="inp2"
          id="blog"
          placeholder="Add your blog"
        ></textarea>
        <br />
        <br />
        <button className="but1" type="submit">
          ADD
        </button>
        <button className="but2" onClick={() => navigate("/")} type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddBlog;
