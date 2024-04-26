/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../components/button/Button";
import { Radio } from "../../components/checkbox";
import { Dropdown } from "../../components/dropdown";
import Field from "../../components/field/Field";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import slugify from "slugify";
import { PostStatus } from "../../utils/constants";

import ImageUpload from "../../components/image/ImageUpload";
import useImage from "../../hooks/useImage";
import Toggle from "../../components/toggle/Toggle";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "../../fireBase/firebase-config";
import { useAuth } from "../../contexts/auth-context";
import { toast } from "react-toastify";
const PostAddNewStyles = styled.div``;

const PostAddNew = () => {
  const { userInfo } = useAuth();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(userInfo);
  const { control, watch, setValue, getValues, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      status: 2,
      categoryId: "",
      hot: true,
      image: "",
    },
  });
  const {
    image,
    progressBar,
    handleDeleteImage,
    handleSelectImage,
    handleResetUploadImage,
  } = useImage(setValue, getValues);
  const watchStatus = watch("status");
  const watchHot = watch("hot");
  const addPostHandler = async (values) => {
    setLoading(true);
    try {
      const cloneValues = { ...values };
      cloneValues.slug = slugify(values.slug || values.title, { lower: true });
      cloneValues.status = Number(values.status);
      console.log(cloneValues);
      const postRef = collection(db, "posts");
      const post = await addDoc(postRef, {
        ...cloneValues,
        image,
        userId: userInfo.uid,
        createdAt: serverTimestamp(),
      });
      if (post) {
        toast.success("Created post successfully !!!");
        reset({
          title: "",
          slug: "",
          status: 2,
          categoryId: "",
          hot: true,
          image: "",
        });
        setCategory("");
        handleResetUploadImage();
      } else {
        toast.error("Something wrong !!!");
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    async function getCategories() {
      const categoriesRef = collection(db, "categories");
      const q = query(categoriesRef, where("status", "==", 1));
      const querySnapshot = await getDocs(q);
      const results = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "==>", doc.data());
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategories(results);
      console.log(results);
    }
    getCategories();
  }, []);

  return (
    <PostAddNewStyles>
      <h1 className="dashboard-heading">Add new post</h1>
      <form onSubmit={handleSubmit(addPostHandler)}>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Title</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="title"
              id="title"
            ></Input>
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              control={control}
              placeholder="Enter your slug"
              name="slug"
              id="slug"
            ></Input>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Image</Label>
            <ImageUpload
              handleDeleteImage={handleDeleteImage}
              onChange={handleSelectImage}
              progress={progressBar}
              image={image}
            ></ImageUpload>
          </Field>
          <Field>
            <Label>Category</Label>
            <Dropdown>
              {!category ? (
                <Dropdown.Select></Dropdown.Select>
              ) : (
                <Dropdown.Select
                  className="capitalize"
                  placeholder={category}
                ></Dropdown.Select>
              )}
              <Dropdown.List>
                {categories?.length > 0 &&
                  categories.map((category) => (
                    <Dropdown.Option
                      key={category.id}
                      onClick={() => {
                        setValue("categoryId", category.id);
                        setCategory(category.name);
                      }}
                    >
                      {category.name}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
              {category && (
                <span className="capitalize inline-block mt-4 px-3 py-2 rounded-lg bg-green-100 text-green-500 font-semibold text-sm">
                  {category}
                </span>
              )}
            </Dropdown>
          </Field>

          <Field>
            <Label>Feature</Label>
            <Toggle
              on={watchHot}
              onClick={() => setValue("hot", !watchHot)}
            ></Toggle>
          </Field>
          <Field>
            <Label>Status</Label>
            <div className="flex items-center gap-x-5">
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === PostStatus.APPROVED}
                // onClick={() => setValue("status", "approved")}
                value={PostStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === PostStatus.PENDING}
                // onClick={() => setValue("status", "pending")}
                value={PostStatus.PENDING}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === PostStatus.REJECTED}
                // onClick={() => setValue("status", "reject")}
                value={PostStatus.REJECTED}
              >
                Reject
              </Radio>
            </div>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field></Field>
        </div>
        <Button
          type="submit"
          className="mx-auto max-w-[300px]"
          isLoading={loading}
          disabled={loading}
        >
          Add new post
        </Button>
      </form>
    </PostAddNewStyles>
  );
};

export default PostAddNew;
