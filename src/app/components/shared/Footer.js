import { Box, Button, IconButton, TableContainer, Typography } from "@mui/material";
import Container from '@mui/material/Container';
// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';


const Footer = () => {
    const navItems = [
        {
            route: 'Home',
            path: '/'
        },
        {
            route: 'Pages',
            path: '/pages'
        },
        {
            route: 'Category',
            path: '/category'
        },
        {
            route: 'About',
            path: '/about'
        },
        {
            route: 'Contact',
            path: '/contact'
        },
    ];

    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box className="w-full text-center" sx={{
                    "& svg": {
                        color: "white",
                    },
                }}>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton>
                        <YouTubeIcon />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                </Box>
                <Box className="w-full text-center">
                    {navItems.map((item) => (
                        <Link key={item} href={item.path}>
                            <Button className="text-white">
                                {item.route}
                            </Button>
                        </Link>
                    ))}
                </Box>
                <Typography variant = "body2" color="gray" textAlign = "center">
                    @2023 The Dargon News. Desgin By Next.Js
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;