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
import male from "../../images/male.png";
import female from "../../images/female.png";
import { useHistory, useLocation } from "react-router-dom";

function ProfileCard(props) {
  const { height, width } = useWindowDimensions();
  const location = useLocation();
  const history = useHistory();
  const authenticated = useSelector((state) => state.player.authenticated);
  const user = useSelector((state) => state.player.user);
  return (
    <Paper elevation={2} padding="15px">
      <Grid container>
        <Grid item textAlign="center">
          <img
            alt="user"
            src={props.user.image}
            style={{
              height: width / 15,
              width: width / 15,
              borderRadius: width / 30,
              resize: "cover",
              minWidth: 69,
              minHeight: 69,
              marginLeft: 15, marginRight: 15,
              marginTop: 15, marginBottom: 15
            }}
          />
        </Grid>
        <Grid item display="flex" flex={1} alignItems="center">
          <Grid container >
            <Grid item xs={12}>
              <Typography variant="h6">{props.user.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>+91 {props.user.contact}</Typography>
            </Grid>
            {
              props.user.gender === "Male" ?
                <Grid item xs={12}>
                  <img
                    alt="gender"
                    src={male}
                    style={{
                      height: 29,
                      width: 29,
                      marginTop: 5,
                      resizeMode: 'contain'
                    }}
                  />
                </Grid>
                :
                <Grid item xs={12}>
                  <img
                    alt="gender"
                    src={female}
                    style={{
                      height: 25,
                      width: 25,
                      marginTop: 5,
                      resizeMode: 'contain'
                    }}
                  />
                </Grid>
            }
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ProfileCard