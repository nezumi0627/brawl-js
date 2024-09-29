import axios from 'axios';
import 'dotenv/config'; // dotenvをインポート
import BrawlStarsAPIBase from './nezu_brawl/api_base.js'; // デフォルトエクスポートをインポート
import { getPlayerInfoUrl } from './nezu_brawl/url.js'; // 拡張子を追加

// Player tag
const PLAYER_TAG = "%23PQ0J8VJUY"; // Player tag with %23

async function getBrawlInfo(playerTag) {
    try {
        // Create an instance of BrawlStarsAPIBase
        const apiInstance = new BrawlStarsAPIBase(); // インスタンスを作成

        // Get headers for the API request
        const headers = apiInstance._getHeaders(); // インスタンスメソッドを呼び出す

        // Get player information
        const playerInfoUrl = getPlayerInfoUrl(playerTag);
        const playerInfoResponse = await axios.get(playerInfoUrl, { headers });

        // Get the JSON response
        const playerInfo = playerInfoResponse.data;
        console.log(playerInfo);

        // Print player information in a formatted way
        console.log(`${playerInfo.name} (${playerInfo.tag})`);
        console.log(`総トロフィー: ${playerInfo.trophies}`);
        console.log(`最高トロフィー: ${playerInfo.highestTrophies}`);
        console.log(`expLevel: ${playerInfo.expLevel}`);
        console.log(`expPoints: ${playerInfo.expPoints}`);
        console.log(`3v3勝利数: ${playerInfo['3vs3Victories']}`);
        console.log(`solo勝利数: ${playerInfo.soloVictories}`);
        console.log(`duo勝利数: ${playerInfo.duoVictories}`);
        console.log("\nclub情報:");
        console.log(`${playerInfo.club.name} (${playerInfo.club.tag})`);

    } catch (error) {
        console.error(`An error occurred: ${error}`);
    }
}

function main() {
    getBrawlInfo(PLAYER_TAG);
}

main();
