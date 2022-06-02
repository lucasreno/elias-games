import { Produto } from "./produto";

export interface Categoria {
    idCategoria: number;
    nome: string;
    produtos: Produto[];
}
