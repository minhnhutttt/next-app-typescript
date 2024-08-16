declare module 'three/examples/jsm/loaders/MTLLoader' {
    import { Loader, LoadingManager, MaterialCreator } from 'three';

    export class MTLLoader extends Loader {
        constructor(manager?: LoadingManager);
        materials: MaterialCreator;
        load(
            url: string,
            onLoad: (materials: MaterialCreator) => void,
            onProgress?: (event: ProgressEvent) => void,
            onError?: (event: ErrorEvent) => void
        ): void;
        parse(text: string, path: string): MaterialCreator;
        setBaseUrl(path: string): this;
        setPath(path: string): this;
        setMaterialOptions(options: MaterialCreator): this;
    }
}

declare module 'three/examples/jsm/loaders/OBJLoader' {
    import {
        Loader,
        LoadingManager,
        Group,
    } from 'three';

    export class OBJLoader extends Loader {
        constructor(manager?: LoadingManager);
        load(
            url: string,
            onLoad: (object: Group) => void,
            onProgress?: (event: ProgressEvent) => void,
            onError?: (event: ErrorEvent) => void
        ): void;
        parse(data: ArrayBuffer | string): Group;
    }
}
