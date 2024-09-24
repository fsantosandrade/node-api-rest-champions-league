import { Request, Response } from "express"
import { deletePlayerService, getPlayersByIdService, getPlayersService, postPlayerService, updatePlayerService } from "../services/players-services"
import { noContent } from "../utils/http-helper"
import { StatisticsModel } from "../models/statisticsModel"

export const getPlayer = async (request: Request, response: Response) => {
    const httpResponse = await getPlayersService()
    response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (request: Request, response: Response) => {
    const id = Number(request.params.id)

    const httpResponse = await getPlayersByIdService(id)
    response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (request: Request, response: Response) => {
    const bodyValue = request.body
    const httpResponse = await postPlayerService(bodyValue)

    if(httpResponse){
        response.status(httpResponse.statusCode).json(httpResponse.body)
    }else {
        const res = await noContent()
        response.status(res.statusCode).json(res.body)
    }
}

export const deletePlayer = async (request: Request, response: Response) => {
    const id = Number(request.params.id)

    const httpResponse = await deletePlayerService(id)
    response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayer = async (request: Request, response: Response) => {
    const id = Number(request.params.id)
    const bodyValue: StatisticsModel = request.body

    const httpResponse = await updatePlayerService(id, bodyValue)
    response.status(httpResponse.statusCode).json(httpResponse.body)
}