declare module "*.svg" {
	const value: any;
	export = value;
}

declare module "*.gql" {
	const value: any;
	export = value;
}

declare namespace NodeJS {
    interface Module {
      hot?: {
        accept(
          dependencies: string[],
          callback: () => void
        ): void;
      };
    }
  }