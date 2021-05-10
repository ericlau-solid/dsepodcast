import {graphql, useStaticQuery} from "gatsby";

export const useBuzzsproutEpisodes = () => {
  const {allPodcastEpisodeDsePodcast} = useStaticQuery(
      graphql`
          query BuzzsproutEpisodes {
              allPodcastEpisodeDsePodcast(filter: {private: {eq: true}}, limit: 10) {
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
                      published_at(fromNow: false)
                  }
              }
          }

      `
  )
    return allPodcastEpisodeDsePodcast.nodes;
}