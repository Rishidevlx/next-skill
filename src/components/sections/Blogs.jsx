import React from 'react';
import './Blogs.css';
import blogImg from '../../assets/Blog.png';

const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      badge: "UI UX Tools",
      title: "But also the leap into ui ux tools",
      meta: "Admin - August 25, 2024",
      desc: "Let's dive into each UX/UI tool and discover how you craft beautiful projects."
    },
    {
      id: 2,
      badge: "UI UX Tools",
      title: "But also the leap into ui ux tools",
      meta: "Admin - August 25, 2024",
      desc: "Let's dive into each UX/UI tool and discover how you craft beautiful projects."
    },
    {
      id: 3,
      badge: "UI UX Tools",
      title: "But also the leap into ui ux tools",
      meta: "Admin - August 25, 2024",
      desc: "Let's dive into each UX/UI tool and discover how you craft beautiful projects."
    }
  ];

  return (
    <section className="blogsSection">
      <div className="blogsContainer">
        
        <div className="blogsHeader">
          <span className="blogsBadge">Blogs</span>
          <h2 className="blogsTitle">Our recent news & insights</h2>
        </div>

        <div className="blogsCards">
          {blogsData.map((blog) => (
            <div key={blog.id} className="blogCard">
              <div className="blogImgWrapper">
                <img src={blogImg} alt="Blog Cover" className="blogImg" />
              </div>
              <div className="blogContent">
                <span className="blogTag">{blog.badge}</span>
                <h3 className="blogCardTitle">{blog.title}</h3>
                <p className="blogMeta">{blog.meta}</p>
                <p className="blogDesc">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;
