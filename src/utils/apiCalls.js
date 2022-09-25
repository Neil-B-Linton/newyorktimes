

export async function getTopStories(section) {
    const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=YUB09xwrCV2grcQuBoT36bRu9oKBTLNW`)
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        return data
};
