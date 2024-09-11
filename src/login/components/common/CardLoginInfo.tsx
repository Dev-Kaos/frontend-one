import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

export default function CardLoginInfo() {
  return (
    <Card
      size="lg"
      variant="plain"
      orientation="horizontal"
      sx={{
        textAlign: "center",
        maxWidth: "100%",
        width: 600,
        // to make the demo resizable
        // resize: "horizontal",
        // overflow: "auto",
      }}
    >
      <CardOverflow
        variant="solid"
        color="primary"
        sx={{
          flex: "0 0 200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: "var(--Card-padding)",
          gap: 4,
        }}
      >
        <Typography
          textColor="#fff"
          sx={{ fontSize: "xl2", fontWeight: "xl" }}
        >
          Recuerda
        </Typography>
        <Typography textColor="primary.200">
          Siempre puedes ponerte en contacto con algun administrador.
        </Typography>
      </CardOverflow>
      <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
        <AspectRatio
          ratio="19/8"
          objectFit="contain"
          variant="plain"
        >
          <img
            alt=""
            src="https://static.vecteezy.com/system/resources/previews/006/409/485/original/people-thinking-to-make-decision-problem-solving-and-find-creative-ideas-with-question-mark-in-flat-cartoon-background-for-poster-illustration-vector.jpg"
          />
        </AspectRatio>
        <CardContent>
          <Typography level="title-lg">
            ¿No recuerdas tu cuenta o Contraseña?
          </Typography>
          <Typography sx={{ fontSize: "sm", mt: 0.5 }}>
            No te preocupes, puedes acceder con alguno de los metodos de
            verificación disponibles.
          </Typography>
        </CardContent>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            "--variant-borderWidth": "2px",
            borderRadius: 40,
            borderColor: "primary.500",
            mx: "auto",
          }}
        >
          Aquí
        </Button>
      </CardContent>
    </Card>
  );
}
