import {
  Grid,
  Typography,
  Input,
  TextField,
  InputAdornment,
  Stack,
  Button,
  Paper,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventDetailsCard from "../../Components/EventDetailsCard/EventDetailsCard";
import JoinedPlayerCard from "../../Components/JoinedPlayerCard/JoinedPlayerCard";
import OrganizedEventCard from "../../Components/OrganizedEventCard/OrganizedEventCard";
import PlayerCard from "../../Components/PlayerCard/playerCard";
import api from "../../config/api";
import { useSelector } from "react-redux";
import EventCard from "../../Components/EventCard/EventCard";
import loadingGif from '../../images/loading.gif'
import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";
import CancelEventModal from "../../Components/CancelEventModal/CancelEventModal";
import moment from "moment";
import { ToastContainer } from "react-toastify";

function EventDetails() {
  const match = useParams();
  const [eventDetails, setEventDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);
  const [bplayers, setBPlayers] = useState([]);
  const [cplayers, setCPlayers] = useState([]);
  const [isOrganiser, setIsOrganiser] = useState(false);
  const [organiserDetails, setorganiserDetails] = useState({})
  const [cancelEvent, setCancelEvent] = useState(false)
  const [shareUrl, setShareUrl] = useState(window.location.href)
  const user = useSelector((state) => state.player.user);
  const getEventDetails = () => {
    setLoading(true);
    setIsOrganiser(false);
    axios
      .get(`${api}/event/${match.id}`)
      .then((res) => {
        console.log(res);
        setEventDetails(res.data.event);
        console.log(res.data.event)
        if (user._id && res.data.event.organiserId === user._id) {
          setIsOrganiser(true);
        }
        setPlayers(res.data.players);
        setBPlayers(res.data.backedOutPlayers)
        setorganiserDetails(res.data.organiserDetails)
        setCPlayers(res.data.rejectedPlayers)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const updateOnPlayerRemoval = (index, playerId) => {
    var event = { ...eventDetails };
    var rejects = [];
    if (event.rejectedPlayersId) {
      rejects = [...event.rejectedPlayersId];
    }
    rejects.push(playerId);
    event.rem_players = event.rem_players + 1;
    event.rejectedPlayersId = rejects;
    console.log(event);
    setEventDetails(event);
    var allPlayers = [...players];
    var allCplayers = [...cplayers];
    allCplayers.push(players[index]);
    allPlayers.splice(index, 1);
    setPlayers(allPlayers);
    setCPlayers(allCplayers);
  };

  const closeCancel = () => {
    setCancelEvent(false);
  };

  const openCancelModal = () => {
    setCancelEvent(true);
  };

  useEffect(() => {
    getEventDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container paddingLeft="15px" paddingRight="15px" paddingBottom="15px" spacing={2}>
      {
        !loading ?
          <Grid item xs={12} sm={8} md={9.5} order={{ xs: 2, sm: 1 }}>
            <CancelEventModal handleClose={closeCancel} open={cancelEvent} updateEvent={getEventDetails} event={eventDetails} />
            <Grid container>
              <Paper
                elevation={0}
                style={{
                  marginTop: 15,
                  width: "100%",
                  overflow: "auto",
                  borderBottomWidth: 0,
                }}
              >
                {
                  !loading && ((eventDetails.joinedPlayers.includes(user._id) || isOrganiser) ? <EventDetailsCard item={eventDetails} /> :
                    <EventCard item={eventDetails} index={0} onPressBook={getEventDetails} />
                  )
                }
                {/* <EventCard item={eventDetails} index={0} onPressBook={getEventDetails} />
            <EventDetailsCard item={eventDetails} /> */}
                {/* <Typography style={{ marginTop: 5 }} >Organiser Contact : +91 {eventDetails.organiserContact}</Typography> */}
              </Paper>
            </Grid>
            <ToastContainer />
            {
              eventDetails.eventStatus === "Cancelled" &&
              <Grid container marginTop="15px">
                <Grid item sm={12}>
                  <Typography style={{ fontWeight: 'bold' }}>This Event has been Cancelled</Typography>
                </Grid>
                <Grid item sm={12}>
                  <Typography>{eventDetails.cancellationReason}</Typography>
                </Grid>
                <Typography variant="caption">
                  ~ {moment(eventDetails.cancelledAt).format("DD MMM   hh:mm a")}
                </Typography>
              </Grid>
            }
            <Grid container spacing={1} marginTop="5px">
              <Grid item>
                <WhatsappShareButton
                  url={shareUrl}
                  title={`Join ${eventDetails.sport} event to confirm your spot.`}
                  separator="   "
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </Grid>
              <Grid item>
                <TwitterShareButton
                  url={shareUrl}
                  title={`Join ${eventDetails.sport} event to confirm your spot.`}
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </Grid>
              <Grid item>
                <FacebookShareButton
                  url={shareUrl}
                  title={`Join ${eventDetails.sport} event to confirm your spot.`}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </Grid>
              <Grid item>
                <TelegramShareButton url={shareUrl}
                  title={`Join ${eventDetails.sport} event to confirm your spot.`}
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
              </Grid>
            </Grid>
            <Grid container>
              <Typography variant="h6" style={{ marginTop: 5 }} >Organiser</Typography>
              <JoinedPlayerCard
                eventId={match.id}
                event={eventDetails}
                item={organiserDetails}
                index={0}
                reject={false}
                backoutPlayer={true}
                organiser={false}
                updateOnPlayerRemoval={updateOnPlayerRemoval}
              />
              {
                isOrganiser && eventDetails.eventStatus !== "Cancelled" && <Grid item marginTop="7.5px" sm={12}>
                  <Button onClick={openCancelModal} variant="contained" size="small">Cancel Event</Button>
                </Grid>
              }
            </Grid>
            <Grid container>
              <Grid item marginTop="9px">
                <Typography variant="h6">Joined Players</Typography>
              </Grid>
            </Grid>
            <Grid container>
              {players.map((player, index) => (
                <JoinedPlayerCard
                  eventId={match.id}
                  event={eventDetails}
                  item={player}
                  index={index}
                  reject={false}
                  backoutPlayer={false}
                  organiser={isOrganiser}
                  updateOnPlayerRemoval={updateOnPlayerRemoval}
                />
              ))}
            </Grid>
            {
              isOrganiser && bplayers.length > 0 &&
              <>
                <Grid container>
                  <Grid item marginTop="9px">
                    <Typography variant="h6">Backed Out Players</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  {bplayers.map((player, index) => (
                    <JoinedPlayerCard
                      eventId={match.id}
                      item={player}
                      index={index}
                      backoutPlayer={true}
                      event={eventDetails}
                      reject={false}
                      organiser={isOrganiser}
                      updateOnPlayerRemoval={updateOnPlayerRemoval}
                    />
                  ))}
                </Grid>
              </>
            }
            {
              isOrganiser && cplayers.length > 0 && <>
                <Grid container>
                  <Grid item marginTop="9px">
                    <Typography variant="h6">Rejected Players</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  {cplayers.map((player, index) => (
                    <JoinedPlayerCard
                      eventId={match.id}
                      item={player}
                      index={index}
                      reject={true}
                      backoutPlayer={false}
                      event={eventDetails}
                      organiser={isOrganiser}
                      updateOnPlayerRemoval={updateOnPlayerRemoval}
                    />
                  ))}
                </Grid></>
            }
          </Grid>
          :
          <Grid item xs={12} alignItems="center" justifyContent="center" textAlign="center" sm={8} md={9.5} order={{ xs: 2, sm: 1 }}>
            <img src={loadingGif} alt="Loading" />
            <Typography>Loading</Typography>
          </Grid>
      }
      <Grid
        marginTop="15px"
        item
        xs={12}
        sm={4}
        md={2.5}
        order={{ xs: 1, sm: 2 }}
      >
        <PlayerCard />
      </Grid>
    </Grid >
  );
}

export default EventDetails;
