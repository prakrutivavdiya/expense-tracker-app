import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SummaryCard = (props) => {
  const { theme, title, value, actionText, onActionClick } = props;
  return (
    <Card sx={{minWidth: 200,border: "1px solid #eee"}}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14, textAlign: "center" }}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="h4" component="div" mt={2} color={theme==="green"?"#04c470":theme==="red"?"red":"black"}>
          {value + " INR"} 
        </Typography>
      </CardContent>
      {actionText?
        <Button size="small" onClick={onActionClick} sx={{display:"flex", float:"right", marginRight:"0.5rem"}}>{actionText}</Button>:<Box sx={{padding:"1rem"}}></Box>}
    </Card>
  );
};

export default SummaryCard;
