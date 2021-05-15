const path = require(`path`)
const fetch = require('node-fetch')

const getBuzzsproutTranscriptUrl = (episodeGuid) => (`https://feeds.buzzsprout.com/${process.env.PODCAST_ID}/${episodeGuid.split('-')[1]}/transcript`)

exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions
  const transcriptTemplate = path.resolve(`src/templates/Transcript.tsx`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const result = await graphql(`
    query loadPagesQuery ($limit: Int!) {
              allPodcastEpisodeDsePodcast(
                  filter: {private: {eq: false}}
                  limit: $limit
                  sort: {fields: published_at, order: DESC}
              ) {
                  nodes {
                      title
                      description
                      guid
                      season_number
                      episode_number
                      published_at(fromNow: false)
                  }
              }
    }
  `, { limit: 1000 })
  if (result.errors) {
    throw result.errors
  }
  // result.data.allPodcastEpisodeDsePodcast.nodes.map(async (episode) => {
  //   const url = getBuzzsproutTranscriptUrl(episode.guid);
  //   const response = await fetch(url);
  //   const transcript = await response.text()
  //
  //   await createPage({
  //     path: `/transcript/${episode.guid}`,
  //     component: transcriptTemplate,
  //     context: {
  //       ...episode, transcript
  //     }
  //   })
  // })

  let promises = result.data.allPodcastEpisodeDsePodcast.nodes.map(episode => {
    const url = getBuzzsproutTranscriptUrl(episode.guid)
    return fetch(url)
  })

  let promisesResolved = await Promise.all(promises)
  promises = promisesResolved.map(e => e.text())
  const episodeTranscripts = await Promise.all(promises)
  result.data.allPodcastEpisodeDsePodcast.nodes.map((episode, index) => {
    createPage({
          path: `/transcript/${episode.guid}`,
          component: transcriptTemplate,
          context: {
            ...episode, transcript: episodeTranscripts[index]
          }
        })
  });
}