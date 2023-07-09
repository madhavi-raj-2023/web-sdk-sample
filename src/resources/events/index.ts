import { Base } from '../base';
// import { NewPost, Post } from './types';


export class EventsLog  extends Base {
  getGetEventLog(e : string, m: string){
    return this.logEvent(e, m);
  }

  getProductDetail(e : string, m: string, pd: object){
    return this.logEvent(e, m);
  }
}