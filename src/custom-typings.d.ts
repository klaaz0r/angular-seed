// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare var ENV: string;
declare var HMR: boolean;
declare var System: SystemJS;
declare module '*';

interface SystemJS {
    import: (path?: string) => Promise<any>;
}

interface GlobalEnvironment {
    ENV;
    HMR;
    SystemJS: SystemJS;
    System: SystemJS;
}

interface Global extends GlobalEnvironment { }
