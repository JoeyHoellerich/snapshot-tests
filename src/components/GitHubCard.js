import React from "react";
import { CardContent, Card, Typography, CardMedia, CardActions, Button } from "@mui/material";
import profilePic from "../img/profilePic.png"

export default function GitHubCard(){
    return(
        <Card sx={{ minWidth: 275, maxWidth: 400 }}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary">
                    JoeyHoellerich 
                </Typography>
                <div>
                    <img src={profilePic} alt="profile" style={{ width: "140", height: "140"}} />
                </div>
                <Typography variant="body2">
                    JoeyHoellerich is a cool guy that has hobbies and interests just like most cool guys.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="https://github.com/JoeyHoellerich">Check Him Out!</Button>
            </CardActions>
        </Card>
    )
}