import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerImage from "@/assets/The Dragon News.png"
import { showCurrentDate } from "@/utils/showCurrentDate";


const Header = () => {
    const currentDate = showCurrentDate()
    return (
        <Box className="w-full my-5">
            <Container>
                <Image
                    src={headerImage}
                    width={400}
                    height={400}
                    alt="logo"
                    className="mx-auto" />
            </Container>
            <Typography variant="body2" color="gray" textAlign="center">
                Journalism Without Fear or Favour
            </Typography>
            <Typography color="gray" textAlign="center" className="my-2">
                {currentDate}
            </Typography>
        </Box>
    );
};

export default Header;