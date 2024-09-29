// nezu_brawl/player.js
import BrawlStarsAPIBase from './api_base';
import {
    getPlayerBattlelogUrl,
    getPlayerInfoUrl,
    getPlayerRankingsUrl
} from './url';

class PlayerAPI extends BrawlStarsAPIBase {
    constructor(playerTag) {
        /** 
         * Initialize the PlayerAPI class with player tag.
         */
        super(); // Initialize the base class
        this.playerTag = playerTag; // Player tag
    }

    async getBattlelog() {
        /** 
         * Get player battle log. 
         */
        const url = getPlayerBattlelogUrl(this.playerTag);
        return await this._makeRequest(url);
    }

    async getInfo() {
        /** 
         * Get player information. 
         */
        const url = getPlayerInfoUrl(this.playerTag);
        return await this._makeRequest(url);
    }

    async getRankings(countryCode) {
        /** 
         * Get player rankings. 
         */
        const url = getPlayerRankingsUrl(countryCode);
        return await this._makeRequest(url);
    }
}

export default PlayerAPI;
