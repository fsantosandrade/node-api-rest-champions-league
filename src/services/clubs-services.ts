import { listAllClubs, listClubById } from "../repositories/clubs-repository"
import { noContent, ok } from "../utils/http-helper"

export const getAllClubsService = async () => {
    const data = await listAllClubs()
    let response = null

    if(data) {
        response = await ok(data)
    }else {
        response = await noContent()
    }

    return response
}

export const getClubByIdService = async (id: number) => {
    const data = await listClubById(id)
    let response = null

    if(data) {
        response = await ok(data)
    }else {
        response = await noContent()
    }

    return response 
}