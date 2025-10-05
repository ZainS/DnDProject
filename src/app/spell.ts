export interface Spell {
  index: string;
  name: string;
  desc: []
  higher_level?: [];
  range: string;
  components: string[];
  material?: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type?: string;
  damage?: {
    damage_type: {
      index: string;
      name: string;
      url: string;
    };
    damage_at_slot_level?: { [key: string]: string };
    damage_at_character_level?: { [key: string]: string };
  };
  school: {
    index: string;
    name: string;
    url: string;
  };
  classes: {
    index: string;
    name: string;
    url: string;
  }[];
  subclasses: {
    index: string;
    name: string;
    url: string;
  }[];
  url: string;
}
