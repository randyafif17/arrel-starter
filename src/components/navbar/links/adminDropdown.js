// links/AdminDropdown.js
"use client";

import Link from "next/link";
import styles from "./adminDropdown.module.css";
import { useState } from "react";

const AdminDropdown = () => {
    const [open, setOpen] = useState(false);
    const adminLinks = [
        { title: "Post Form", path: "/blog-post" },
        { title: "User Form", path: "/make-user" },
        { title: "User Management", path: "/user-management" },
        { title: "Post Management", path: "/blog-management" }
    ];

    return (
        <div className={styles.dropdownContainer}>
            <button className={styles.dropdownButton} onClick={() => setOpen(prev => !prev)}>
                <span className={styles.adminbutton}>Admin</span>
                <i class="fa-solid fa-caret-down"></i>
            </button>
            {open && (
                <div className={styles.dropdownContent}>
                    {adminLinks.map((link) => (
                        <Link href={link.path} key={link.title} className={styles.link}>
                            {link.title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AdminDropdown;
