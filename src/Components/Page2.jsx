
import { Box, Button } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";


const Page2 = () => {
    const [light, setLight] = useState(() => {
        return localStorage.getItem("selectedtheme") === "dark" ? false : true;
      });
    const navigate = useNavigate();
    
    useEffect(() => {
        const theme = light?"light":"dark";
      document.body.setAttribute("dark-theme", theme);
      localStorage.setItem("selectedtheme",theme);
      
    }, [light]);
    
    const handleClick = () => {
        setLight(!light);
      };
    const handleButton = () => {
      navigate("/");
    };
    return (
        <>
        <Box style={{margin:'20px auto'}} sx={{width:'45px'}}>
        <Button onClick={handleClick} sx={{alignItems:'center'}} style={{margin:'20px auto'}}>{light?<BedtimeIcon/>:<WbSunnyIcon/>}</Button>
        </Box>
        
         <Box sx={{width:'40vw',gap:'20px',padding:'25px', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} className='margin'>
          <Box sx={{width:'50%',height:'25%',p:'20px',margin:'9px'}} className='margin'>Hello 2</Box>
          <Box sx={{width:'50%',height:'25%',p:'20px',margin:'9px'}} className='margin'>hii 2</Box>
          <Box sx={{width:'50%',height:'25%',p:'20px',margin:'9px',color:'var(--red_color)'}} className='margin'>New colors 2</Box>
          <Box sx={{width:'50%',height:'25%',p:'20px',margin:'9px',bgcolor:'var(--blue_color)',color:'var(--body_background)'}} className='margin'>Background change 2</Box>
          
    
         <Button sx={{borderRadius:'20px',color:'var( --button_color)', width:'50%',background:'var(--button_bg)'}} style={{margin:'20px auto'}} onClick={handleButton}>Click to navigate to first page</Button>
         </Box>
          
        </>)
}

export default Page2
