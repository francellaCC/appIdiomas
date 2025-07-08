export type Module = {
  id: number;
  title: string;
  description: string;
  order: number;
 language: {
    id:number,
    name?:string
  }
};

export type TypeModuleForm = {
  id?: number;
  title: string;
  description: string;
  order: number;
  language: {
    id:number,
    name?:string
  }
};

export interface Language {
  id: number;
  name: string;
  code: string; // ej: "en", "es", "fr"
}

export type LanguageFormData = {
  name: string;
  code: string;
  id?: number; // <-- ahora es opcional
};