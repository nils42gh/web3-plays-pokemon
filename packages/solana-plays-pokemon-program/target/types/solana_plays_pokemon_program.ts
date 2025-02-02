export type SolanaPlaysPokemonProgram = {
  "version": "0.1.0",
  "name": "solana_plays_pokemon_program",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "gameState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nextGameState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "framesImageCid",
          "type": "string"
        },
        {
          "name": "saveStateCid",
          "type": "string"
        }
      ]
    },
    {
      "name": "vote",
      "accounts": [
        {
          "name": "gameState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "joypadButton",
          "type": {
            "defined": "JoypadButton"
          }
        }
      ]
    },
    {
      "name": "updateGameState",
      "accounts": [
        {
          "name": "gameState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nextGameState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "executedButton",
          "type": {
            "defined": "JoypadButton"
          }
        },
        {
          "name": "framesImageCid",
          "type": "string"
        },
        {
          "name": "saveStateCid",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "gameData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "executedStatesCount",
            "type": "u32"
          },
          {
            "name": "isExecuting",
            "type": "bool"
          },
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "gameState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u32"
          },
          {
            "name": "upCount",
            "type": "u32"
          },
          {
            "name": "downCount",
            "type": "u32"
          },
          {
            "name": "leftCount",
            "type": "u32"
          },
          {
            "name": "rightCount",
            "type": "u32"
          },
          {
            "name": "aCount",
            "type": "u32"
          },
          {
            "name": "bCount",
            "type": "u32"
          },
          {
            "name": "startCount",
            "type": "u32"
          },
          {
            "name": "selectCount",
            "type": "u32"
          },
          {
            "name": "nothingCount",
            "type": "u32"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "executedButton",
            "type": {
              "defined": "JoypadButton"
            }
          },
          {
            "name": "framesImageCid",
            "type": "string"
          },
          {
            "name": "saveStateCid",
            "type": "string"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "JoypadButton",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Up"
          },
          {
            "name": "Down"
          },
          {
            "name": "Left"
          },
          {
            "name": "Right"
          },
          {
            "name": "A"
          },
          {
            "name": "B"
          },
          {
            "name": "Start"
          },
          {
            "name": "Select"
          },
          {
            "name": "Nothing"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "ExecuteGameState",
      "fields": [
        {
          "name": "index",
          "type": "u32",
          "index": false
        },
        {
          "name": "gameDataId",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "GameIsExecuting",
      "msg": "Button presses are not allowed when the game is executing."
    },
    {
      "code": 6001,
      "name": "NoUpdatesIfNotExecuting",
      "msg": "Game state cannot be updated when the game is not executing."
    }
  ]
};

export const IDL: SolanaPlaysPokemonProgram = {
  "version": "0.1.0",
  "name": "solana_plays_pokemon_program",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "gameState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nextGameState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "framesImageCid",
          "type": "string"
        },
        {
          "name": "saveStateCid",
          "type": "string"
        }
      ]
    },
    {
      "name": "vote",
      "accounts": [
        {
          "name": "gameState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "joypadButton",
          "type": {
            "defined": "JoypadButton"
          }
        }
      ]
    },
    {
      "name": "updateGameState",
      "accounts": [
        {
          "name": "gameState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nextGameState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "executedButton",
          "type": {
            "defined": "JoypadButton"
          }
        },
        {
          "name": "framesImageCid",
          "type": "string"
        },
        {
          "name": "saveStateCid",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "gameData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "executedStatesCount",
            "type": "u32"
          },
          {
            "name": "isExecuting",
            "type": "bool"
          },
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "gameState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u32"
          },
          {
            "name": "upCount",
            "type": "u32"
          },
          {
            "name": "downCount",
            "type": "u32"
          },
          {
            "name": "leftCount",
            "type": "u32"
          },
          {
            "name": "rightCount",
            "type": "u32"
          },
          {
            "name": "aCount",
            "type": "u32"
          },
          {
            "name": "bCount",
            "type": "u32"
          },
          {
            "name": "startCount",
            "type": "u32"
          },
          {
            "name": "selectCount",
            "type": "u32"
          },
          {
            "name": "nothingCount",
            "type": "u32"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "executedButton",
            "type": {
              "defined": "JoypadButton"
            }
          },
          {
            "name": "framesImageCid",
            "type": "string"
          },
          {
            "name": "saveStateCid",
            "type": "string"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "JoypadButton",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Up"
          },
          {
            "name": "Down"
          },
          {
            "name": "Left"
          },
          {
            "name": "Right"
          },
          {
            "name": "A"
          },
          {
            "name": "B"
          },
          {
            "name": "Start"
          },
          {
            "name": "Select"
          },
          {
            "name": "Nothing"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "ExecuteGameState",
      "fields": [
        {
          "name": "index",
          "type": "u32",
          "index": false
        },
        {
          "name": "gameDataId",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "GameIsExecuting",
      "msg": "Button presses are not allowed when the game is executing."
    },
    {
      "code": 6001,
      "name": "NoUpdatesIfNotExecuting",
      "msg": "Game state cannot be updated when the game is not executing."
    }
  ]
};
