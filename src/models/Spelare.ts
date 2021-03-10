export class Spelare{

  constructor(private namn?: string, private fattning?: string, private alder?: string,
              private langd?: string, private position?: string, private visaInfo?: boolean) {
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

  set Alder(a: string) {
    this.alder = a;
  }

  get Langd() {
    return this.langd;
  }

  set Langd(l: string) {
    this.langd = l;
  }

  get Position() {
    return this.position;
  }

  set Position(p: string) {
    this.position = p;
  }

  get VisaInfo() {
    return this.visaInfo;
  }

  set VisaInfo(p: boolean) {
    this.visaInfo = p;
  }

}
