import React, { useState } from "react";
import Link from "next/link";
import CardItems from "../src/CardItems";
import Courses from "../src/Courses";
import Navbar from "../src/NavBar";

// https://www.youtube.com/watch?v=jo-IV8i5Gdk&list=PLeBknJ2kuv1mDABV2N-H2tcu1vbfffRvg&index=15

const ShopingCart = () => {
  return (
    <>
      <Navbar />
      <Courses />
      <Link href="/detalhes">
        <a>Blog Post</a>
      </Link>
      <CardItems />
    </>
  );
};

export default ShopingCart;
