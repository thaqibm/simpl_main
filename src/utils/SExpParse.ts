export enum SExpType {
    ATOM = 0, 
    LIST, 
    BADSEXP
};

export interface SExp{
}
class SExpNode implements SExp{
    first: SExp | null = null;
    second: SExpNode | null = null; 
}

function parseSExp(prog: String): SExp | null{
    return null;
}