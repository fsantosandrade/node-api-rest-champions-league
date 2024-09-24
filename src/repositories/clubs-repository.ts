import fs from "fs/promises"
import { ClubModel } from "../models/clubModel"

export const listAllClubs = async () => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8")
    const clubs: ClubModel = JSON.parse(data)

    return clubs
}

export const listClubById = async (id:number) => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8")
    const clubs: ClubModel[] = JSON.parse(data)

    return clubs.find(c => c.id === id)
}