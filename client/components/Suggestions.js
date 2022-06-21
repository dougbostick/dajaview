import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import auth from '../store/auth';

//highest average user rated media
const _HighestRated = (props) => {
  const { dbMedia } = props;
  if (!dbMedia.length) return null;

  const mediaRatings = dbMedia.map((media) => {
    return { ...media, averageRating: media.totalRating / media.numOfRatings };
  });

  mediaRatings.sort((a, b) => b.averageRating - a.averageRating);

  const threeHighest = mediaRatings.slice(0, 3);

  return (
    <div>
      The highest rated movies:
      <ul>
        {threeHighest.map((media) => {
          return (
            <li key={media.id} className="suggestionList">
              <Link to={`/${media.medium}/${media.apiId}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${media.poster_path}`}
                  className="suggestedPoster"
                ></img>
              </Link>
              {media.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

//highest rated media by the logged in user
const _OwnTopRated = (props) => {
  const { dbMedia, posts, auth } = props;
  if (!dbMedia.length) return null;
  const myRatings = posts.filter(
    (post) => post.rating && post.userId === auth.id
  );
  myRatings.sort((a, b) => b.rating - a.rating);
  const myRatedMedia = myRatings.map((rating) =>
    dbMedia.find((media) => media.id === rating.mediaId)
  );
  const threeHighest = myRatedMedia.slice(0, 3);
  return (
    <div>
      Your highest rated movies:
      <ul>
        {threeHighest.map((media) => {
          return (
            <li key={media.id} className="suggestionList">
              <Link to={`/${media.medium}/${media.apiId}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${media.poster_path}`}
                  className="suggestedPoster"
                ></img>
              </Link>
              {media.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

//most recently rated media
const _Trending = (props) => {
  const { dbMedia, posts } = props;
  if (!dbMedia.length) return null;
  const ratings = posts.filter((post) => post.rating);
  const ratedMedia = new Set();
  ratings.forEach((rating) =>
    ratedMedia.add(dbMedia.find((media) => media.id === rating.mediaId))
  );
  const ratedMediaArr = Array.from(ratedMedia);
  const trending = ratedMediaArr.slice(0, 3);
  return (
    <div>
      Trending movies:
      <ul>
        {trending.map((media) => {
          return (
            <li key={media.id} className="suggestionList">
              <Link to={`/${media.medium}/${media.apiId}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${media.poster_path}`}
                  className="suggestedPoster"
                ></img>
              </Link>
              {media.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const HighestRated = connect((state) => state)(_HighestRated);
export const OwnTopRated = connect((state) => state)(_OwnTopRated);
export const Trending = connect((state) => state)(_Trending);