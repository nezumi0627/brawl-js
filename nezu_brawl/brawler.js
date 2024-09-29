// nezu_brawl/brawler.js
import BrawlStarsAPIBase from './api_base';
import {
    getBrawlerInfoUrl,
    getBrawlerRankingsUrl,
    getBrawlersUrl
} from './url';

class BrawlerAPI extends BrawlStarsAPIBase {
    constructor(brawlerId) {
        /** 
         * Initialize the BrawlerAPI class with brawler ID.
         */
        super(); // Initialize the base class
        this.brawlerId = brawlerId; // Brawler ID
    }

    async getInfo() {
        /** 
         * Get information about a specific brawler.
         */
        const url = getBrawlerInfoUrl(this.brawlerId);
        return await this._makeRequest(url);
    }

    async getRankings(countryCode) {
        /** 
         * Get brawler rankings.
         */
        const url = getBrawlerRankingsUrl(countryCode, this.brawlerId);
        return await this._makeRequest(url);
    }

    async getAll() {
        /** 
         * Get list of available brawlers.
         */
        const url = getBrawlersUrl();
        return await this._makeRequest(url);
    }
}

export default BrawlerAPI;
