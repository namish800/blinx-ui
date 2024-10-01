/***
 *
 * @file components/MenuBar
 * @description Menu Bar Component
 * @author Satyam Mahajan
 * @organization KreativX
 * @since 21 Sep 2024
 *
 */

import Image from "next/image"
import Link from "next/link"
import Logo from "../../app/assets/images/blinx_logo.png"
import "./style.scss"


const MenuBar = () => {
    return(
        <div className="desktop-menu-wrapper">
            <Image 
                src={Logo}
                alt="logo"
                width={150}
            />
            <Link href={"/"} className="desktop-menu-link">Home</Link>
            <Link href={"/persona"} className="desktop-menu-link">Brand Persona</Link>
            <Link href={"/blog-generator"} className="desktop-menu-link">Blog Generator</Link>
            <Link href={"/ad-generator"} className="desktop-menu-link">FB Ad Generator</Link>
            <Link href={"/post-generator"} className="desktop-menu-link">Post Generator</Link>
        </div>
    )
}



export default MenuBar