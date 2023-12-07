import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import sideNews from '@/assets/Rectangle 9.png'
import Image from "next/image";


const SideBar = () => {
    return (
        <Box className="my-5">
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={sideNews} width={800} alt="top news" />
                    </CardMedia>
                    <p className="w-[100px] bg-red-600 px-2  my-2 text-white rounded">Techonlogy</p>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom className="my-5">
                            By Rasibul Islam - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default SideBar;