import { createSlice } from "@reduxjs/toolkit";

import summerpictures from "../../assets/summerpictures.jpg";
import wardrobeguide from "../../assets/wardrobeguide.jpg";
import vintagecomeback from "../../assets/vintagecomeback.jpg";
import luxry from "../../assets/luxry.jpg";
import sneaker from "../../assets/sneaker.jpg";
import runaway from "../../assets/runaway.jpg";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: 1,
        title: "Summer Street Style",
        description: "Explore trendy summer outfits for everyday wear.",
        image: summerpictures
      },
      {
        id: 2,
        title: "Minimalist Wardrobe",
        description: "Build a clean and versatile closet with fewer pieces.",
        image: wardrobeguide
      },
      {
        id: 3,
        title: "Vintage Comeback",
        description: "Retro fashion is making a huge return in 2026.",
        image: vintagecomeback
      },
      {
        id: 4,
        title: "Luxury Accessories",
        description: "Top luxury accessories to elevate your look.",
        image: luxry
      },
      {
        id: 5,
        title: "Sneaker Culture",
        description: "The rise of sneakers in high fashion.",
        image: sneaker
      },
      {
        id: 6,
        title: "Runway Trends 2026",
        description: "Discover the hottest runway styles shaping modern fashion.",
        image: runaway
      },
    ],
  },
  reducers: {},
});

export default productSlice.reducer;
