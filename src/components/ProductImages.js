import React, { useState } from "react";
import styled from "styled-components";

const ProductImages = ({ images = [{ url: "" }] }) => {
  // برای این که بتونیم عکس هارو فراخوانی بکنیم باید عکس هارو بریزیم تو پراپزی که اونور مشخص کردیم و این جا به وسیله useState اون هارو استخراج کنیم
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
    {/* چون به images index صفر دادیم اولین عکس را از لیست نشون میده وبا هر بار کلیک کردن index آن محصول مشخص میکنه کدوم عکس جایگزین عکس اصلی بشه */}
  
  
     <img src={main.url} alt="main_image" className="main"/>
     <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              // هرکدوم از عکس های گالری با عکس اصلی یکی بود دورس سایه بنداز
              className={`${main.url === image.url ? "active" : null}`}
            />
          );
        })}
      </div>
     
     
     
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
