// nezu_brawl/club.js
import { 
    getClubInfoUrl, 
    getClubMembersUrl, 
    getClubRankingsUrl 
} from './url';
import BrawlStarsAPIBase from './api_base';

class ClubAPI extends BrawlStarsAPIBase {
    constructor(clubTag) {
        /** 
         * Initialize the ClubAPI class with club tag.
         */
        super(); // Initialize the base class
        this.clubTag = clubTag; // Club tag
    }

    async getInfo() {
        /** 
         * Get club information. 
         */
        const url = getClubInfoUrl(this.clubTag);
        return await this._makeRequest(url);
    }

    async getMembers() {
        /** 
         * Get club members. 
         */
        const url = getClubMembersUrl(this.clubTag);
        return await this._makeRequest(url);
    }

    async getRankings(countryCode) {
        /** 
         * Get club rankings. 
         */
        const url = getClubRankingsUrl(countryCode);
        return await this._makeRequest(url);
    }
}

export default ClubAPI;
