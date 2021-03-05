export class Spelare{

  constructor(private namn?: string, private fattning?: string, private alder?: number,
              private langd?: number, private position?: string ) {
  }

  get Namn() {
    return this.namn;
  }

  set Namn(n: string) {
    this.namn = n;
  }

  get Fattning() {
    return this.fattning;
  }

  set Fattning(f: string) {
    this.fattning = f;
  }

  get Alder() {
    return this.alder;
  }

  set Alder(a: number) {
    this.alder = a;
  }

  get Langd() {
    return this.langd;
  }

  set Langd(l: number) {
    this.langd = l;
  }

  get Position() {
    return this.position;
  }

  set Position(p: string) {
    this.position = p;
  }

}
