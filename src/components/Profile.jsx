import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../styles.css";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  const [userData, setUserData] = useState({ id });
  const [userAdd, setUserAdd] = useState({ id });
  const [userComp, setUserComp] = useState({ id });
  const [userPost, setUserPost] = useState([]);

  const getUserData = (async) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setUserData(json);
        setUserAdd(json.address);
        setUserComp(json.company);
      });
  };

  const getUserPost = (async) => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/posts/`)
        .then((responce) => responce.json())
        .then((json) => {
          // console.log(json);
          setUserPost(json);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
    getUserPost();
  }, []);

  return (
    <>
      <h1>Profile</h1>
      <div className="card_main" key={id}>
        <Card className="card_root">
          <CardContent>
            <Typography
              className="card_title"
              color="textSecondary"
              gutterBottom
            >
              {userData.username}
            </Typography>
            <Typography variant="h5" component="h2">
              {userData.name}
            </Typography>
            <hr />
            <Typography className="card_pos" color="textSecondary">
              Email : {userData.email} <br />
              Phone : {userData.phone} <br />
              Website : {userData.website} <br />
            </Typography>
            <hr />
            <Typography className="card_pos" color="textSecondary">
              Address : <br />
              Street : {userAdd.street} <br />
              Appaertment : {userAdd.suite} <br />
              City : {userAdd.city} <br />
              Zip : {userAdd.zipcode}
            </Typography>
            <hr />
            <Typography className="card_pos" color="textSecondary">
              Company: {userComp.name}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <h1>Posts</h1>
      {userPost.map((pdata) => {
        if (pdata.userId === userData.id) {
          return (
            <>
              <div className="card_main" key={pdata.id}>
                <Card className="card_root">
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Title : {pdata.title}
                    </Typography>
                    <hr />
                    <Typography variant="body2" component="p">
                      Content : {pdata.body}
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </>
          );
        }
      })}
    </>
  );
};
export default Profile;
