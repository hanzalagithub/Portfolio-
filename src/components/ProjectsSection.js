import React, { useState } from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react"; 
import Card from "./Card"; 
 
const projects = [ 
 { 
   title: 'Food App', 
   description: 
   'Green Mart which have items that are adding in cart manually', 
   getImageSrc: () => require("../images/Food.JPG"),
   url: 'https://astonishing-sable-5b3c7e.netlify.app', 
   
 }, 
 { 
   title: 'Login page(dynamic)', 
   description: 
   'login page which have signup click and signin click with form rendering', 
   getImageSrc: () => require("../images/chessclub.JPG"), 
   url: 'https://dainty-concha-cf0c98.netlify.app', 
 }, 
 { 
   title: 'My Garage List Form', 
   description: 
     "You can add your gragae info in your form", 
   getImageSrc: () => require("../images/Capture.JPG"), 
   url: 'https://effervescent-croissant-945e76.netlify.app', 
 }, 
 { 
   title: "Quiz App", 
   description: 
     "Enter the button and give the quiz and find your result", 
   getImageSrc: () => require("../images/quizapp.JPG"), 
   url: 'https://jazzy-lollipop-f6b539.netlify.app', 
 }, 
]; 
 
const ProjectsSection = () => { 
  const [backgroundImage ,setBackgroundImage]= useState("");
  const handleProjectClick=(imageSrc)=>{
    setBackgroundImage(imageSrc);
  };
 return ( 
   <FullScreenSection 
   style={{
    backgroundImage:`url(${backgroundImage})`,
    
   }}
     backgroundColor="#14532d" 
     isDarkBackground 
     p={8} 
     alignItems="flex-start" 
     spacing={8} 
   > 
     <Heading as="h1" id="projects-section"> 
       Featured Projects 
     </Heading> 
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(1,minmax(0,1fr))" 
       gridGap={7} 
       w={[290, 460, 900]}
     > 
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           url={project.url}
           imageSrc={project.getImageSrc()} 
           onClick={()=>handleProjectClick(project.getImageSrc())}
         /> 
       ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;