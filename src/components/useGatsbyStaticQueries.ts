import {graphql, useStaticQuery} from "gatsby";

export const useBuzzsproutEpisodes = () => {
  const {allPodcastEpisodeDsePodcast} = useStaticQuery(
      graphql`
          query BuzzsproutEpisodes {
              allPodcastEpisodeDsePodcast(
                  filter: {private: {eq: false}}
                  limit: 10
                  sort: {fields: published_at, order: DESC}
              ) {
                  nodes {
                      title
                      description
                      audio_url
                      artist
                      duration
                      episode_number
                      season_number
                      summary
                      tags
                      total_plays
                      id
                      guid
                      published_at(fromNow: false)
                  }
              }
          }

      `
  )
    const result = allPodcastEpisodeDsePodcast.nodes;
    return result;

}