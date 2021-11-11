import React, { useCallback, useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Input,
  TextField,
  InputAdornment,
  Stack,
  Button,
  Paper,
  Box,
  Avatar,
  List,
  ListItem,
} from "@mui/material";
import { useSelector } from "react-redux";
import useWindowDimensions from "../useWindowDimensions";
import organize from "../../images/organize.png";
import friendship from "../../images/friendship.png";
import "./playerCard.css";
import { useHistory, useLocation } from "react-router-dom";

function PlayerCard(props) {
  const { height, width } = useWindowDimensions();
  const location = useLocation();
  const history = useHistory();
  const authenticated = useSelector((state) => state.player.authenticated);
  const user = useSelector((state) => state.player.user);
  const [loading, setLoading] = useState(true);

  const onPressOrganized = () => {
    if (location.pathname !== "/organized") {
      history.push({ pathname: "/organized" });
    }
  };

  const onPressJoined = () => {
    if (location.pathname !== "/joined") {
      history.push({ pathname: "/joined" });
    }
  };

  const onPressBackedOut = () => {
    if (location.pathname !== "/backedOut") {
      history.push({ pathname: "/backedOut" });
    }
  };

  const onPressRejected = () => {
    if (location.pathname !== "/rejected") {
      history.push({ pathname: "/rejected" });
    }
  };

  return (
    <div className="user-sticky">
      <Paper variant="outlined" elevation={5}>
        <Grid conatiner>
          {authenticated && (
            <Grid container paddingTop="15px" paddingBottom="15px" spacing={1}>
              <Grid textAlign="center" item xs={4} sm={12}>
                <img
                  alt="user"
                  src={user.image}
                  style={{
                    height: width / 9,
                    width: width / 9,
                    borderRadius: width / 18,
                    resize: "cover",
                    minWidth: 85,
                    minHeight: 85,
                  }}
                />
              </Grid>
              <Grid item xs={8} sm={12}>
                <Grid container>
                  <Grid item xs={0} sm={4}></Grid>
                  <Grid item textAlign="center" xs={0} sm={4}>
                    <Typography variant="h5">{user.name}</Typography>
                  </Grid>
                  <Grid item xs={0} sm={4}></Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={0} sm={1}></Grid>
                  <Grid item textAlign="center" xs={0} sm={10}>
                    <button
                      onClick={onPressOrganized}
                      style={{
                        padding: 0,
                        margin: 0,
                        backgroundColor: "transparent",
                        borderWidth: 0,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flex: 1,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 5,
                        }}
                      >
                        <img
                          alt="organize"
                          src={organize}
                          style={{ height: 19.5, width: 19.5, marginRight: 5 }}
                        />
                        <Typography variant="title">
                          Organized Events
                        </Typography>
                      </div>
                    </button>
                  </Grid>
                  <Grid item xs={0} sm={1}></Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={0} sm={1}></Grid>
                  <Grid item textAlign="center" xs={0} sm={10}>
                    <button
                      onClick={onPressJoined}
                      style={{
                        padding: 0,
                        margin: 0,
                        backgroundColor: "transparent",
                        borderWidth: 0,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flex: 1,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 5,
                        }}
                      >
                        <img
                          alt="friendship"
                          src={friendship}
                          style={{ height: 19.5, width: 19.5, marginRight: 5 }}
                        />
                        <Typography variant="title">Joined Events</Typography>
                      </div>
                    </button>
                  </Grid>
                  <Grid item xs={0} sm={1}></Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={0} sm={1}></Grid>
                  <Grid item textAlign="center" xs={0} sm={10}>
                    <button
                      onClick={onPressBackedOut}
                      style={{
                        padding: 0,
                        margin: 0,
                        backgroundColor: "transparent",
                        borderWidth: 0,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flex: 1,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 5,
                        }}
                      >
                        <img
                          alt="friendship"
                          src={friendship}
                          style={{ height: 19.5, width: 19.5, marginRight: 5 }}
                        />
                        <Typography variant="title">BackedOut Events</Typography>
                      </div>
                    </button>
                  </Grid>
                  <Grid item xs={0} sm={1}></Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={0} sm={1}></Grid>
                  <Grid item textAlign="center" xs={0} sm={10}>
                    <button
                      onClick={onPressRejected}
                      style={{
                        padding: 0,
                        margin: 0,
                        backgroundColor: "transparent",
                        borderWidth: 0,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flex: 1,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 5,
                        }}
                      >
                        <img
                          alt="friendship"
                          src={friendship}
                          style={{ height: 19.5, width: 19.5, marginRight: 5 }}
                        />
                        <Typography variant="title">Rejected Events</Typography>
                      </div>
                    </button>
                  </Grid>
                  <Grid item xs={0} sm={1}></Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Paper>
    </div>
  );
}

export default PlayerCard;
