import React, { useState } from "react";
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type ExoExplorerProps = {};

const images = [
  "https://picsum.photos/id/237/1920/1080",
  "https://picsum.photos/id/200/1920/1080",
  "https://picsum.photos/id/201/1920/1080",
  "https://picsum.photos/id/202/1920/1080",
  "https://picsum.photos/id/203/1920/1080",
  "https://picsum.photos/id/204/1920/1080",
  "https://picsum.photos/id/210/1920/1080",
  "https://picsum.photos/id/206/1920/1080",
];

const ExoExplorer = (props: ExoExplorerProps) => {
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : (prevIndex || 0) + 1
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : (prevIndex || images.length) - 1
    );
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImageIndex(null);
  };

  return (
    <Box sx={{ height: "90vh", width: "100%", textAlign: "center" }}>
      <Typography variant="h1">Exo Explorer</Typography>
      <Typography variant="h2">Description...</Typography>
      <ImageList cols={4}>
        {images.map((item, index) => (
          <ImageListItem key={item} onClick={() => handleImageClick(index)}>
            <img
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={"Project image"}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Dialog for displaying the selected image */}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Slide}
        maxWidth="md"
        fullWidth
      >
        <DialogContent>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: "absolute", top: 0, right: 0 }}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={handlePrevImage}
            aria-label="previous"
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
            }}
          >
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton
            onClick={handleNextImage}
            aria-label="next"
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
            }}
          >
            <NavigateNextIcon />
          </IconButton>
          <img
            src={images[selectedImageIndex || 0]}
            alt="Selected image"
            style={{ width: "100%", height: "100%" }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src={
                images[
                  selectedImageIndex === 0
                    ? images.length - 1
                    : (selectedImageIndex || images.length) - 1
                ]
              }
              alt="Previous image"
              style={{ width: "25%", maxHeight: "10vh" }}
            />
            <img
              src={images[selectedImageIndex ? selectedImageIndex : 0]}
              alt="Previous image"
              style={{ width: "25%", maxHeight: "10vh" }}
            />
            <img
              src={
                images[
                  selectedImageIndex === images.length - 1
                    ? 0
                    : (selectedImageIndex || 0) + 1
                ]
              }
              alt="Next image"
              style={{ width: "25%", maxHeight: "10vh" }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ExoExplorer;
