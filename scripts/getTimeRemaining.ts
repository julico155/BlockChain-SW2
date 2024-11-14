import { ethers } from "hardhat";
import { Wallet } from "ethers";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();

async function main() {
    const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_URL);
    const wallet = new Wallet(process.env.PRIVATE_KEY!, provider);

    const seguroMedico = await ethers.getContractAt("SeguroMedico", process.env.CONTRACT_ADDRESS!, wallet);

    const id = 2; // ID del seguro a consultar
    const tiempoRestante = await seguroMedico.tiempoRestante(id);
    console.log(`Tiempo restante para el seguro con ID ${id}: ${tiempoRestante} segundos`);
}

main().catch((error) => {
    console.error("Error al consultar el tiempo restante del seguro:", error);
    process.exitCode = 1;
});
