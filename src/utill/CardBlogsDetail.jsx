import React, { useEffect, useState } from "react";
import { getData } from "../layout/api";
import CardDetail from "../components/CardDetail";
import { useParams } from "react-router-dom";



export default function CardBlogsDetail() {
//  need to add {author:{}}
  const [product, setProduct] = useState({ author: {} });

  const { id } = useParams();
  const getBlogsbyId = async () => {
    const data = await getData(`/blogs/${id}`);
    setProduct(data);
  };
  console.log(product);

  useEffect(() => {
    getBlogsbyId();
  }, [id]);

  return (
    <>
      <CardDetail
        title={product.title}
        content={product.content}
        thumbnail={product.thumbnail}
        username={product.author.username}
        profileUrl={product.author.profileUrl}
        bio={product.author.bio}
       
      />
    </>
  );
}
