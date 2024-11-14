import { ethers } from "hardhat";
import { Wallet } from "ethers";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();

async function main() {
    const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_URL);
    const wallet = new Wallet(process.env.PRIVATE_KEY!, provider);

    const seguroMedico = await ethers.getContractAt("SeguroMedico", process.env.CONTRACT_ADDRESS!, wallet);

    const id = 2; // ID del seguro a renovar
    const duracion = 365 * 24 * 60 * 60; // 1 año en segundos
    const tx = await seguroMedico.renovarSeguro(id, duracion);
    await tx.wait();

    console.log(`Seguro renovado para el ID: ${id}`);
}

main().catch((error) => {
    console.error("Error al renovar el seguro:", error);
    process.exitCode = 1;
});