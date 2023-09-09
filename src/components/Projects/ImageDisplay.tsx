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
  Grid,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type ImageListDisplayProps = {
  imageList: string[];
};

const ImageListDisplay = (props: ImageListDisplayProps) => {
  const { imageList } = props;
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
      prevIndex === imageList.length - 1 ? 0 : (prevIndex || 0) + 1
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0
        ? imageList.length - 1
        : (prevIndex || imageList.length) - 1
    );
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImageIndex(null);
  };
  return (
    <ImageList cols={4}>
      {imageList.map((item, index) => (
        <ImageListItem key={item} onClick={() => handleImageClick(index)}>
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={"Project image"}
            loading="lazy"
            style={{ cursor: "pointer" }}
          />
        </ImageListItem>
      ))}

      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Slide}
        maxWidth="md"
      >
        <DialogContent>
          <Grid container>
            <Grid item xs={12} sx={{ textAlign: "end" }}>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid container>
              <Grid item xs={1}>
                <Button
                  onClick={handlePrevImage}
                  sx={{ height: "100%", width: "100%" }}
                >
                  <NavigateBeforeIcon />
                </Button>
              </Grid>
              <Grid item xs={10}>
                <img
                  src={imageList[selectedImageIndex || 0]}
                  alt="Selected image"
                  style={{ width: "100%", height: "100%" }}
                />
              </Grid>
              <Grid item xs={1}>
                <Button
                  onClick={handleNextImage}
                  sx={{ height: "100%", width: "100%" }}
                >
                  <NavigateNextIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <img
              src={
                imageList[
                  selectedImageIndex === 0
                    ? imageList.length - 1
                    : (selectedImageIndex || imageList.length) - 1
                ]
              }
              alt="Previous image"
              style={{
                width: "200px",
                height: "113px",
                cursor: "pointer",
                opacity: "0.3",
              }}
              onClick={handlePrevImage}
            />
            <img
              src={imageList[selectedImageIndex ? selectedImageIndex : 0]}
              alt="Selected image"
              style={{ width: "250px", height: "141px" }}
            />
            <img
              src={
                imageList[
                  selectedImageIndex === imageList.length - 1
                    ? 0
                    : (selectedImageIndex || 0) + 1
                ]
              }
              alt="Next image"
              style={{
                width: "200px",
                height: "113px",
                cursor: "pointer",
                opacity: "0.3",
              }}
              onClick={handleNextImage}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </ImageList>
  );
};

export default ImageListDisplay;
