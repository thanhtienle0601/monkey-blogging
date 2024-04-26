/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostFeatureItem from "../posts/PostFeatureItem";
import Heading from "../../components/heading/Heading";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../fireBase/firebase-config";

const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const results = [];
    const postRef = collection(db, "posts");
    const queries = query(
      postRef,
      where("hot", "==", true),
      where("status", "==", 1)
    );
    onSnapshot(queries, (snapshot) => {
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(results);
    });
  }, []);
  console.log(posts);
  if (posts.length <= 0) return null;
  return (
    <HomeFeatureStyles className="home-block">
      <div className="container">
        <Heading>Features</Heading>
        <div className="grid-layout">
          {posts.map((post) => (
            <PostFeatureItem key={post.id} data={post}></PostFeatureItem>
          ))}
        </div>
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;
