import ts from 'typescript';

export interface AutoTestFuncInfo {
    name: string | ts.__String;
    code: string;
    path: string;
    absolutePath: string;
    exportType: 'default' | 'named' | 'namedExpression';
    referenceCodes?: string[];
};