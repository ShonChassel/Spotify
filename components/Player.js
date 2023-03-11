import { useEffect } from "react";
import SpotifyPlayer from 'react-spotify-web-playback';
import exenv from 'exenv';
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atoms/playerAtom";



function Player({ accessToken, trackUri }) {

    const [play, setPlay] = useRecoilState(playState);
    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);


    useEffect(() => {
        if (trackUri) {
            setPlay(true);
        }
    }, [trackUri]);

    console.log('trackUri', trackUri)
    if (!accessToken) return null;

    return (
        // <div></div>
        <SpotifyPlayer
            styles={{
                activeColor: "#fff",
                bgColor: "#181818",
                color: "#fff",
                loaderColor: "#fff",
                sliderColor: "#1cb954",
                trackArtistColor: "#ccc",
                trackNameColor: "#fff",
                height: "70px",
                sliderTrackColor: "#535353",
                sliderTrackBorderRadius: "4px",
                sliderHandleColor: "#fff",
                errorColor: "#fff",
            }}
            token={accessToken}
            showSaveIcon
            callback={(state) => {
                setPlay(state.isPlaying);
              }}
            play={play}
            uris={trackUri ? [trackUri] : []}
            magnifySliderOnHover={true}
            autoPlay={true}
        />

    )
}

export default Player