import React from "react"

import Layout from "../components/layout"
import Headshot from "../components/headshot"
import Wicnet from "../components/wicnet"
import Recreation from "../components/recreation"
import Dupri from "../components/dupri"
import PlusDataScience from "../components/plus-data-science"
import SEO from "../components/seo"
import hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <section class="top">
        <div class="container">
            <div>
    	    	<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    	      		<Headshot />
    	    	</div>
            </div>
        	<div>
    	    	<h1>Phil Bicking</h1>
    	    	<h3>Web Developer</h3>
        	</div>
        </div>
    </section>

    <hero />

    <section class="about">
        <div class="container">
    	   <h2>About Me</h2>
    	   <p>I am a front-end web developer with extensive experience in Drupal and WordPress. I have built and themed dozens of sites in both platforms. My favorite part of the job is taking a design mockup and, with just a code editor, browser and terminal window, building it into a beautiful, responsive and fully-functional website.</p>
           <p>I also have experience running and maintaining a successful website, having created the popular <em>Game of Thrones</em> fan site WinterIsComing.net. I started it as a simple blog with only several dozen visitors and grew it into a full-blown website with millions of page views a month. This experience taught me a lot about how to grow an audience using frequent content updates, social media, and search engine optimization.</p>
           <p>I am currently employed as a web developer at Duke University (Durham, NC) in the Office of Information Technology's Web Services team. My job responsibilities there include building sites in Drupal and WordPress, as well as maintaining existing sites via bug fixes, security patches and updates.</p>
        </div>
    </section>

    <section class="portfolio">
        <div class="container">
        	<h2>Portfolio</h2>
            <div class="portfolio-item">
                <div class="portfolio-content">
                    <h3>WinterIsComing.net</h3>
                    <p>My Game of Thrones fan site was the first site I ever built. I built it in WordPress and designed the layout and all the graphical elements.</p>
                    <a href="https://winteriscoming.net">Visit WinterIsComing.net</a>
                </div>
                <Wicnet />
            </div>
        	<div class="portfolio-item">
    	    	<Recreation />
    	    	<div class="portfolio-content">
    	    		<h3>Duke Recreation</h3>
    	    		<p>This Drupal 7 site has an unconventional sidebar nav and bold styling throughout. This was one of my favorite sites to style.</p>
    	    		<a href="https://recreation.duke.edu">Visit Duke Recreation</a>
    	    	</div>
        	</div>

            <div class="portfolio-item">
                <div class="portfolio-content">
        	        <h3>+DataScience</h3>
        	        <p>A more traditional Drupal 7 site, this one had my first use of flexible content areas with the Drupal module Paragraphs plus it includes a fun hero animation.</p>
        	        <a href="https://plus.datascience.duke.edu/">Visit +Data Science</a>
                </div>
                <PlusDataScience />
            </div>

            <div class="portfolio-item">
                <Dupri />
                <div class="portfolio-content">
                    <h3>Duke Population Research Institute</h3>
                    <p>DUPRI was my first Drupal 8 site build which also doubled as my second and third Drupal 8 sites, as this theme was used on two related sites (CPHA and DPRC).</p>
                    <a href="https://dupri.duke.edu/">Visit DUPRI</a>
                </div> 
            </div>
        </div>
    </section>
    <section class="contact">
        <div class="container">
            <h2>Contact</h2>
            <p>Have a website idea you want to make a reality? An existing site that needs an overhaul? Or maybe you just have some questions? Feel free to contact me using the form below.</p>
            <form method="post" action="https://formspree.io/phil.bicking@gmail.com">
                <input type="text" name="_name" placeholder="Name"/>
                <input type="email" name="_replyto" placeholder="Email"/>
                <textarea name="_content" placeholder="Your message"/>
                <input type="submit" name="_submit" value="Send" class="button"/>
            </form>
        </div>
    </section>
  </Layout>
)

export default IndexPage
