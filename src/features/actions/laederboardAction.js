"use server"

import { getLeaderboard } from "../leaderboard/getLeaderboard"

export async function fetchLeaderboard() {
    const res = await getLeaderboard();
    return res;
}