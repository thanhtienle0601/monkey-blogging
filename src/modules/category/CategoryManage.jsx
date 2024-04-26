/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { Button } from "../../components/button";
import DashboardHeading from "../dashboard/DashboardHeading";
import Table from "../../components/table/Table";
import { LabelStatus } from "../../components/label";
import { ActionDelete, ActionEdit, ActionView } from "../../components/actions";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../fireBase/firebase-config";
import { categoryStatus } from "../../utils/constants";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

const CategoryManage = () => {
  const navigate = useNavigate();
  const colRef = collection(db, "categories");
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("");
  const newRef = filter ? query(colRef, where("name", ">=", filter)) : colRef;
  useEffect(() => {
    getDocs(newRef)
      .then((snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setCategories(results);
      })
      .catch((err) => {
        console.log(err);
      });

    // let results = [];
    // const colRef = collection(db, "categories");
    // onSnapshot(colRef, (snapshot) => {
    //   snapshot.forEach((doc) => {
    //     results.push({
    //       id: doc.id,
    //       ...doc.data(),
    //     });
    //   });
    //   setCategories(results);
    // });
  }, [newRef]);
  const handleDeleteCategory = async (docId) => {
    const colRef = doc(db, "categories", docId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(colRef);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const handleInputFilter = debounce((e) => {
    setFilter(e.target.value);
  }, 1000);
  return (
    <div>
      <DashboardHeading title="Categories" desc="Manage your category">
        <Button kind="secondary" height="60px" to="/manage/add-category">
          Create Category
        </Button>
      </DashboardHeading>
      <div className="flex items-center justify-end mb-10">
        <input
          type="text"
          placeholder="Search category ..."
          className="py-4 px-5 border border-gray-300 rounded-lg"
          onChange={handleInputFilter}
        />
      </div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 &&
            categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  <span className="italic text-gray-400">{category.slug}</span>
                </td>
                <td>
                  {category.status === categoryStatus.APPROVED && (
                    <LabelStatus type="success">Approved</LabelStatus>
                  )}
                  {category.status === categoryStatus.UNAPPROVED && (
                    <LabelStatus type="warning">Unapproved</LabelStatus>
                  )}
                </td>
                <td>
                  <div className="flex items-center gap-x-3">
                    <ActionView></ActionView>
                    <ActionEdit
                      onClick={() =>
                        navigate(`/manage/update-category?id=${category.id}`)
                      }
                    ></ActionEdit>
                    <ActionDelete
                      onClick={() => handleDeleteCategory(category.id)}
                    ></ActionDelete>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CategoryManage;
