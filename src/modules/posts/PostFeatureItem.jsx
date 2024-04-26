/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostTitle from "./PostTitle";
import PostInfo from "./PostInfo";
import PostImage from "./PostImage";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../fireBase/firebase-config";
import slugify from "slugify";

const PostFeatureItemStyles = styled.div`
  width: 100%;
  height: 272px;
  border-radius: 16px;
  position: relative;
  .post-image {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
  .post-overlay {
    inset: 0;
    background: linear-gradient(
      179.77deg,
      #6b6b6b 36.45%,
      rgba(163, 163, 163, 0.622265) 63.98%,
      rgba(255, 255, 255, 0) 99.8%
    );
    mix-blend-mode: multiply;
    opacity: 0.6;
    border-radius: 16px;
    position: absolute;
  }
  .post-content {
    position: absolute;
    inset: 0;
    z-index: 10;
    padding: 20px;
    color: white;
  }
  .post-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
`;

const PostFeatureItem = ({ data }) => {
  const [category, setCategory] = useState({});
  const [user, setUser] = useState({});
  useEffect(() => {
    const getCategory = async () => {
      const categoryRef = doc(db, "categories", data.categoryId);
      const categorySnap = await getDoc(categoryRef);
      setCategory(categorySnap.data());
    };
    getCategory();
  }, [data.categoryId]);
  useEffect(() => {
    const getUser = async () => {
      const userRef = doc(db, "users", data.userId);
      const userSnap = await getDoc(userRef);
      setUser(userSnap.data());
    };
    getUser();
  }, [data.userId]);
  if (!data) return null;
  const timestamp = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(timestamp).toLocaleDateString("vi-VI");
  return (
    <PostFeatureItemStyles>
      <PostImage url={data.image} alt=""></PostImage>
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          <PostCategory className="capitalize">{category?.name}</PostCategory>
          <PostInfo
            to={slugify(user?.fullname || "", { lower: true })}
            authorName={user?.fullname}
            time={formatDate}
          ></PostInfo>
        </div>
        <PostTitle size="large">{data.title}</PostTitle>
      </div>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;
