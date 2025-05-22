export type Module = {
  id: number;
  title: string;
  description: string;
  order: number;
};

export interface Language {
  id: number;
  name: string;
  code: string; // ej: "en", "es", "fr"
}