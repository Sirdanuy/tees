import React, { useState } from "react";
import Image from "next/image";
import  { FontAwesomeIcon}  from "@fortawesome/react-fontawesome"
import  { faBars}  from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/Home.module.css";


function Navigation(){
const [showMenu,  setShowMenu] = useState(false)

let menu

if(showMenu){
    menu = <div
    className={styles.nav}>
        <span className={styles.nava}>
        <ul className={styles.nava}>
        <a className={styles.headerbar} href="https://www.freshboyzclub.com/#faq"> FAQ</a>
        <a className={styles.headerbar}  href="https://www.freshboyzclub.com/#roadmap">ROADMAP</a>
        <a className={styles.headerbar} href="https://www.freshboyzclub.com/#story">STORY</a> 
        <a className={styles.headerbar} href="https://www.freshboyzclub.com/#creators">CREATORS</a>
        <div>
         <a href="https://discord.gg/dtyXyZkqVJ">  <Image src="/discord.png" alt="discord" width={39} height={39}></Image></a>
         <a href="https://opensea.io/collection/fresh-boyz-club">  <Image src="/opensea.png" alt="discord" width={39} height={39}></Image></a>
         <a href=" https://twitter.com/freshboyzclub_">  <Image src="/twitter.png" alt="discord" width={39} height={39}></Image></a>

         </div>
</ul>
        </span>
    </div>
}


let menuMask
menuMask =
<div
className="bg-black fixed top-0 left-0 w-full h-full z-50"
onClick={() => setShowMenu(false)}
>

</div>





    return(
        <nav>
            <span className={styles.nav}>

<FontAwesomeIcon 
icon={faBars}
onClick={()  => setShowMenu(!showMenu)}
/>
       </span>
       {menuMask}
      
      
       { menu}
       <span>

       </span>


        </nav>
    )
}

export default Navigation