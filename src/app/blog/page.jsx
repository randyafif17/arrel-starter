import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blog", {
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      let errorMessage = `Error: ${res.status} ${res.statusText}`;
      try {
        const errorBody = await res.json();
        errorMessage += ` - ${errorBody.message || 'No additional error message provided'}`;
      } catch (e) {
        errorMessage += ' - Failed to parse error body as JSON';
      }
      throw new Error(errorMessage);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const BlogPage = async () => {
  try {
    const posts = await getData();

    if (!posts || posts.length === 0) {
      return <div className={styles.error}>No blog posts found.</div>;
    }

    return (
      <div className={styles.container}>
        {posts.map((post) => (
          <div className={styles.post} key={post._id}> {/* Use post._id as the key */}
            <PostCard post={post} />
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }
};

export default BlogPage;
