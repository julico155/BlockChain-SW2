import { ethers } from "hardhat";
import { Wallet } from "ethers";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();

async function main() {
    const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_URL);
    const wallet = new Wallet(process.env.PRIVATE_KEY!, provider);

    const seguroMedico = await ethers.getContractAt("SeguroMedico",process.env.CONTRACT_ADDRESS!, wallet);

    const id = 1; // ID del seguro a verificar
    const activo = await seguroMedico.esSeguroActivo(id);
    console.log(`El seguro con ID: ${id} está activo: ${activo}`);
}

main().catch((error) => {
    console.error("Error al verificar el seguro:", error);
    process.exitCode = 1;
});
