// src/pages/Blog.js
import { Link } from "react-router-dom";
import "./Blog.css";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Building My First Major Web App: The Product Website",
      summary: "A project to test my front-end skills by creating a complete product website.",
      content: `
As a web development student, I wanted to challenge myself with a project that would simulate a real-world e-commerce application. I decided to build a mock product website for learning purposes.

While this project is front-end-only, it gave me valuable experience in building a polished user interface without relying on a back-end server to manage databases or payments. This taught me how much complexity exists on the client side.

**The Challenge**  
My goal was to create a clean, fully responsive website that included:
- A home page
- Product gallery with multiple items
- Dedicated page for each product
- Functioning shopping cart simulation
- Smooth, intuitive user experience

**My Technology Stack**  
- **React**: Component-based architecture to break down complex UI into reusable pieces  
- **React Router**: Navigation between pages and dynamic routes for each product  
- **React Hooks (useState, useEffect)**: To manage cart state and product data  
- **CSS**: Clean layout using Flexbox and CSS Grid for responsiveness  

**The Biggest Challenges**  
- **Managing the Shopping Cart**: Handling state across multiple components without a back-end  
- **Dynamic Routing**: Creating unique pages for each product using route parameters  

**What I Learned**  
- Front-end development alone can feel like full-stack due to data flow and state management  
- Components make large projects manageable and reusable  
- User experience and responsive design are crucial for creating an intuitive interface
      `
    }
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-card">
          <h2>{post.title}</h2>
          <p className="summary">{post.summary}</p>
          <div className="content">{post.content.split("\n").map((line, index) => <p key={index}>{line}</p>)}</div>
        </div>
      ))}
      <Link to="/" className="back-btn">⬅ Back to Home</Link>
    </div>
  );
}

export default Blog;
