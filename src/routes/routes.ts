import { Router } from "express";
import * as playerController from "../controllers/players-controller";
import * as clubsController from "../controllers/clubs-controller";

const router = Router()

//Solicitar players
router.get("/players", playerController.getPlayer)
//Cadastrando player
router.post("/players", playerController.postPlayer)
//Escolhendo player pelo id
router.get("/players/:id", playerController.getPlayerById)
//Deletando player
router.delete("/players/:id", playerController.deletePlayer)
//Atualizando os dados parcialmente
router.patch("/players/:id", playerController.updatePlayer)

//Listar clubs
router.get("/clubs", clubsController.getClubs)
//Escolhendo player pelo id
router.get("/clubs/:id", clubsController.getClubById)

export default router