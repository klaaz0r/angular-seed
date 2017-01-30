// Types
type Entry = Array<string> | Object;

type Output = Array<string> | {
    path: string,
    filename: string
};

type Performance = Object;

type EnvOptions = any;

interface WebpackConfig {
    cache?: boolean;
    target?: string;
    devtool?: string;
    entry: Entry;
    output: any;
    performance: any;
    module?: any;
    // module?: {
    //   preLoaders?: Array<any>;
    //   loaders?: Array<any>;
    //   postLoaders?: Array<any>
    // };
    plugins?: Array<any>;
    resolve?: any;
    devServer?: any;
    node?: {
        process?: boolean;
        global?: boolean | string;
        Buffer?: boolean;
        crypto?: string | boolean;
        module?: boolean;
        clearImmediate?: boolean;
        setImmediate?: boolean
        clearTimeout?: boolean;
        setTimeout?: boolean
    };
}
