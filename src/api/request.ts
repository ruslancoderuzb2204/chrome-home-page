import axios, { AxiosResponse } from 'axios';

interface SearchResultItem {
    title: string;
    link: string;
}

interface GoogleSearchResponse {
    items: SearchResultItem[];
}

const API_KEY = 'YOUR_API_KEY';
const SEARCH_ENGINE_ID = 'YOUR_SEARCH_ENGINE_ID';
const QUERY = 'your search query';

async function performGoogleSearch(): Promise<SearchResultItem[]> {
    try {
        const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${QUERY}`;
        const response: AxiosResponse<GoogleSearchResponse> = await axios.get(url);
        return response.data.items;
    } catch (error) {
        console.error('Error performing Google search:', error);
        return [];
    }
}

async function main() {
    const searchResults = await performGoogleSearch();
    searchResults.forEach((item, index) => {
        console.log(`${index + 1}. ${item.title}: ${item.link}`);
    });
}

main();
