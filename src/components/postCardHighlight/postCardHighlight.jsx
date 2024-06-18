import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";
import { getUser } from "@/lib/data";



const PostCard = ({ post, userId }) => {
  const date = new Date(post.createdAt || post.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const user = getUser(userId);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt={post.title} layout="fill" objectFit="cover" />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.authorContainer}>
          <div className={styles.authorImg}>
            <Image
              className={styles.avatar}
              src={user.img ? user.img : "/noavatar.png"}
              alt=""
              width={50}
              height={50}
            />          
          </div>
          <div className={styles.authorDetails}>
            <span className={styles.username}>{user.username}</span>
            <span className={styles.date}>{formattedDate}</span>
          </div>
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <div className={styles.linkContainer}>
          <Link href={`/blog/${post.slug}`}>
            <div className={styles.link}>
              READ MORE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default PostCard;
