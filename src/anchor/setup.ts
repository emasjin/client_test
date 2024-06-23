import idl from "./idl.json"
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react"
import {
  Program,
  Idl,
  AnchorProvider,
  setProvider,
} from "@coral-xyz/anchor"
import {
  Connection,
  PublicKey,
  SystemProgram,
  clusterApiUrl,
  //Keypair,
} from "@solana/web3.js";


const wallet = useAnchorWallet()

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
const provider = new AnchorProvider(connection, wallet as any, {})
setProvider(provider)

const programId = new PublicKey("DokQ9xJAEptRSCfHjnogR2fhwzjo9F3W96EygyeHKbgH")
export const program = new Program(idl as Idl, programId)