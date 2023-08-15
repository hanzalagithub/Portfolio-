import React from "react"; 
import {Box, Flex} from "@chakra-ui/react"; 
 
const Footer = () => { 
 return ( 
   <Box backgroundColor="#18181b" maxWidth="0 auto"> 
     <footer> 
       <Flex 
         margin="0 auto" 
         px={12} 
         color="white" 
         justifyContent="center" 
         alignItems="center" 
         maxWidth="1024px" 
         height={16} 
       > 
         <p>ahmedhanzala2020 • © 2022</p> 
       </Flex> 
     </footer> 
   </Box> 
 ); 
}; 
 
export default Footer; 