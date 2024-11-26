/// <reference types="vite/client" />

declare module "vite-plugin-copy" {
  interface CopyPluginOptions {
    targets: Array<{ src: string; dest: string }>;
  }
  export default function CopyPlugin(options: CopyPluginOptions): any;
}
