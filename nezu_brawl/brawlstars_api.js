// nezu_brawl/brawlstars_api.js
import axios from 'axios';
import dotenv from 'dotenv';
import {
    getBrawlerInfoUrl,
    getBrawlerRankingsUrl,
    getBrawlersUrl,
    getClubInfoUrl,
    getClubMembersUrl,
    getClubRankingsUrl,
    getEventRotationUrl,
    getPlayerBattlelogUrl,
    getPlayerInfoUrl,
    getPlayerRankingsUrl,
} from './url';

class BrawlStarsAPI {
    constructor(playerTag, clubTag, countryCode, brawlerId) {
        /**
         * Initialize the BrawlStarsAPI class with necessary parameters.
         * 
         * @param {string} playerTag - Player tag for Brawl Stars
         * @param {string} clubTag - Club tag for Brawl Stars
         * @param {string} countryCode - Country code for rankings
         * @param {string} brawlerId - Brawler ID for detailed info
         */
        dotenv.config(); // Load .env file
        this.apiKey = process.env.API_KEY; // Get API_KEY from .env
        this.playerTag = playerTag; // Player tag
        this.clubTag = clubTag; // Club tag
        this.countryCode = countryCode; // Country code
        this.brawlerId = brawlerId; // Brawler ID
    }

    _getHeaders() {
        /**
         * Create headers for the API request.
         */
        return { Authorization: `Bearer ${this.apiKey}` };
    }

    async _makeRequest(url) {
        /**
         * Make a GET request to the given URL and handle errors.
         */
        try {
            const response = await axios.get(url, { headers: this._getHeaders() });
            return response.data; // Return the response data
        } catch (error) {
            return { error: error.message }; // Return error message as an object
        }
    }

    async getPlayerBattlelog() {
        /** Get player battle log. */
        const url = getPlayerBattlelogUrl(this.playerTag);
        return await this._makeRequest(url);
    }

    async getPlayerInfo() {
        /** Get player information. */
        const url = getPlayerInfoUrl(this.playerTag);
        return await this._makeRequest(url);
    }

    async getClubMembers() {
        /** Get club members. */
        const url = getClubMembersUrl(this.clubTag);
        return await this._makeRequest(url);
    }

    async getClubInfo() {
        /** Get club information. */
        const url = getClubInfoUrl(this.clubTag);
        return await this._makeRequest(url);
    }

    async getClubRankings() {
        /** Get club rankings. */
        const url = getClubRankingsUrl(this.countryCode);
        return await this._makeRequest(url);
    }

    async getBrawlerRankings() {
        /** Get brawler rankings. */
        const url = getBrawlerRankingsUrl(this.countryCode, this.brawlerId);
        return await this._makeRequest(url);
    }

    async getPlayerRankings() {
        /** Get player rankings. */
        const url = getPlayerRankingsUrl(this.countryCode);
        return await this._makeRequest(url);
    }

    async getBrawlers() {
        /** Get list of available brawlers. */
        const url = getBrawlersUrl();
        return await this._makeRequest(url);
    }

    async getBrawlerInfo() {
        /** Get information about a specific brawler. */
        const url = getBrawlerInfoUrl(this.brawlerId);
        return await this._makeRequest(url);
    }

    async getEventRotation() {
        /** Get event rotation. */
        const url = getEventRotationUrl();
        return await this._makeRequest(url);
    }
}

export default BrawlStarsAPI;
