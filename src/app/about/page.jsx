import Image from "next/image";
import styles from "./about.module.css"

const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

export const metadata = {
  title: 'About Us',
  description: 'About Us Page',
}

const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
      <div className={styles.header_content}>
          <h1 className={styles.title}><span className={styles.span}>est.</span> 2024</h1>
          <p>
            At Bright, our journey began with a common frustration: the overwhelming challenge of knowing where to start when it comes to business and IT consulting. We found ourselves constantly searching for the right resources, guidance, and expertise, only to realize that many others shared the same struggle.
            <br /><br />
            Rather than waiting for the perfect solution, we decided to create it ourselves. Our passion for knowledge and our desire to share it with others led us to establish Bright. We believe that by pooling our expertise and experiences, we can provide invaluable insights and practical advice to those navigating the complex world of business and technology.
            <br /><br />
            Our mission is simple: to empower businesses and individuals with the tools and knowledge they need to succeed. Whether you are a startup looking to find your footing or an established company seeking to innovate, we are here to help you every step of the way.
            <br /><br />
            Join us on this journey, and let's build a brighter future together.
          </p>
    
          <div className={styles.header_content_people}>
                {stats.map((stat) => (
                    <div key={stat.name} className={styles.team_information}>
                        <h1>{stat.value}</h1> 
                        <p className={styles.subtitle}>{stat.name}</p>
                    </div>
                ))}
          </div>
      </div>
    </div>
    <div className={styles.myTeam}>
        <h1>Our Team!</h1>
        <ul className={styles.people}>
          <li className={styles.person}>
            <a href="https://www.linkedin.com/in/randy-afif-herlambang" target="_blank">
              {/* <span className="fake arrow"></span> */}
              <h3 className={styles.person_heading} >
                <h5>Randy Afif Herlambang</h5>
              </h3>
              <div className={styles.person_meta}>
                <span className={styles.faded}>@randyafif</span>
                <span className={styles.arrow}></span>
              </div>
              {/* <div className={styles.jabatan}>
                <p>Jabatan</p>
              </div> */}
            </a>
          </li>
          <li className={styles.person}>
            <a href="https://www.linkedin.com/in/alison-rudolph-bb" target="_blank">
              {/* <span className="fake arrow"></span> */}
              <h3 className={styles.person_heading} >
                <h5>M. Farrel Wiryawan</h5>
              </h3>
              <div className={styles.person_meta}>
                <span className={styles.faded}>@farrelwiryawan</span>
                <span className={styles.arrow}></span>
              </div>
            </a>
          </li>
          <li className={styles.person}>
            <a href="https://www.linkedin.com/in/alison-rudolph-bb" target="_blank">
              {/* <span className="fake arrow"></span> */}
              <h3 className={styles.person_heading} >
                <h5>Akhdan Rasendriya N.</h5>
              </h3>
              <div className={styles.person_meta}>
                <span className={styles.faded}>@akhdanrasendriya</span>
                <span className={styles.arrow}></span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>    
  );
};

export default AboutPage