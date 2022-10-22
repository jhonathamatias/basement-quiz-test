import { createContext, ReactNode, useContext, useState } from "react";
import { RoundType } from "../types/quizApi";

type PlayerType = {
  id: number;
  name: string;
}

type InitialStateProps = {
  player: PlayerType;
  category_id: number;
  round: RoundType;
}

export type GameContextProps = {
  state: InitialStateProps;
  setState: React.Dispatch<React.SetStateAction<InitialStateProps>>;
}

const GameContext = createContext<GameContextProps>(null!);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<InitialStateProps>({} as InitialStateProps);

  return <GameContext.Provider
    value={{ state, setState }}
  >
    {children}
  </GameContext.Provider>;
}

export function useGameContext() {
  return useContext(GameContext);
}