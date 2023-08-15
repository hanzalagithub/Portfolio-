import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
import myimage from "../images/me.jpeg"; 
const greeting = "Hello, I am Ahmed Hanzala!"; 
const bio1 = "A frontend developer"; 
const bio2 = "specialized in React"; 
 
const LandingSection = () => ( 
 <FullScreenSection 
   justifyContent="center" 
   alignItems="center" 
   isDarkBackground 
   backgroundColor="#2A4365" 
 > 
   <VStack spacing={16} > 
     <VStack spacing={4} alignItems="center"> 
       <Avatar 
         src={myimage}
         size="2xl" 
         name="Ahmed Hanzala" 
       /> 
       <Heading as="h4" size="md" noOfLines={1} > 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="2xl" noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="2xl" noOfLines={1} > 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 
 
export default LandingSection;