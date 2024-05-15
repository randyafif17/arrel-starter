import Image from "next/image";
import styles from "./about.module.css"

const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
      <div className={styles.header_content}>
          <h1 className={styles.title}><span className={styles.span}>est.</span> 2024</h1>
          <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Praesentium harum quaerat, doloribus tempora obcaecati debitis cupiditate, 
                itaque quibusdam facilis inventore nihil corrupti dignissimos
                ab a perspiciatis? Nesciunt maiores blanditiis temporibus.
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
            <a href="https://www.linkedin.com/in/alison-rudolph-bb" target="_blank">
              {/* <span className="fake arrow"></span> */}
              <h3 className={styles.person_heading} >
                <h5>Alison Rudolph</h5>
              </h3>
              <div className={styles.person_meta}>
                <span className={styles.faded}>@alisonrudolph</span>
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
                <h5>Alison Rudolph</h5>
              </h3>
              <div className={styles.person_meta}>
                <span className={styles.faded}>@alisonrudolph</span>
                <span className={styles.arrow}></span>
              </div>
            </a>
          </li>
          <li className={styles.person}>
            <a href="https://www.linkedin.com/in/alison-rudolph-bb" target="_blank">
              {/* <span className="fake arrow"></span> */}
              <h3 className={styles.person_heading} >
                <h5>Alison Rudolph</h5>
              </h3>
              <div className={styles.person_meta}>
                <span className={styles.faded}>@alisonrudolph</span>
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