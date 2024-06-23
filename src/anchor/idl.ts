export type MtsPool = {
    "version": "0.1.0",
    "name": "mts_pool",
    "instructions": [
      {
        "name": "initialize",
        "accounts": [
          {
            "name": "initializer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "permitTokens",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "token",
            "type": "publicKey"
          },
          {
            "name": "feeAccount",
            "type": "publicKey"
          },
          {
            "name": "priceFeedId",
            "type": "publicKey"
          }
        ]
      },
      {
        "name": "addPermitToken",
        "accounts": [
          {
            "name": "initializer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "permitTokens",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "token",
            "type": "publicKey"
          },
          {
            "name": "feeAccount",
            "type": "publicKey"
          },
          {
            "name": "priceFeedId",
            "type": "publicKey"
          }
        ]
      },
      {
        "name": "delPermitToken",
        "accounts": [
          {
            "name": "initializer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "permitTokens",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "token",
            "type": "publicKey"
          }
        ]
      },
      {
        "name": "createMtsPool",
        "accounts": [
          {
            "name": "creator",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mtsPool",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "layerOne",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "mintToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "poolTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "creatorDepositTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "permitTokens",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "ivInitAmt",
            "type": "u64"
          },
          {
            "name": "uniqueId",
            "type": "publicKey"
          }
        ]
      },
      {
        "name": "initMtsPool",
        "accounts": [
          {
            "name": "creator",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mtsPool",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "layerOne",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "layerUserPda",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "poolTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "creatorDepositTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "permitTokens",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "priceFeed",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "ivInitAmt",
            "type": "u64"
          },
          {
            "name": "isPoolData",
            "type": {
              "defined": "MTSPoolData"
            }
          },
          {
            "name": "isOtherParas",
            "type": {
              "defined": "PoolInitParas"
            }
          }
        ]
      },
      {
        "name": "createNextLayer",
        "accounts": [
          {
            "name": "creator",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "lastLayer",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "nextLayer",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "mtsPool",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "permitTokens",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "priceFeed",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "uniqueId",
            "type": "publicKey"
          },
          {
            "name": "currentPrice",
            "type": "u64"
          }
        ]
      },
      {
        "name": "joinMtspool",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mtsPool",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "layerUserPda",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "mintToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "depositTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "poolTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "layerAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "permitTokens",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "priceFeed",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "ivJoinAmt",
            "type": "u64"
          },
          {
            "name": "uniqueId",
            "type": "publicKey"
          },
          {
            "name": "joinPrice",
            "type": "u64"
          }
        ]
      },
      {
        "name": "redeemToken",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mtsPool",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "layerUserPda",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "mintToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "poolTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "feeTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "layerAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "changeMtspoolState",
        "accounts": [
          {
            "name": "mtsPool",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "permitTokens",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "priceFeed",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "ivState",
            "type": {
              "defined": "PoolState"
            }
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "permitTokens",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "initializer",
              "type": "publicKey"
            },
            {
              "name": "ptokens",
              "type": {
                "vec": {
                  "defined": "PermitTokenInfo"
                }
              }
            },
            {
              "name": "pools",
              "type": {
                "vec": {
                  "defined": "PoolInfo"
                }
              }
            }
          ]
        }
      },
      {
        "name": "mtsLayerUserData",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "userAccount",
              "type": "publicKey"
            },
            {
              "name": "index",
              "type": "u32"
            },
            {
              "name": "depositAccount",
              "type": "publicKey"
            },
            {
              "name": "joinAmount",
              "type": "u64"
            },
            {
              "name": "inPrice",
              "type": "u64"
            },
            {
              "name": "joinTime",
              "type": "i64"
            },
            {
              "name": "settledCostAmt",
              "type": "u64"
            },
            {
              "name": "allocedProfitAmt",
              "type": "u64"
            },
            {
              "name": "isRedeemed",
              "type": "bool"
            },
            {
              "name": "redeemTime",
              "type": "i64"
            }
          ]
        }
      },
      {
        "name": "mtsPoolLayerAccount",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "layerNo",
              "type": "u8"
            },
            {
              "name": "startPrice",
              "type": "u64"
            },
            {
              "name": "layerVol",
              "type": "u64"
            },
            {
              "name": "curlAmt",
              "type": "u64"
            },
            {
              "name": "totalCost",
              "type": "u64"
            },
            {
              "name": "layerStatus",
              "type": "u8"
            },
            {
              "name": "userAcctNumber",
              "type": "u32"
            },
            {
              "name": "lastUserPda",
              "type": "publicKey"
            }
          ]
        }
      },
      {
        "name": "mtsPoolData",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "uniqueId",
              "type": "publicKey"
            },
            {
              "name": "poolPdaBump",
              "type": "u8"
            },
            {
              "name": "creatorAccount",
              "type": "publicKey"
            },
            {
              "name": "mintToken",
              "type": "publicKey"
            },
            {
              "name": "tokenAccount",
              "type": "publicKey"
            },
            {
              "name": "initAmt",
              "type": "u64"
            },
            {
              "name": "fallPect",
              "type": "u8"
            },
            {
              "name": "multiple",
              "type": "u32"
            },
            {
              "name": "addUnit",
              "type": "u64"
            },
            {
              "name": "goalPrice",
              "type": "u64"
            },
            {
              "name": "goalProfRat",
              "type": "u8"
            },
            {
              "name": "profSharePect",
              "type": "u8"
            },
            {
              "name": "poolStatus",
              "type": {
                "defined": "PoolState"
              }
            },
            {
              "name": "poolFeeAccount",
              "type": "publicKey"
            },
            {
              "name": "layerPdas",
              "type": {
                "vec": {
                  "defined": "MTSPoolLayerPDAs"
                }
              }
            },
            {
              "name": "maxLayerUserNo",
              "type": "u8"
            },
            {
              "name": "maxLayers",
              "type": "u8"
            },
            {
              "name": "tokenAmountSum",
              "type": "u64"
            },
            {
              "name": "totalCost",
              "type": "u64"
            },
            {
              "name": "settlePrice",
              "type": "u64"
            },
            {
              "name": "settleTime",
              "type": "i64"
            },
            {
              "name": "totalProfit",
              "type": "u64"
            },
            {
              "name": "creteTime",
              "type": "i64"
            }
          ]
        }
      }
    ],
    "types": [
      {
        "name": "PermitTokenInfo",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "ptoken",
              "type": "publicKey"
            },
            {
              "name": "feeAccount",
              "type": "publicKey"
            },
            {
              "name": "priceFeedId",
              "type": "publicKey"
            }
          ]
        }
      },
      {
        "name": "PoolInfo",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "poolPubkey",
              "type": "publicKey"
            },
            {
              "name": "poolId",
              "type": "u32"
            }
          ]
        }
      },
      {
        "name": "MTSPoolLayerPDAs",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "layerNo",
              "type": "u8"
            },
            {
              "name": "layerPda",
              "type": "publicKey"
            }
          ]
        }
      },
      {
        "name": "PoolInitParas",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "layeroneVol",
              "type": "u64"
            },
            {
              "name": "inPrice",
              "type": "u64"
            }
          ]
        }
      },
      {
        "name": "PoolState",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "Investing"
            },
            {
              "name": "StopedProfit"
            },
            {
              "name": "Settled"
            }
          ]
        }
      },
      {
        "name": "LayerState",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "Opening"
            },
            {
              "name": "Pending"
            }
          ]
        }
      }
    ],
    "errors": [
      {
        "code": 6000,
        "name": "MintTokenExist",
        "msg": "Permited Mint Token for MTS pool already exist!"
      },
      {
        "code": 6001,
        "name": "PermitTokenExceedLargestNumber",
        "msg": "Permit token exceeded the largest permit token number(318)!"
      },
      {
        "code": 6002,
        "name": "MintTokenNotExist",
        "msg": "Cancellation Mint Token not exist!"
      },
      {
        "code": 6003,
        "name": "MinTokenNotPermitedForMTSPool",
        "msg": "Imported Mint Token does't permited for MTS pool!"
      },
      {
        "code": 6004,
        "name": "InitAmtCantbezero",
        "msg": "Initial amount cannot be zero!"
      },
      {
        "code": 6005,
        "name": "LayerVolCantbezero",
        "msg": "Layre amount volume cannot be zero!"
      },
      {
        "code": 6006,
        "name": "InPriceCantbezero",
        "msg": "Importing price cannot be zero!"
      },
      {
        "code": 6007,
        "name": "InintAmtNotMlutiplesOfUnit",
        "msg": "Initial amount are not multiples of add uinit!"
      },
      {
        "code": 6008,
        "name": "AddUnitIsZero",
        "msg": "Add unit should not equal zero when initial MTS pool!"
      },
      {
        "code": 6009,
        "name": "FallPectInvalid",
        "msg": "Fall percent value should between 0 and 100"
      },
      {
        "code": 6010,
        "name": "GoalSetClash",
        "msg": "Either goal_price or goal_prof_rat should exist value"
      },
      {
        "code": 6011,
        "name": "InPriceInvalid",
        "msg": "The importing price is invalid!"
      },
      {
        "code": 6012,
        "name": "PriceFeedErr",
        "msg": "The price feed account is invalid!"
      },
      {
        "code": 6013,
        "name": "LastlayerError",
        "msg": "Importing last layer acocunt is not the last layer account in the pool!"
      },
      {
        "code": 6014,
        "name": "LastlayerNotPending",
        "msg": "Last layer acocunt is not appending state, cant create next layer!"
      },
      {
        "code": 6015,
        "name": "PriceGTStartprice",
        "msg": "Current price higher than layer start price!"
      },
      {
        "code": 6016,
        "name": "NextLayerSupMaxAmt",
        "msg": "Next layer number supered the max layer amount!"
      },
      {
        "code": 6017,
        "name": "JoinAmtInvalid",
        "msg": "Join amount must greater than 0!"
      },
      {
        "code": 6018,
        "name": "InTokenNEPoolToken",
        "msg": "Input mint token is not equal pool mint token!"
      },
      {
        "code": 6019,
        "name": "PoolCantJoin",
        "msg": "Pool are not investing status and cant be join!"
      },
      {
        "code": 6020,
        "name": "LayerNotOpening",
        "msg": "The join layer are not opening status!"
      },
      {
        "code": 6021,
        "name": "JoinAmtExceedRemainAmt",
        "msg": "Join amount exceed the remain amount of layer!"
      },
      {
        "code": 6022,
        "name": "DepositAccountNotMutable",
        "msg": "Creator deposit token account not mutable!"
      },
      {
        "code": 6023,
        "name": "PriceGTLayerSP",
        "msg": "Join price greater than the layer start price!"
      },
      {
        "code": 6024,
        "name": "RedeemAfterSettle",
        "msg": "Pool is still settling now, please redeem after settlement finished!"
      },
      {
        "code": 6025,
        "name": "AlreadyRedeemed",
        "msg": "Already redeemed, prohibition of double redemption!"
      },
      {
        "code": 6026,
        "name": "LLayreNotRedeem",
        "msg": "Last layer user cannot redeem when pool is investing state!"
      },
      {
        "code": 6027,
        "name": "TotalCostInvalid",
        "msg": "Pool Total Cost is invalid value!"
      },
      {
        "code": 6028,
        "name": "LayerTotalCostInvalid",
        "msg": "Layer Total Cost is invalid value!"
      },
      {
        "code": 6029,
        "name": "SettlePriceInvalid",
        "msg": "Pool Settle Price is invalid value!"
      },
      {
        "code": 6030,
        "name": "GoalPriceNotArrived",
        "msg": "Target price not arrived, can not stop profit!"
      },
      {
        "code": 6031,
        "name": "GoalProfRatNotArrived",
        "msg": "Target profit rate not arrived, can not stop profit!"
      },
      {
        "code": 6032,
        "name": "PoolNotInvest",
        "msg": "Pool are not investing state, can't stop profit!"
      },
      {
        "code": 6033,
        "name": "PoolNotStpp",
        "msg": "Pool are not Stop-Profit state, can't settle!"
      },
      {
        "code": 6034,
        "name": "CreatorAccountInsufficient",
        "msg": "Creator token account are insufficient!"
      },
      {
        "code": 6035,
        "name": "UserAccountInsufficient",
        "msg": "User token account are insufficient!"
      },
      {
        "code": 6036,
        "name": "ProfitInsufficient",
        "msg": "Pool profit are insufficient or pool profit are not be calcaluted!"
      }
    ]
  };
  
  export const IDL: MtsPool = {
    "version": "0.1.0",
    "name": "mts_pool",
    "instructions": [
      {
        "name": "initialize",
        "accounts": [
          {
            "name": "initializer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "permitTokens",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "token",
            "type": "publicKey"
          },
          {
            "name": "feeAccount",
            "type": "publicKey"
          },
          {
            "name": "priceFeedId",
            "type": "publicKey"
          }
        ]
      },
      {
        "name": "addPermitToken",
        "accounts": [
          {
            "name": "initializer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "permitTokens",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "token",
            "type": "publicKey"
          },
          {
            "name": "feeAccount",
            "type": "publicKey"
          },
          {
            "name": "priceFeedId",
            "type": "publicKey"
          }
        ]
      },
      {
        "name": "delPermitToken",
        "accounts": [
          {
            "name": "initializer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "permitTokens",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "token",
            "type": "publicKey"
          }
        ]
      },
      {
        "name": "createMtsPool",
        "accounts": [
          {
            "name": "creator",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mtsPool",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "layerOne",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "mintToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "poolTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "creatorDepositTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "permitTokens",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "ivInitAmt",
            "type": "u64"
          },
          {
            "name": "uniqueId",
            "type": "publicKey"
          }
        ]
      },
      {
        "name": "initMtsPool",
        "accounts": [
          {
            "name": "creator",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mtsPool",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "layerOne",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "layerUserPda",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "poolTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "creatorDepositTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "permitTokens",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "priceFeed",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "ivInitAmt",
            "type": "u64"
          },
          {
            "name": "isPoolData",
            "type": {
              "defined": "MTSPoolData"
            }
          },
          {
            "name": "isOtherParas",
            "type": {
              "defined": "PoolInitParas"
            }
          }
        ]
      },
      {
        "name": "createNextLayer",
        "accounts": [
          {
            "name": "creator",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "lastLayer",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "nextLayer",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "mtsPool",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "permitTokens",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "priceFeed",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "uniqueId",
            "type": "publicKey"
          },
          {
            "name": "currentPrice",
            "type": "u64"
          }
        ]
      },
      {
        "name": "joinMtspool",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mtsPool",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "layerUserPda",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "mintToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "depositTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "poolTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "layerAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "permitTokens",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "priceFeed",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "ivJoinAmt",
            "type": "u64"
          },
          {
            "name": "uniqueId",
            "type": "publicKey"
          },
          {
            "name": "joinPrice",
            "type": "u64"
          }
        ]
      },
      {
        "name": "redeemToken",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mtsPool",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "layerUserPda",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "mintToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "poolTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "feeTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "layerAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "changeMtspoolState",
        "accounts": [
          {
            "name": "mtsPool",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "permitTokens",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "priceFeed",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "ivState",
            "type": {
              "defined": "PoolState"
            }
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "permitTokens",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "initializer",
              "type": "publicKey"
            },
            {
              "name": "ptokens",
              "type": {
                "vec": {
                  "defined": "PermitTokenInfo"
                }
              }
            },
            {
              "name": "pools",
              "type": {
                "vec": {
                  "defined": "PoolInfo"
                }
              }
            }
          ]
        }
      },
      {
        "name": "mtsLayerUserData",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "userAccount",
              "type": "publicKey"
            },
            {
              "name": "index",
              "type": "u32"
            },
            {
              "name": "depositAccount",
              "type": "publicKey"
            },
            {
              "name": "joinAmount",
              "type": "u64"
            },
            {
              "name": "inPrice",
              "type": "u64"
            },
            {
              "name": "joinTime",
              "type": "i64"
            },
            {
              "name": "settledCostAmt",
              "type": "u64"
            },
            {
              "name": "allocedProfitAmt",
              "type": "u64"
            },
            {
              "name": "isRedeemed",
              "type": "bool"
            },
            {
              "name": "redeemTime",
              "type": "i64"
            }
          ]
        }
      },
      {
        "name": "mtsPoolLayerAccount",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "layerNo",
              "type": "u8"
            },
            {
              "name": "startPrice",
              "type": "u64"
            },
            {
              "name": "layerVol",
              "type": "u64"
            },
            {
              "name": "curlAmt",
              "type": "u64"
            },
            {
              "name": "totalCost",
              "type": "u64"
            },
            {
              "name": "layerStatus",
              "type": "u8"
            },
            {
              "name": "userAcctNumber",
              "type": "u32"
            },
            {
              "name": "lastUserPda",
              "type": "publicKey"
            }
          ]
        }
      },
      {
        "name": "mtsPoolData",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "uniqueId",
              "type": "publicKey"
            },
            {
              "name": "poolPdaBump",
              "type": "u8"
            },
            {
              "name": "creatorAccount",
              "type": "publicKey"
            },
            {
              "name": "mintToken",
              "type": "publicKey"
            },
            {
              "name": "tokenAccount",
              "type": "publicKey"
            },
            {
              "name": "initAmt",
              "type": "u64"
            },
            {
              "name": "fallPect",
              "type": "u8"
            },
            {
              "name": "multiple",
              "type": "u32"
            },
            {
              "name": "addUnit",
              "type": "u64"
            },
            {
              "name": "goalPrice",
              "type": "u64"
            },
            {
              "name": "goalProfRat",
              "type": "u8"
            },
            {
              "name": "profSharePect",
              "type": "u8"
            },
            {
              "name": "poolStatus",
              "type": {
                "defined": "PoolState"
              }
            },
            {
              "name": "poolFeeAccount",
              "type": "publicKey"
            },
            {
              "name": "layerPdas",
              "type": {
                "vec": {
                  "defined": "MTSPoolLayerPDAs"
                }
              }
            },
            {
              "name": "maxLayerUserNo",
              "type": "u8"
            },
            {
              "name": "maxLayers",
              "type": "u8"
            },
            {
              "name": "tokenAmountSum",
              "type": "u64"
            },
            {
              "name": "totalCost",
              "type": "u64"
            },
            {
              "name": "settlePrice",
              "type": "u64"
            },
            {
              "name": "settleTime",
              "type": "i64"
            },
            {
              "name": "totalProfit",
              "type": "u64"
            },
            {
              "name": "creteTime",
              "type": "i64"
            }
          ]
        }
      }
    ],
    "types": [
      {
        "name": "PermitTokenInfo",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "ptoken",
              "type": "publicKey"
            },
            {
              "name": "feeAccount",
              "type": "publicKey"
            },
            {
              "name": "priceFeedId",
              "type": "publicKey"
            }
          ]
        }
      },
      {
        "name": "PoolInfo",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "poolPubkey",
              "type": "publicKey"
            },
            {
              "name": "poolId",
              "type": "u32"
            }
          ]
        }
      },
      {
        "name": "MTSPoolLayerPDAs",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "layerNo",
              "type": "u8"
            },
            {
              "name": "layerPda",
              "type": "publicKey"
            }
          ]
        }
      },
      {
        "name": "PoolInitParas",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "layeroneVol",
              "type": "u64"
            },
            {
              "name": "inPrice",
              "type": "u64"
            }
          ]
        }
      },
      {
        "name": "PoolState",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "Investing"
            },
            {
              "name": "StopedProfit"
            },
            {
              "name": "Settled"
            }
          ]
        }
      },
      {
        "name": "LayerState",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "Opening"
            },
            {
              "name": "Pending"
            }
          ]
        }
      }
    ],
    "errors": [
      {
        "code": 6000,
        "name": "MintTokenExist",
        "msg": "Permited Mint Token for MTS pool already exist!"
      },
      {
        "code": 6001,
        "name": "PermitTokenExceedLargestNumber",
        "msg": "Permit token exceeded the largest permit token number(318)!"
      },
      {
        "code": 6002,
        "name": "MintTokenNotExist",
        "msg": "Cancellation Mint Token not exist!"
      },
      {
        "code": 6003,
        "name": "MinTokenNotPermitedForMTSPool",
        "msg": "Imported Mint Token does't permited for MTS pool!"
      },
      {
        "code": 6004,
        "name": "InitAmtCantbezero",
        "msg": "Initial amount cannot be zero!"
      },
      {
        "code": 6005,
        "name": "LayerVolCantbezero",
        "msg": "Layre amount volume cannot be zero!"
      },
      {
        "code": 6006,
        "name": "InPriceCantbezero",
        "msg": "Importing price cannot be zero!"
      },
      {
        "code": 6007,
        "name": "InintAmtNotMlutiplesOfUnit",
        "msg": "Initial amount are not multiples of add uinit!"
      },
      {
        "code": 6008,
        "name": "AddUnitIsZero",
        "msg": "Add unit should not equal zero when initial MTS pool!"
      },
      {
        "code": 6009,
        "name": "FallPectInvalid",
        "msg": "Fall percent value should between 0 and 100"
      },
      {
        "code": 6010,
        "name": "GoalSetClash",
        "msg": "Either goal_price or goal_prof_rat should exist value"
      },
      {
        "code": 6011,
        "name": "InPriceInvalid",
        "msg": "The importing price is invalid!"
      },
      {
        "code": 6012,
        "name": "PriceFeedErr",
        "msg": "The price feed account is invalid!"
      },
      {
        "code": 6013,
        "name": "LastlayerError",
        "msg": "Importing last layer acocunt is not the last layer account in the pool!"
      },
      {
        "code": 6014,
        "name": "LastlayerNotPending",
        "msg": "Last layer acocunt is not appending state, cant create next layer!"
      },
      {
        "code": 6015,
        "name": "PriceGTStartprice",
        "msg": "Current price higher than layer start price!"
      },
      {
        "code": 6016,
        "name": "NextLayerSupMaxAmt",
        "msg": "Next layer number supered the max layer amount!"
      },
      {
        "code": 6017,
        "name": "JoinAmtInvalid",
        "msg": "Join amount must greater than 0!"
      },
      {
        "code": 6018,
        "name": "InTokenNEPoolToken",
        "msg": "Input mint token is not equal pool mint token!"
      },
      {
        "code": 6019,
        "name": "PoolCantJoin",
        "msg": "Pool are not investing status and cant be join!"
      },
      {
        "code": 6020,
        "name": "LayerNotOpening",
        "msg": "The join layer are not opening status!"
      },
      {
        "code": 6021,
        "name": "JoinAmtExceedRemainAmt",
        "msg": "Join amount exceed the remain amount of layer!"
      },
      {
        "code": 6022,
        "name": "DepositAccountNotMutable",
        "msg": "Creator deposit token account not mutable!"
      },
      {
        "code": 6023,
        "name": "PriceGTLayerSP",
        "msg": "Join price greater than the layer start price!"
      },
      {
        "code": 6024,
        "name": "RedeemAfterSettle",
        "msg": "Pool is still settling now, please redeem after settlement finished!"
      },
      {
        "code": 6025,
        "name": "AlreadyRedeemed",
        "msg": "Already redeemed, prohibition of double redemption!"
      },
      {
        "code": 6026,
        "name": "LLayreNotRedeem",
        "msg": "Last layer user cannot redeem when pool is investing state!"
      },
      {
        "code": 6027,
        "name": "TotalCostInvalid",
        "msg": "Pool Total Cost is invalid value!"
      },
      {
        "code": 6028,
        "name": "LayerTotalCostInvalid",
        "msg": "Layer Total Cost is invalid value!"
      },
      {
        "code": 6029,
        "name": "SettlePriceInvalid",
        "msg": "Pool Settle Price is invalid value!"
      },
      {
        "code": 6030,
        "name": "GoalPriceNotArrived",
        "msg": "Target price not arrived, can not stop profit!"
      },
      {
        "code": 6031,
        "name": "GoalProfRatNotArrived",
        "msg": "Target profit rate not arrived, can not stop profit!"
      },
      {
        "code": 6032,
        "name": "PoolNotInvest",
        "msg": "Pool are not investing state, can't stop profit!"
      },
      {
        "code": 6033,
        "name": "PoolNotStpp",
        "msg": "Pool are not Stop-Profit state, can't settle!"
      },
      {
        "code": 6034,
        "name": "CreatorAccountInsufficient",
        "msg": "Creator token account are insufficient!"
      },
      {
        "code": 6035,
        "name": "UserAccountInsufficient",
        "msg": "User token account are insufficient!"
      },
      {
        "code": 6036,
        "name": "ProfitInsufficient",
        "msg": "Pool profit are insufficient or pool profit are not be calcaluted!"
      }
    ]
  };
  