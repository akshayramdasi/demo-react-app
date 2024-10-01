import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const Post = () => {
  const [posts, setPost] = useState([]);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 150,
    },
    {
      field: "body",
      headerName: "Description",
      width: 150,
    },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await fetch(API_URL);
        const postData = await posts.json();
        setPost(postData);
      } catch (error) {}
    };
    fetchPosts();
  }, []);
  return (
    <div id="posts">
      <Box sx={{ height: 400, width: "50%" }} data-testid="posts">
        <DataGrid
          rows={posts}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Post;
