// nezu_brawl/api_base.js
import axios from 'axios';
import dotenv from 'dotenv';

class BrawlStarsAPIBase {
    constructor() {
        /** 
         * Initialize the base class and load the API key.
         */
        dotenv.config(); // Load .env file
        this.apiKey = process.env.API_KEY; // Get API_KEY from .env
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
}

export default BrawlStarsAPIBase;
