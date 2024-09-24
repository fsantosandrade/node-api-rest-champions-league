import { Request, Response } from "express"
import { getAllClubsService, getClubByIdService } from "../services/clubs-services"

export const getClubs = async (request: Request, response: Response) => {
    const httpResponse = await getAllClubsService()
    response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getClubById = async (request: Request, response: Response) => {
    const id = Number(request.params.id)
    const httpResponse = await getClubByIdService(id)
    response.status(httpResponse.statusCode).json(httpResponse.body)
}