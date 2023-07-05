import { AppBar, Toolbar, Button} from "@mui/material";
import { useState } from "react";


const Navbar = ({ menuItems }) => {

    const [show, setShow] = useState(true);
    const handleClick = () => {

    }

    return (<>
        <AppBar position="estatic">
            <Toolbar> 
                { show && menuItems.map((item, index) => {
                  return <Button key={index} color='inherit' onClick={handleClick}>{item.text} </Button>
                  })
                }
            

            </Toolbar>
    
        </AppBar>
   
    </> );
}
 
export default Navbar;