import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { Wallet } from "zksync-ethers";
import { ethers } from "ethers";
import { config as dotenvConfig } from "dotenv";
import hre from "hardhat";

dotenvConfig();

async function main() {
    console.log("Iniciando el despliegue...");

    const wallet = new Wallet(process.env.PRIVATE_KEY!);

    const deployer = new Deployer(hre, wallet);
    const artifact = await deployer.loadArtifact("SeguroMedico");

    const deploymentFee = await deployer.estimateDeployFee(artifact, []);
    console.log(`Costo de despliegue: ${ethers.formatEther(deploymentFee)} ETH`);

    const contract = await deployer.deploy(artifact, []);

    await contract.waitForDeployment();
    console.log(`Contrato desplegado en: ${await contract.getAddress()}`);
}


main().catch((error) => {
    console.error("Error en el despliegue:", error);
    process.exitCode = 1;
});
