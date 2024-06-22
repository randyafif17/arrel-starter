import styles from './home.module.css';
import Image from "next/image";
import PostCardHighlight from "@/components/postCardHighlight/postCardHighlight";

// Fungsi untuk mengambil data postingan blog
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

const Home = async () => {
  let posts = [];
  
  try {
    posts = await getData();
  } catch (error) {
    console.error("Error fetching posts for home:", error);
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Business Consultant Agency
          </h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque amet, enim sapiente, ab sequi aliquid excepturi unde a non eligendi facere vitae soluta repellendus neque. Obcaecati enim nobis voluptatibus voluptatum!
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>Get Class!</button>
            <button className={styles.button}>Contact Us!</button>
          </div>
          <div className={styles.brands}>
            <Image src="/brands.png" alt="" fill className={styles.brands}/>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/home.png" alt="" fill className={styles.heroImg} />
        </div>
      </div>
      <div>
        <h3>Our Post</h3>
        <section className={styles.postsSection}>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div className={styles.post} key={post._id}>
                <PostCardHighlight post={post} />
              </div>
            ))
          ) : (
            <div className={styles.error}>No blog posts found.</div>
          )}
        </section>
      </div>
    </div>
  )
};

export default Home; 