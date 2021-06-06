import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../styles.css";
import CardActions from "@material-ui/core/CardActions";
import { Link } from "react-router-dom";

const Posts = (props) => {
  const [postsData, setPostId] = useState([]);
  const [userData, setUserData] = useState([]);

  const getPostData = async (props) => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setPostId(json);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const getUdata = async () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((responce) => responce.json())
        .then((json) => {
          console.log(json);
          setUserData(json);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPostData();
    getUdata();
  }, []);

  const getUserName = (id) => {
    const filtered = userData.filter((item) => item.id === id);
    if (filtered.length > 0) {
      return filtered[0].username;
    }

    return "";
  };

  return (
    <>
      <h1>Post</h1>
      {postsData.map((pData) => {
        return (
          <div key={pData.id} className="card_main">
            <Card className="card_root">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {pData.title}
                </Typography>
                <hr />
                <Typography variant="body2" component="p">
                  {pData.body}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/profile/${pData.userId}`}>
                  {getUserName(pData.userId)}
                </Link>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </>
  );
};
export default Posts;
