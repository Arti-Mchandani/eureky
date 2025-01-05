import React from 'react'
import Hero from '../../Components/HomeComponet/Hero';
import RichText from '../../Components/HomeComponet/RichText';
import PortalAdv from '../../Components/HomeComponet/PortalAdv';
import FeaturedBlog from "../../Components/HomeComponet/FeaturedBlog"
import Slider from '../../Components/HomeComponet/Slider';
const Home = () => {

  return (<div className='main' >
    <Hero
      backgroundImage="https://euryka.ai/wp-content/uploads/2024/04/Eurka-Spotlight-BG.mp4"
      title="Ignite Your Curiosity, Unleash Collective Creativity"
      subtitle="Welcome to Euryka: Your Team's Playground for AI-Powered Innovation"
    />
    <RichText backgroundImage="false" subtitle="Turn your team's ideas into reality" mainHeading="Collaborate, Create, Innovate." description="Step into Euryka, a transformational creative sandbox where AI meets collective human ingenuity. More than just a toolkit, Euryka is your team’s partner in exploration, helping you push the boundaries of what’s possible together. Here, every interaction sparks new ideas, and every project is a collaborative adventure in creative expression." btnText="JOIN WAITLIST" />
    <PortalAdv />
    <Slider />
    <RichText backgroundImage="true" subtitle="Beyond Tools. Beyond Limits." mainHeading="Your Creative Evolution Starts Here" imgSrc="/images/Euryka-Hero-Image.png" description="Step into a world where AI amplifies your team’s creative genius, not replaces it. Euryka seamlessly enhances your workflow, turning creative challenges into breakthrough moments. Be among the first to experience the future of creative collaboration." btnText="Secure Your Early Access" />
    <FeaturedBlog heading="Euryka Blog" description="Explore our Euryka Blog for tips, trends, updates, and expert advice on enhancing your creative projects with AI. Keep up with our latest posts!" btnText="View all posts" />
  </div>)
}

export default Home