// nezu_brawl/event.js
import BrawlStarsAPIBase from './api_base';
import { getEventRotationUrl } from './url';

class EventAPI extends BrawlStarsAPIBase {
    async getRotation() {
        /** 
         * Get event rotation. 
         */
        const url = getEventRotationUrl();
        return await this._makeRequest(url);
    }
}

export default EventAPI;
