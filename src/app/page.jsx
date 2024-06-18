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
        {/* <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="max-w-lg">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Blog
                </h1>
                <p className="mt-3 text-gray-500">
                    Blogs that are loved by the community. Updated every hour.
                    The powerful gravity waves resulting from the impact of the planets, were finally resolved in 2015
                </p>
            </div>
            <div className="mt-12 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3">
                {
                    posts.map((item, idx) => (
                        <article className="mt-5 pt-8 md:pt-0" key={idx}>
                            <a href={item.href}>
                                <span className="block text-gray-400 text-sm">
                                    {item.date}
                                </span>
                                <div className="mt-2">
                                    <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 mt-1 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                                <button className="mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline">
                                    READ MORE
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section> */}
      </div>
    </div>
  )
};

export default Home; 