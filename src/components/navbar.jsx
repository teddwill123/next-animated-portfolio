"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image';
import NavLink from './navLink';
import { motion, stagger } from 'framer-motion';



const links = [
    {url: "/", title: "Home" },
    {url: "/about", title: "About" },
    {url: "/portfolio", title: "Portfolio" },
    {url: "/contact", title: "Contact" },
];

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const topVariants ={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor:"rgb(255,255,255)"
        }
    }
    const centerVariants ={
        closed:{
            opasity:0,
        },
        opened:{
            opasity:1,
        }
    }
    const buttonVariants ={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:-45,
            backgroundColor:"rgb(255,255,255)"
        }
    }
    const listVarients = {
        closed:{
            x:"100vw",
        },
        opened:{
            x:0,
            transition:{
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        }
    }
const listItemVariants = {
    closed:{
        x:-10,
        opasity:0
    },
    opened:{
        x:0,
        opasity:1,
    }
}
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:48 text-xl'>
        <div className='hidden md:flex gap-4 w-1/3'>
            {links.map(link=> (
                <NavLink link={link} key={link.title}></NavLink>
            ))}
        </div>
        {/* Logo */}
        <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
            <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
            <span className='text-white mr-1'>TED</span>
            <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>DY</span>
            </Link>
        </div>
        <div className='hidden md:flex gap-4 w-1/3'>
            <Link href="/">
            <Image src="/github.png" alt="" width={24} height={24} />
            </Link>
            <Link href="/">
            <Image src="/dribbble.png" alt="" width={24} height={24} />
            </Link>
            <Link href="/">
            <Image src="/instagram.png" alt="" width={24} height={24} />
            </Link>
            <Link href="/">
            <Image src="/facebook.png" alt="" width={24} height={24} />
            </Link>
            <Link href="/">
            <Image src="/pinterest.png" alt="" width={24} height={24} />
            </Link>
            <Link href="/">
            <Image src="/linkedin.png" alt="" width={24} height={24} />
            </Link>
        </div>
        {/* Responsive Menu */}
        <div className='md:hidden'>
            {/* Menu Buttons */}
            <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setOpen(!open)}>
                <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-black rounded'></motion.div>
                <motion.div variants={buttonVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
            </button>
            {/* Menu List */}
            {open && (

                
                <motion.div variants={listVarients} initial="closed" animate="opened" className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'>

                {links.map(link=> (
                <motion.div variants={listItemVariants} className='' key={link.title}>
                    <Link href={link.url} >{link.title}</Link>
                    </motion.div>
                ))}
            </motion.div>
        )
            }
        </div>
    </div>
  )
}

export default Navbar