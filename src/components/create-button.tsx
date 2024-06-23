import * as anchor from "@coral-xyz/anchor";
import { useState } from "react";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { program } from "../anchor/setup";
import idl from "../anchor/idl.json";
const { SystemProgram, PublicKey } = anchor.web3

export default function CreatePoolButton() {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    if (!publicKey) return;




    setIsLoading(true);
    const initTokenAmount = new anchor.BN(10000000000);

    let unique_id_pubkey = anchor.web3.Keypair.generate().publicKey;

    const wallet_pubkey = new anchor.web3.PublicKey(
      "HfJkVMi93y53z4NCwuJvoiGpnB5k8RpVCjzrMUvoR4pz"
    );
    const [mts_pool_account, pool_pda_bump] =
      await PublicKey.findProgramAddressSync(
        [unique_id_pubkey.toBuffer()],
        program.programId,
      );
    const [layer_one_pda] = await PublicKey.findProgramAddressSync(
      [Buffer.from("Layer"), Buffer.from("00001"), mts_pool_account.toBuffer()],
      program.programId,
    );
    const mint_token = new anchor.web3.PublicKey(
      "F6EqTeQ3mEmRu87LBrGqsHKiMbkeUnTER29e1VNZDhBc"
    );

    // New pool token account.// New pool token account.
    const [pool_tokenaccount_pda] = await PublicKey.findProgramAddressSync(
      [Buffer.from("zmts-pool"), mts_pool_account.toBuffer()],
      program.programId,
    );

    // The deposit token account of creator
    const creator_token_account = new anchor.web3.PublicKey(
      "9otwDWtnnbY7NPsWuoWQakqJRNUxVsEE23mJKpCSpNVo"
    );

    // permit tokens
    const permit_tokens = new anchor.web3.PublicKey(
      "EAcWyF4n3pgZ5efYW2Hm4rKTvA2p14tyGMoQgZvtmF7i"
    );

    const zcontext = {
      creator: wallet_pubkey,
      mtsPool: mts_pool_account,
      layerOne: layer_one_pda,
      mintToken: mint_token,
      poolTokenAccount: pool_tokenaccount_pda,
      creatorDepositTokenAccount: creator_token_account,
      permitTokens: permit_tokens,
      tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
    };
    try {
      // Create a transaction to invoke the create mts pool function
      const transaction = await program.methods
        .createMtsPool(initTokenAmount, unique_id_pubkey)
        .accounts(zcontext) // This takes no arguments so we don't need to pass anything
        .transaction();

        console.log("Your transaction signature", transaction);

      const transactionSignature = await sendTransaction(
        transaction,
        connection,
      );

      console.log(
        `View on explorer: https://solana.fm/tx/${transactionSignature}?cluster=devnet-alpha`,
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button className="w-24" onClick={onClick} disabled={!publicKey}>
      {isLoading ? "Loading" : "Create Pool"}

    </button>
  );
}