const calculateTranscriptUrls = (buzzsproutEpisodeGuid) => {
    const episodeId = buzzsproutEpisodeGuid.split('-')[1]

    return {
        buzzsproutFeedEpisodeTranscriptUrl: `https://feeds.buzzsprout.com/${process.env.PODCAST_ID}/${episodeId}/transcript`,
        websiteLink: `/episode/${buzzsproutEpisodeGuid}`
    }
}

export default calculateTranscriptUrls