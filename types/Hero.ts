/**
 * A hero defines a hero image and it's properties
 * @type {Hero}
 */
class Hero {
  url: string;
  description: string;
  width: number;
  height: number;
  quality: number;

  constructor(url:string, description:string, width:number, height:number, quality:number) {
    this.url = url || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUUNaoBwABogDkC7u/YgAAAABJRU5ErkJggg==";
    this.description= description || "loading";
    this.width=width || 200;
    this.height=height || 200;
    this.quality=quality|| 100;

  }
}


export {};