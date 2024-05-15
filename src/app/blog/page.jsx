import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
// import connectToDb from "@/lib/utils";
// import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch(`http://localhost:3000/api/blog`);
//   console.log(res)
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   } 

//   return res.json();
// };

async function getData() {
  try {
    const res = await fetch("http://localhost:3000/blog");
    console.log(res)
    if (!res.ok) {
      throw new Error(`Server responded with status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    // Display a user-friendly message based on the error type, e.g.,
    // "Failed to load blog posts. Please try again later."
    return null; // Or handle error differently
  }
}

const BlogPage = async () => {

  // FETCH DATA WITH AN API
  const posts = await getData();

  if (!posts) {
    // Display a message indicating the error, e.g., "Failed to load blog posts."
    return <div>Error fetching data. Please try again later.</div>;
  }
  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;