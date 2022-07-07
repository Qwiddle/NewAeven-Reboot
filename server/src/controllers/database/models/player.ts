import { Schema, model, Types } from 'mongoose';
import { Hair, Stats, InventoryItem, Equipment, GamePosition } from '../../../../../shared/types';

interface IPlayer {
  account: string;
  username: string;
  admin: number;
  dir: number;
  map: GamePosition['map'];
  x: GamePosition['x'];
  y: GamePosition['y'];
  level: Stats['level'];
  hp: Stats['hp'];
  maxHp: Stats['maxHp'];
  sex: number;
  race: number;
  hairColor: Hair['color'];
  hairStyle: Hair['style'];
  armor: Equipment['armor'];
  weapon: Equipment['weapon'];
  boots: Equipment['boots'];
  inventory: Types.DocumentArray<InventoryItem>;
}

const playerSchema = new Schema<IPlayer>({
  account: String,
  username: String,
  admin: {
    type: Number,
    default: 0
  },
  sex: Number,
  race: Number,
  dir: Number,
  map: Number,
  x: Number,
  y: Number,
  level: {
    type: Number,
    default: 0
  },
  hp: Number,
  maxHp: Number,
  hairColor: Number,
  hairStyle: Number,
  armor: Number,
  weapon: Number,
  boots: Number,
  inventory: [{ gridNum: Number, item: {} }]
});

export const Player = model<IPlayer>('Player', playerSchema);