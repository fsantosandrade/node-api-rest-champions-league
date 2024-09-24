import { error } from "console"
import { PlayerModel } from "../models/playerModel"
import { StatisticsModel } from "../models/statisticsModel"
import * as playerRepository from "../repositories/players-repository"
import { badRequest, created, noContent, notFound, ok } from "../utils/http-helper"

export const getPlayersService = async () => {
    const data = await playerRepository.findAllPlayers()
    let response = null

    if(data) {
        response = await ok(data)
    }else {
        response = await noContent()
    }

    return response
}

export const getPlayersByIdService = async (id: number) => {
    const data = await playerRepository.findPlayerById(id)
    let response = null

    if(data) {
        response = await ok(data)
    }else {
        response = await noContent()
    }

    return response
}

export const postPlayerService = async (newPlayer: PlayerModel) => {
    let response = null

    if(Object.keys(newPlayer).length !== 0) {
        await playerRepository.addNewPlayer(newPlayer)
        response = created(newPlayer)
    }else {
        response = await badRequest(console.error("bad request"));
    }

    return response
}

export const deletePlayerService = async (id: number) => {
    const data = await playerRepository.deletePlayer(id)
    let response = null

    if(data) {
        response = await noContent()
    }else {
        response = await notFound(error);
    }

    return response
}

export const updatePlayerService = async (id: number, newStatistics: StatisticsModel) => {
    const data = await playerRepository.updatePlayer(id, newStatistics)
    let response

    if(Object.keys(data).length !== 0) {
        response = await ok(data)
    }else {
        response = await notFound(error)
    }

    return response
}