import { Types } from 'mongoose';

export interface Hair {
  style: number;
  color: number;
}

export interface Stats {
  level: number;
  hp: number;
  maxHp: number;
}

export interface Equipment {
  armor: number;
  weapon: number;
  boots: number;
}

export interface InventoryItem {
  id: Types.ObjectId;
  gridNum: number;
  item: GameItem;
}

export interface GameItem {
  id: number;
  name: string;
  weight: number;
  type: number;
}

export interface GamePosition {
  map: number;
  x: number;
  y: number;
}