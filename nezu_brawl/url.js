// nezu_brawl/url.js

const BASE_URL = "https://api.brawlstars.com/v1";

function getPlayerBattlelogUrl(playerTag) {
    /** 
     * Get the URL for player battle log. 
     */
    return `${BASE_URL}/players/${playerTag}/battlelog`;
}

function getPlayerInfoUrl(playerTag) {
    /** 
     * Get the URL for player information. 
     */
    return `${BASE_URL}/players/${playerTag}`;
}

function getClubMembersUrl(clubTag) {
    /** 
     * Get the URL for club members. 
     */
    return `${BASE_URL}/clubs/${clubTag}/members`;
}

function getClubInfoUrl(clubTag) {
    /** 
     * Get the URL for club information. 
     */
    return `${BASE_URL}/clubs/${clubTag}`;
}

function getClubRankingsUrl(countryCode) {
    /** 
     * Get the URL for club rankings. 
     */
    return `${BASE_URL}/rankings/${countryCode}/clubs`;
}

function getBrawlerRankingsUrl(countryCode, brawlerId) {
    /** 
     * Get the URL for brawler rankings. 
     */
    return `${BASE_URL}/rankings/${countryCode}/brawlers/${brawlerId}`;
}

function getPlayerRankingsUrl(countryCode) {
    /** 
     * Get the URL for player rankings. 
     */
    return `${BASE_URL}/rankings/${countryCode}/players`;
}

function getBrawlersUrl() {
    /** 
     * Get the URL for available brawlers. 
     */
    return `${BASE_URL}/brawlers`;
}

function getBrawlerInfoUrl(brawlerId) {
    /** 
     * Get the URL for specific brawler information. 
     */
    return `${BASE_URL}/brawlers/${brawlerId}`;
}

function getEventRotationUrl() {
    /** 
     * Get the URL for event rotation. 
     */
    return `${BASE_URL}/events/rotation`;
}

export {
    getBrawlerInfoUrl, getBrawlerRankingsUrl, getBrawlersUrl, getClubInfoUrl, getClubMembersUrl, getClubRankingsUrl, getEventRotationUrl, getPlayerBattlelogUrl,
    getPlayerInfoUrl, getPlayerRankingsUrl
};

