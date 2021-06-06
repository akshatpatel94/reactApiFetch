import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../styles.css";

const User = () => {
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((responce) => responce.json())
        .then((json) => {
          console.log(json);
          setUser(json);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <h1>User</h1>
      {user.map((udata) => {
        return (
          <div className="card_main" key={udata.id}>
            <Card className="card_root">
              <CardContent>
                <Typography
                  className="card_title"
                  color="textSecondary"
                  gutterBottom
                >
                  Username : {udata.username}
                </Typography>
                <Typography variant="h5" component="h2">
                  {udata.name}
                </Typography>
                <Typography className="card_pos" color="textSecondary">
                  Email : {udata.email} <br />
                  Address : {udata.address.city}
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </>
  );
};
export default User;
