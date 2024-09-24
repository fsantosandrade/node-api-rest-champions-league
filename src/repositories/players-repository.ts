import { players } from "../data/players"
import { PlayerModel } from "../models/playerModel"
import { StatisticsModel } from "../models/statisticsModel"

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return players
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return players.find(player => player.id === id)
}

export const addNewPlayer = async (newPlayer: PlayerModel) => {
    players.push(newPlayer)
}

export const deletePlayer = async (id: number) => {
    const index = players.findIndex(p => p.id === id)

    if(index !== -1){
        players.splice(index, 1)
        return true
    }else {
        return false
    }
}

export const updatePlayer = async (id: number, newStatistics: StatisticsModel):Promise<PlayerModel> => {
    const index = players.findIndex(p => p.id === id)

    if(index !== -1){
        players[index].statistics = newStatistics
    }

    return players[index]
}