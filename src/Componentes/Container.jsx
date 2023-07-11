import { Container } from "@mui/material";
import Navbar from "./Navbar";


const ContainerComponent = () => {
    
    const menuItems = [
        {
            text: 'productos',
            link: '/productos',
            subMenuItems: [
                { text: 'producto 1', link: '/productos/1' },
                { text: 'producto 2', link: '/productos/2' },
                { text: 'producto 3', link: '/productos/3' },
            ]
        },
        {
            text: 'Informacion',
            link: '/elementos',
            subMenuItems: [
                { text: 'elemento 1', link: '/elementos/1' },
                { text: 'elemento 2', link: '/elementos/2' },
                { text: 'elemento 3', link: '/elementos/3' },
            ]
        },
        {
            text: 'compras',
            link: '/compras',
            subMenuItems: [
                { text: 'Wishlist', link: '/compras/1' },
            ],
        },
    ];
    
    return ( <>
      <Container>
        <Navbar menuItems={menuItems} />
      </Container>
      
    </> );
}
 
export default ContainerComponent;