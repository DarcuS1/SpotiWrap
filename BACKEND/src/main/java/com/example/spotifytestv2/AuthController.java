package com.example.spotifytestv2;


import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.*;
import se.michaelthelin.spotify.SpotifyApi;
import se.michaelthelin.spotify.SpotifyHttpManager;
import se.michaelthelin.spotify.exceptions.SpotifyWebApiException;
import se.michaelthelin.spotify.model_objects.credentials.AuthorizationCodeCredentials;
import se.michaelthelin.spotify.model_objects.specification.Artist;
import se.michaelthelin.spotify.model_objects.specification.Paging;
import se.michaelthelin.spotify.model_objects.specification.Track;
import se.michaelthelin.spotify.requests.authorization.authorization_code.AuthorizationCodeRequest;
import se.michaelthelin.spotify.requests.authorization.authorization_code.AuthorizationCodeUriRequest;
import se.michaelthelin.spotify.requests.data.personalization.simplified.GetUsersTopArtistsRequest;
import se.michaelthelin.spotify.requests.data.personalization.simplified.GetUsersTopTracksRequest;

import java.io.IOException;
import java.net.URI;
import java.util.Arrays;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api")
public class AuthController {

    private static final URI redirectUri = SpotifyHttpManager.makeUri("http://localhost:8080/api/get-user-code");
    private String code = "";

    private static final SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setClientId("${clientID}")
            .setClientSecret("${clientSecret}")
            .setRedirectUri(redirectUri)
            .build();


    @GetMapping("/login")
    public void spotifyLogin(HttpServletResponse response) throws IOException {

        AuthorizationCodeUriRequest authorizationCodeUriRequest = spotifyApi.authorizationCodeUri()
                .scope("user-top-read, user-read-private, user-read-email")
                .show_dialog(true)
                .build();

        URI uri = authorizationCodeUriRequest.execute();

        response.sendRedirect(uri.toString());

    }


    @GetMapping("/get-user-code")
    public void getSpotifyUserCode(@RequestParam("code") String userCode, HttpServletResponse response) throws IOException {
        code = userCode;
        AuthorizationCodeRequest authorizationCodeRequest = spotifyApi.authorizationCode(code)
                .build();
        try {
            final AuthorizationCodeCredentials authorizationCodeCredentials = authorizationCodeRequest.execute();
            // Set access and refresh token for further "spotifyApi" object usage
            spotifyApi.setAccessToken(authorizationCodeCredentials.getAccessToken());
            spotifyApi.setRefreshToken(authorizationCodeCredentials.getRefreshToken());
            System.out.println("Expires in: " + authorizationCodeCredentials.getExpiresIn());
        } catch (IOException | SpotifyWebApiException | org.apache.hc.core5.http.ParseException e) {
            System.out.println("Error:" + e.getMessage());
        }
        response.sendRedirect("http://localhost:3000/select-data");
      //  response.sendRedirect("http://localhost:8080/api/user-top-tracks");
    }



    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/user-top-artists")
    public Artist[] getUserTopArtists(@RequestParam("code") String timePeriod) {
        final GetUsersTopArtistsRequest getUsersTopArtistsRequest = spotifyApi.getUsersTopArtists()
                .time_range(timePeriod)
                .limit(10)
                .offset(5)
                .build();
        try {
           
            final Paging<Artist> artistPaging = getUsersTopArtistsRequest.execute();
            // return top artists as JSON
            System.out.println("CEVA");
            return artistPaging.getItems();
        } catch (Exception e) {
            System.out.println("Something went wrong!\n" + Arrays.toString(e.getStackTrace()) + e.getCause());
        }
        System.out.println("NIMIC");
        return null;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/user-top-tracks")
    public Track[] getUserTopTracks(@RequestParam("code") String timePeriod) {
        final GetUsersTopTracksRequest getUsersTopTracksRequest = spotifyApi.getUsersTopTracks()
                .time_range(timePeriod)
                .limit(10)
                .offset(5)
                .build();
        try {
            final Paging<Track> tracksPaging = getUsersTopTracksRequest.execute();
            // return top tracks as JSON
            System.out.println("CEVA");
            return tracksPaging.getItems();
        } catch (Exception e) {
            System.out.println("Something went wrong!\n" + Arrays.toString(e.getStackTrace()) + e.getCause());
        }
        System.out.println("NIMIC");
        return null;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/user-top-albums")
    public Track[] getUserTopAlbums(@RequestParam("code") String timePeriod) {
        final GetUsersTopTracksRequest getUsersTopTracksRequest = spotifyApi.getUsersTopTracks()
                .time_range(timePeriod)
                .limit(10)
                .offset(5)
                .build();
        try {
            final Paging<Track> tracksPaging = getUsersTopTracksRequest.execute();
            // return top tracks as JSON
            System.out.println("CEVA");
            return tracksPaging.getItems();
        } catch (Exception e) {
            System.out.println("Something went wrong!\n" + Arrays.toString(e.getStackTrace()) + e.getCause());
        }
        System.out.println("NIMIC");
        return null;
    }
}
