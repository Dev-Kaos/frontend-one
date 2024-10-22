import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

import { TbBook } from "react-icons/tb";
import { Card, CardContent, CardCover, Chip } from "@mui/joy";
import { ICourse } from "../../../shared/types/coursesTypes";

function CourseCardOne(data: ICourse) {
  // TODO: CARD data
  const cardData = data;
  return (
    <>
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, md: 4 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card sx={{ minHeight: "600px", width: "600px" }}>
          <CardCover>
            <img
              src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
              srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </CardCover>
          <CardCover
            sx={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
            }}
          />
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Typography
              fontStyle={{ color: "white" }}
              sx={{ fontWeight: 400, fontSize: "xl4" }}
              startDecorator={<TbBook />}
            >
              {cardData.course}
            </Typography>
            <Typography
              level="title-lg"
              sx={{ mb: 2, color: "#white" }}
              endDecorator={
                <Chip
                  component="span"
                  size="sm"
                  variant="soft"
                  color="success"
                >
                  {cardData.state}
                </Chip>
              }
            >
              {cardData.type}
            </Typography>
            <Typography
              level="body-md"
              sx={{ mb: 2, color: "#f8bbd0" }}
            >
              {cardData.cycle}
            </Typography>

            <Typography
              level="body-md"
              fontStyle={{ color: "white" }}
            >
              {cardData.description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default CourseCardOne;
