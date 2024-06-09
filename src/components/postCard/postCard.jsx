import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"



const PostCard = ({post}) => {
  
  const date = new Date(post.createdAt);
  // Format the date to "MMM DD YYYY"
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img}/>
        </div>}
        <span className={styles.date}>{formattedDate}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard